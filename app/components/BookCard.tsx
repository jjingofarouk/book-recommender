import Link from "next/link";
import Image from "next/image";
import { Book } from "../lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="p-4 border border-[var(--gray-light)] rounded-lg glassmorphic">
      <Link href={`/books/${book.id}`}>
        {book.coverImage && (
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            width={150}
            height={225}
            className="mx-auto mb-4 rounded"
          />
        )}
        <h3 className="text-xl font-semibold hover:underline">{book.title}</h3>
      </Link>
      <p className="text-sm text-[var(--gray-light)]">by {book.author}</p>
      <p className="text-sm text-[var(--gray-light)]">Genre: {book.genre}</p>
      <p className="text-sm text-[var(--gray-light)]">Language: {book.language}</p>
      <p className="text-sm text-[var(--gray-light)]">Price: ${book.price.toFixed(2)}</p>
      <p className="text-sm text-[var(--gray-light)]">Rating: {book.averageRating.toFixed(1)}/5</p>
      <p className="mt-2 line-clamp-2 text-[var(--foreground)]">{book.description}</p>
      <button
        onClick={() => {
          const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
          if (!wishlist.includes(book.id)) {
            wishlist.push(book.id);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert("Added to wishlist!");
          }
        }}
        className="mt-2 text-sm text-[var(--foreground)] hover:underline"
      >
        Add to Wishlist
      </button>
    </div>
  );
}