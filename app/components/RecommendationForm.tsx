"use client";
import { useState } from "react";
import { getPersonalizedRecommendations } from "../lib/books";

export function RecommendationForm({
  onSubmit,
}: {
  onSubmit: (books: any[]) => void;
}) {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [format, setFormat] = useState("");
  const [audience, setAudience] = useState("");
  const [series, setSeries] = useState("");
  const [minRating, setMinRating] = useState("");
  const [maxPages, setMaxPages] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const preferences = {
      genre: genre || undefined,
      author: author || undefined,
      language: language || undefined,
      country: country || undefined,
      format: format || undefined,
      audience: audience || undefined,
      series: series || undefined,
      minRating: minRating ? Number(minRating) : undefined,
      maxPages: maxPages ? Number(maxPages) : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
    };
    const books = getPersonalizedRecommendations(preferences);
    onSubmit(books);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Format (e.g., Paperback)"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Audience (e.g., Adult)"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Series"
        value={series}
        onChange={(e) => setSeries(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="number"
        placeholder="Minimum Rating (1-5)"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="number"
        placeholder="Maximum Pages"
        value={maxPages}
        onChange={(e) => setMaxPages(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="number"
        placeholder="Minimum Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="number"
        placeholder="Maximum Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <input
        type="text"
        placeholder="Keywords (comma-separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="p-3 border border-[var(--foreground)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      />
      <button
        type="submit"
        className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
      >
        Get Recommendations
      </button>
    </form>
  );
}