"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BookCard } from "../components/BookCard";
import { getBooks } from "../lib/books";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);
  const books = getBooks()
    .filter((book) =>
      searchQuery
        ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
    .slice(0, 3);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    setRecentlyViewed(getBooks().filter((b) => viewed.includes(b.id)));
  }, []);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-[var(--background)]">
      <main className="flex flex-col gap-12 items-center">
        <div className="text-center">
          <Image
            className="dark:invert mx-auto"
            src="/litshelf-logo.svg"
            alt="LitShelf logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mt-4 text-[var(--foreground)]">Welcome to LitShelf</h1>
          <p className="text-lg max-w-2xl mt-2 text-[var(--foreground)]">
            Discover your next favorite book with our curated collection and personalized recommendations.
          </p>
        </div>
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
          aria-label="Search books by title, author, or genre"
        />
        <Link
          href="/recommend"
          className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-3 font-medium glassmorphic"
          aria-label="Get personalized book recommendations"
        >
          Get Recommendations
        </Link>
        <h2 className="text-2xl font-semibold mt-12 text-[var(--foreground)]">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {recentlyViewed.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-12 text-[var(--foreground)]">Recently Viewed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {recentlyViewed.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}