"use client";

import { useState, useEffect } from "react";
import { RecommendationForm } from "../components/RecommendationForm";
import { BookCard } from "../components/BookCard";
import { getBooks, Book } from "../lib/books";

export default function Recommend() {
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to calculate a weighted score for each book
  const calculateBookScore = (
    book: Book,
    userPrefs: {
      genres: string[];
      authors: string[];
      avgPages: number;
      avgRating: number;
      languages: string[];
      tags: string[];
      keywords: string[];
    }
  ): number => {
    let score = 0;

    // Weight 1: Rating (max 5 points)
    score += book.averageRating * 1;

    // Weight 2: Genre match (max 3 points)
    if (userPrefs.genres.includes(book.genre)) {
      score += 3;
    }

    // Weight 3: Author match (max 3 points)
    if (userPrefs.authors.includes(book.author)) {
      score += 3;
    }

    // Weight 4: Language match (max 1 point)
    if (userPrefs.languages.includes(book.language)) {
      score += 1;
    }

    // Weight 5: Page count proximity (max 2 points)
    const pageDiff = Math.abs(book.pageCount - userPrefs.avgPages);
    const pageScore = Math.max(2 - pageDiff / 200, 0); // Closer to avgPages = higher score
    score += pageScore;

    // Weight 6: Tag/keyword overlap (max 2 points)
    const tagMatches = book.tags.filter((tag) => userPrefs.tags.includes(tag)).length;
    const keywordMatches = book.keywords.filter((kw) => userPrefs.keywords.includes(kw)).length;
    score += (tagMatches + keywordMatches) * 0.5;

    // Bonus: Recent popularity (based on reviews)
    score += book.reviews.length * 0.1;

    return score;
  };

  // Function to get recommendations based on user data
  const getSmartRecommendations = (): Book[] => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    const userBooks = getBooks().filter((book) =>
      [...wishlist, ...recentlyViewed].includes(book.id)
    );

    let userPrefs = {
      genres: [] as string[],
      authors: [] as string[],
      avgPages: 0,
      avgRating: 0,
      languages: [] as string[],
      tags: [] as string[],
      keywords: [] as string[],
    };

    // If user has interacted with books, infer preferences
    if (userBooks.length > 0) {
      // Genres
      const genreCounts = userBooks.reduce((acc, book) => {
        acc[book.genre] = (acc[book.genre] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      userPrefs.genres = Object.entries(genreCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([genre]) => genre)
        .slice(0, 3);

      // Authors
      userPrefs.authors = [...new Set(userBooks.map((book) => book.author))].slice(0, 3);

      // Average page count
      userPrefs.avgPages =
        userBooks.reduce((sum, book) => sum + book.pageCount, 0) / userBooks.length || 300;

      // Average rating preference
      userPrefs.avgRating =
        userBooks.reduce((sum, book) => sum + book.averageRating, 0) / userBooks.length || 4;

      // Languages
      userPrefs.languages = [...new Set(userBooks.map((book) => book.language))].slice(0, 2);

      // Tags and keywords
      userPrefs.tags = userBooks
        .flatMap((book) => book.tags)
        .filter((tag, i, arr) => arr.indexOf(tag) === i)
        .slice(0, 5);
      userPrefs.keywords = userBooks
        .flatMap((book) => book.keywords)
        .filter((kw, i, arr) => arr.indexOf(kw) === i)
        .slice(0, 5);
    } else {
      // Default preferences for new users
      userPrefs = {
        genres: ["Fiction", "Dystopian", "Fantasy"], // Popular genres
        authors: ["J.R.R. Tolkien", "George Orwell"], // Popular authors
        avgPages: 300,
        avgRating: 4,
        languages: ["English"],
        tags: ["classic", "adventure"],
        keywords: ["quest", "freedom"],
      };
    }

    // Score and rank books
    const allBooks = getBooks();
    const scoredBooks = allBooks
      .filter((book) => book.averageRating >= userPrefs.avgRating - 1) // Filter out low-rated books
      .map((book) => ({
        book,
        score: calculateBookScore(book, userPrefs),
      }))
      .sort((a, b) => b.score - a.score);

    // Ensure diversity by limiting consecutive books from the same genre
    const diverseBooks: Book[] = [];
    const genreCount: Record<string, number> = {};
    for (const { book } of scoredBooks) {
      if (diverseBooks.length >= 6) break;
      genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
      if (genreCount[book.genre] <= 2) { // Max 2 books per genre
        diverseBooks.push(book);
      }
    }

    return diverseBooks;
  };

  // Load initial recommendations on mount
  useEffect(() => {
    setLoading(true);
    const books = getSmartRecommendations();
    setRecommendedBooks(books);
    setLoading(false);
  }, []);

  // Handle form submission
  const handleRecommendations = (books: Book[]) => {
    setRecommendedBooks(books);
  };

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-8 text-[var(--foreground)]">
        Personalized Recommendations
      </h1>

      {/* Button to toggle form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
      >
        {showForm ? "Hide Filters" : "Refine Recommendations"}
      </button>

      {/* Show form if toggled */}
      {showForm && (
        <div className="mb-12">
          <RecommendationForm onSubmit={handleRecommendations} />
        </div>
      )}

      {/* Loading state */}
      {loading ? (
        <p className="text-[var(--foreground)]">Loading recommendations...</p>
      ) : recommendedBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--foreground)]">
          No recommendations found. Try refining your preferences!
        </p>
      )}
    </div>
  );
}