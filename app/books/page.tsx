"use client";
import { useState } from "react";
import { BookCard } from "../components/BookCard";
import { FilterBar } from "../components/FilterBar";
import { getBooks } from "../lib/books";

export default function Books() {
  const books = getBooks();
  const [genreFilter, setGenreFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books
    .filter(
      (book) =>
        (!genreFilter || book.genre === genreFilter) &&
        (!authorFilter || book.author === authorFilter) &&
        (!searchQuery ||
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      if (sortBy === "genre") return a.genre.localeCompare(b.genre);
      return 0;
    });

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)]">Browse Books</h1>
      <div className="flex flex-col gap-6 mb-10">
        <input
          type="text"
          placeholder="Search by title, author, or genre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-transparent text-[var(--foreground)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <FilterBar
            genres={[...new Set(books.map((b) => b.genre))]}
            authors={[...new Set(books.map((b) => b.author))]}
            onGenreChange={setGenreFilter}
            onAuthorChange={setAuthorFilter}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-transparent text-[var(--foreground)] focus:outline-none"
          >
            <option value="">Sort By</option>
            <option value="title">Title (A-Z)</option>
            <option value="author">Author (A-Z)</option>
            <option value="genre">Genre</option>
          </select>
        </div>
      </div>
      {filteredBooks.length === 0 ? (
        <p className="text-lg text-[var(--gray-light)] text-center">No books match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}