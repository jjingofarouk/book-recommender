"use client";
import { useState, useEffect } from "react";
import { getPersonalizedRecommendations, getBooks } from "../lib/books";

export function RecommendationForm({
  onSubmit,
}: {
  onSubmit: (books: any[]) => void;
}) {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [minRating, setMinRating] = useState(4); // Default to 4/5
  const [maxPages, setMaxPages] = useState("");
  const [loading, setLoading] = useState(false);

  // Get unique genres for dropdown
  const uniqueGenres = [...new Set(getBooks().map((book) => book.genre))];

  // Load user preferences from local storage (wishlist or recently viewed)
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    const userBooks = getBooks().filter((book) =>
      [...wishlist, ...viewed].includes(book.id)
    );

    if (userBooks.length > 0) {
      const mostCommonGenre = userBooks
        .reduce((acc, book) => {
          acc[book.genre] = (acc[book.genre] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
        .sort((a, b) => b[1] - a[1])[0];
      setGenre(mostCommonGenre?.[0] || "");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const preferences = {
      genre: genre || undefined,
      author: author || undefined,
      minRating: minRating ? Number(minRating) : undefined,
      maxPages: maxPages ? Number(maxPages) : undefined,
    };

    // Enhance with inferred preferences
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const userBooks = getBooks().filter((book) => wishlist.includes(book.id));
    if (userBooks.length > 0) {
      const avgPages = userBooks.reduce((sum, book) => sum + book.pageCount, 0) / userBooks.length;
      preferences.maxPages = preferences.maxPages || Math.ceil(avgPages * 1.2); // 20% more than average
    }

    const books = getPersonalizedRecommendations(preferences);
    onSubmit(books);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <label className="text-[var(--foreground)]">Select Genre</label>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">Any Genre</option>
        {uniqueGenres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Author (optional)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />

      <input
        type="number"
        placeholder="Max Pages (optional)"
        value={maxPages}
        onChange={(e) => setMaxPages(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />

      <button
        type="submit"
        className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Recommendations"}
      </button>
    </form>
  );
}