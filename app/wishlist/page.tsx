"use client";
import { useState, useEffect } from "react";
import { BookCard } from "../components/BookCard";
import { getBooks, getWishlistStats, getReadingProgress } from "../lib/books";

export default function Wishlist() {
  const [wishlistBooks, setWishlistBooks] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const books = getBooks().filter((b) => wishlist.includes(b.id));
    setWishlistBooks(books);
    setStats(getWishlistStats(wishlist));
    setProgress(getReadingProgress(wishlist));
  }, []);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-[var(--background)]">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)]">Your Wishlist</h1>
      {stats && (
        <div className="glassmorphic p-6 mb-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Wishlist Stats</h2>
          <p className="text-[var(--foreground)]">Total Books: {stats.totalBooks}</p>
          <p className="text-[var(--foreground)]">Total Pages: {stats.totalPages}</p>
          <p className="text-[var(--foreground)]">Average Price: ${stats.averagePrice.toFixed(2)}</p>
          <p className="text-[var(--foreground)]">
            Preferred Genres: {stats.preferredGenres.join(", ") || "None"}
          </p>
          <p className="text-[var(--foreground)]">
            Preferred Languages: {stats.preferredLanguages.join(", ") || "None"}
          </p>
          <p className="text-[var(--foreground)]">
            Preferred Countries: {stats.preferredCountries.join(", ") || "None"}
          </p>
          {progress && (
            <>
              <h3 className="text-xl font-semibold mt-4 text-[var(--foreground)]">Reading Progress</h3>
              <p className="text-[var(--foreground)]">Total Reading Time: {progress.totalReadingTime}</p>
              <p className="text-[var(--foreground)]">
                Estimated Completion: {progress.estimatedCompletionDays} days
              </p>
            </>
          )}
        </div>
      )}
      {wishlistBooks.length === 0 ? (
        <p className="text-lg text-[var(--foreground)]">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}