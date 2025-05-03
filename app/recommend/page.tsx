"use client";

import { useState } from "react";
import { RecommendationForm } from "../components/RecommendationForm";
import { BookCard } from "../components/BookCard";

export default function Recommend() {
  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);

  // Handle books array returned from form submission
  const handleRecommendations = (books: any[]) => {
    setRecommendedBooks(books);
  };

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Get Personalized Recommendations</h1>
      <RecommendationForm onSubmit={handleRecommendations} />
      {recommendedBooks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recommendedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}