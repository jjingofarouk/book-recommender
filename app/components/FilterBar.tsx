// app/components/FilterBar.tsx
"use client";
import { useEffect, useState } from "react";

interface FilterBarProps {
  genres: string[];
  authors: string[];
  languages: string[];
  countries: string[];
  formats: string[];
  audiences: string[];
  series: string[];
  onGenreChange: (genre: string) => void;
  onAuthorChange: (author: string) => void;
  onLanguageChange: (language: string) => void;
  onCountryChange: (country: string) => void;
  onFormatChange: (format: string) => void;
  onAudienceChange: (audience: string) => void;
  onSeriesChange: (series: string) => void;
  onPriceRangeChange: (minPrice: number, maxPrice: number) => void;
}

export function FilterBar({
  genres,
  authors,
  languages,
  countries,
  formats,
  audiences,
  series,
  onGenreChange,
  onAuthorChange,
  onLanguageChange,
  onCountryChange,
  onFormatChange,
  onAudienceChange,
  onSeriesChange,
  onPriceRangeChange,
}: FilterBarProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);

  useEffect(() => {
    onPriceRangeChange(minPrice, maxPrice);
  }, [minPrice, maxPrice, onPriceRangeChange]);

  return (
    <div className="flex flex-wrap gap-4">
      <select
        onChange={(e) => onGenreChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onAuthorChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Authors</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onLanguageChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Languages</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onCountryChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onFormatChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Formats</option>
        {formats.map((format) => (
          <option key={format} value={format}>
            {format}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onAudienceChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Audiences</option>
        {audiences.map((audience) => (
          <option key={audience} value={audience}>
            {audience}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onSeriesChange(e.target.value)}
        className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)]"
      >
        <option value="">All Series</option>
        {series.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)] w-24"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="p-3 border border-[var(--gray-light)] rounded-lg glassmorphic bg-[var(--background)] text-[var(--foreground)] w-24"
        />
      </div>
    </div>
  );
}