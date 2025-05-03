"use client";
import { useState, useEffect } from "react";
import { BookCard } from "../components/BookCard";
import { getBooks } from "../lib/books";

export default function Wishlist() {
  const [wishlistBooks, setWishlistBooks] = useState<any[]>([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistBooks(getBooks().filter((b) => wishlist.includes(b.id)));
  }, []);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistBooks.length === 0 ? (
        <p className="text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {wishlistBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}