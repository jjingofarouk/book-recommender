"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookCard } from "../../components/BookCard";
import { getBookById, getRelatedBooks } from "../../lib/books";

export default function BookDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const book = getBookById(parseInt(params.id));

  useEffect(() => {
    if (book) {
      const viewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      if (!viewed.includes(book.id)) {
        viewed.unshift(book.id);
        localStorage.setItem("recentlyViewed", JSON.stringify(viewed.slice(0, 5)));
      }
    }
  }, [book]);

  if (!book) {
    return <div className="p-8 text-center">Book not found</div>;
  }

  const relatedBooks = getRelatedBooks(book.genre, book.id);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto glassmorphic p-8">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-lg text-[var(--gray-light)]">by {book.author}</p>
        <p className="text-lg text-[var(--gray-light)]">Genre: {book.genre}</p>
        <p className="mt-4">{book.description}</p>
        <button
          onClick={() => {
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            if (!wishlist.includes(book.id)) {
              wishlist.push(book.id);
              localStorage.setItem("wishlist", JSON.stringify(wishlist));
              alert("Added to wishlist!");
            }
          }}
          className="mt-4 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
        >
          Add to Wishlist
        </button>
        <h2 className="text-2xl font-semibold mt-8">Reviews</h2>
        <div className="mt-4 space-y-4">
          {book.reviews.map((review, index) => (
            <div key={index} className="p-4 border border-[var(--gray-light)] rounded-lg glassmorphic">
              <p className="font-semibold">{review.user}</p>
              <p>{review.comment}</p>
              <p className="text-sm text-[var(--gray-light)]">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
      {relatedBooks.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Related Books</h2>
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