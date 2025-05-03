"use client";
import { useState } from "react";
import { RecommendationForm } from "../components/RecommendationForm";
import { BookCard } from "../components/BookCard";
import { getRecommendations } from "../lib/book";

export default function Recommend() {
  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);

  const handleSubmit = (genre: string, author: string) => {
    const recommendations = getRecommendations(genre, author);
    setRecommendedBooks(recommendations);
  };

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Get Recommendations</h1>
      <RecommendationForm onSubmit={handleSubmit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {recommendedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}