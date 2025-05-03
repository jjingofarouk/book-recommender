// app/components/BookCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Book } from "../lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="block">
      <div className="p-4 border border-[var(--gray-light)] rounded-lg glassmorphic hover:shadow-lg transition-shadow">
        {book.coverImage && (
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            width={150}
            height={225}
            className="mx-auto mb-4 rounded"
          />
        )}
        <h3 className="text-xl font-semibold text-[var(--foreground)] hover:underline">{book.title}</h3>
        <p className="text-sm text-[var(--gray-light)]">by {book.author}</p>
        <p className="text-sm text-[var(--gray-light)]">Genre: {book.genre}</p>
        <p className="text-sm text-[var(--gray-light)]">Language: {book.language}</p>
        <p className="text-sm text-[var(--gray-light)]">Country: {book.countryOfOrigin}</p>
        <p className="text-sm text-[var(--gray-light)]">Publisher: {book.publisher}</p>
        <p className="text-sm text-[var(--gray-light)]">Year: {book.publicationYear}</p>
        <p className="text-sm text-[var(--gray-light)]">Format: {book.format}</p>
        <p className="text-sm text-[var(--gray-light)]">Audience: {book.targetAudience}</p>
        {book.series && <p className="text-sm text-[var(--gray-light)]">Series: {book.series}</p>}
        <p className="text-sm text-[var(--gray-light)]">Price: ${book.price.toFixed(2)}</p>
        <p className="text-sm text-[var(--gray-light)]">Rating: ${book.averageRating.toFixed(1)}/5</p>
        <p className="text-sm text-[var(--gray-light)]">Reading Time: {book.readingTime}</p>
        {book.awards.length > 0 && (
          <p className="text-sm text-[var(--gray-light)]">Awards: {book.awards.join(", ")}</p>
        )}
        <p className="mt-2 line-clamp-2 text-[var(--foreground)]">{book.description}</p>
        <p className="mt-2 text-sm text-[var(--foreground)]"><strong>Cultural Notes:</strong> {book.culturalNotes}</p>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent Link navigation when clicking button
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
    </Link>
  );
}