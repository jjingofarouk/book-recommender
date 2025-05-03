"use client";
import { useState } from "react";

interface RecommendationFormProps {
  onSubmit: (genre: string, author: string) => void;
}

export function RecommendationForm({ onSubmit }: RecommendationFormProps) {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(genre, author);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Romance">Romance</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">Select Author</option>
        <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
        <option value="George Orwell">George Orwell</option>
        <option value="Jane Austen">Jane Austen</option>
        <option value="Frank Herbert">Frank Herbert</option>
      </select>
      <button
        type="submit"
        className="rounded-full bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Get Recommendations
      </button>
    </form>
  );
}