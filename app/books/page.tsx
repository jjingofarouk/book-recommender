"use client";
import { useState } from "react";
import { BookCard } from "../components/BookCard";
import { FilterBar } from "../components/FilterBar";
import { getBooks, sortBooks } from "../lib/books";

export default function Books() {
  const books = getBooks();
  const [genreFilter, setGenreFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [formatFilter, setFormatFilter] = useState("");
  const [audienceFilter, setAudienceFilter] = useState("");
  const [seriesFilter, setSeriesFilter] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books
    .filter(
      (book) =>
        (!genreFilter || book.genre.toLowerCase() === genreFilter.toLowerCase()) &&
        (!authorFilter || book.author.toLowerCase() === authorFilter.toLowerCase()) &&
        (!languageFilter || book.language.toLowerCase() === languageFilter.toLowerCase()) &&
        (!countryFilter || book.countryOfOrigin.toLowerCase() === countryFilter.toLowerCase()) &&
        (!formatFilter || book.format.toLowerCase() === formatFilter.toLowerCase()) &&
        (!audienceFilter || book.targetAudience.toLowerCase() === audienceFilter.toLowerCase()) &&
        (!seriesFilter || book.series?.toLowerCase() === seriesFilter.toLowerCase()) &&
        (book.price >= minPrice && book.price <= maxPrice) &&
        (!searchQuery ||
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())))
    );

  const sortedBooks = sortBy
    ? sortBooks(filteredBooks, sortBy as any)
    : filteredBooks;

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)]">Browse Books</h1>
      <div className="flex flex-col gap-6 mb-10">
        <input
          type="text"
          placeholder="Search by title, author, or keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-transparent text-[var(--foreground)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <FilterBar
            genres={[...new Set(books.map((b) => b.genre))]}
            authors={[...new Set(books.map((b) => b.author))]}
            languages={[...new Set(books.map((b) => b.language))]}
            countries={[...new Set(books.map((b) => b.countryOfOrigin))]}
            formats={[...new Set(books.map((b) => b.format))]}
            audiences={[...new Set(books.map((b) => b.targetAudience))]}
            series={[...new Set(books.map((b) => b.series).filter((s): s is string => !!s))]}
            onGenreChange={setGenreFilter}
            onAuthorChange={setAuthorFilter}
            onLanguageChange={setLanguageFilter}
            onCountryChange={setCountryFilter}
            onFormatChange={setFormatFilter}
            onAudienceChange={setAudienceFilter}
            onSeriesChange={setSeriesFilter}
            onPriceRangeChange={(min, max) => {
              setMinPrice(min);
              setMaxPrice(max);
            }}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-transparent text-[var(--foreground)] focus:outline-none"
          >
            <option value="">Sort By</option>
            <option value="title">Title (A-Z)</option>
            <option value="author">Author (A-Z)</option>
            <option value="year">Year (Newest)</option>
            <option value="rating">Rating (Highest)</option>
            <option value="price">Price (Lowest)</option>
            <option value="pageCount">Pages (Fewest)</option>
            <option value="language">Language</option>
            <option value="country">Country</option>
          </select>
        </div>
      </div>
      {sortedBooks.length === 0 ? (
        <p className="text-lg text-[var(--gray-light)] text-center">No books match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}