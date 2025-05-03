// app/components/BookDetailsClient.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BookCard } from "./BookCard";
import { Book } from "../lib/books";

export default function BookDetailsClient({
  book,
  relatedBooks,
}: {
  book: Book;
  relatedBooks: Book[];
}) {
  const router = useRouter();

  useEffect(() => {
    if (book) {
      const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      if (!viewed.includes(book.id)) {
        viewed.unshift(book.id);
        localStorage.setItem("recentlyViewed", JSON.stringify(viewed.slice(0, 5)));
      }
    }
  }, [book]);

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (!wishlist.includes(book.id)) {
      wishlist.push(book.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to wishlist!");
    }
  };

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto glassmorphic p-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {book.coverImage && (
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              width={200}
              height={300}
              className="rounded"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">{book.title}</h1>
            <p className="text-lg text-[var(--gray-light)]">by {book.author}</p>
            <p className="text-lg text-[var(--gray-light)]">Genre: {book.genre}</p>
            <p className="text-lg text-[var(--gray-light)]">Language: {book.language}</p>
            <p className="text-lg text-[var(--gray-light)]">Country: {book.countryOfOrigin}</p>
            <p className="text-lg text-[var(--gray-light)]">Publisher: {book.publisher}</p>
            <p className="text-lg text-[var(--gray-light)]">Year: {book.publicationYear}</p>
            <p className="text-lg text-[var(--gray-light)]">Format: {book.format}</p>
            <p className="text-lg text-[var(--gray-light)]">Audience: {book.targetAudience}</p>
            {book.series && <p className="text-lg text-[var(--gray-light)]">Series: {book.series}</p>}
            <p className="text-lg text-[var(--gray-light)]">Price: ${book.price.toFixed(2)}</p>
            <p className="text-lg text-[var(--gray-light)]">Rating: {book.averageRating.toFixed(1)}/5</p>
            <p className="text-lg text-[var(--gray-light)]">Reading Time: {book.readingTime}</p>
            <p className="mt-4 text-[var(--foreground)]">{book.description}</p>
            <p className="mt-2 text-[var(--foreground)]"><strong>Cultural Notes:</strong> {book.culturalNotes}</p>
            {book.awards.length > 0 && (
              <p className="mt-2 text-[var(--foreground)]"><strong>Awards:</strong> {book.awards.join(", ")}</p>
            )}
            <button
              onClick={handleAddToWishlist}
              className="mt-4 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 text-[var(--foreground)]">Reviews</h2>
        <div className="mt-4 space-y-4">
          {book.reviews.map((review, index) => (
            <div key={index} className="p-4 border border-[var(--gray-light)] rounded-lg glassmorphic">
              <p className="font-semibold text-[var(--foreground)]">{review.user}</p>
              <p className="text-[var(--foreground)]">{review.comment}</p>
              <p className="text-sm text-[var(--gray-light)]">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
      {relatedBooks.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Related Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBooks.map((relatedBook) => (
              <BookCard key={relatedBook.id} book={relatedBook} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}