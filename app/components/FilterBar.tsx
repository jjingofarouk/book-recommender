"use client";
import { useState } from "react";

interface FilterBarProps {
  genres: string[];
  authors: string[];
  onGenreChange: (genre: string) => void;
  onAuthorChange: (author: string) => void;
}

export function FilterBar({ genres, authors, onGenreChange, onAuthorChange }: FilterBarProps) {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
    onGenreChange(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuthor(e.target.value);
    onAuthorChange(e.target.value);
  };

  return (
    <div className="flex gap-4 mb-8">
      <select
        value={genre}
        onChange={handleGenreChange}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select
        value={author}
        onChange={handleAuthorChange}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">All Authors</option>
        {authors.map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
    </div>
  );
}