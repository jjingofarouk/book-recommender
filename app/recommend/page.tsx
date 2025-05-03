"use client";

import { useState, useEffect } from "react";
import { RecommendationForm } from "../components/RecommendationForm";
import { BookCard } from "../components/BookCard";
import { getSmartRecommendations, Book } from "../lib/books";

export default function Recommend() {
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load initial recommendations on mount
  useEffect(() => {
    setLoading(true);
    const books = getSmartRecommendations(null); // Pass userId if available
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