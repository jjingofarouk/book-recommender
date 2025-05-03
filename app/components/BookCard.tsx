import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book } from "../lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const [imageSrc, setImageSrc] = useState(book.coverImage || "/covers/default-cover.jpg");

  return (
    <Link href={`/books/${book.id}`} className="block">
      <div className="p-4 border border-[var(--foreground)] rounded-lg glassmorphic hover:shadow-lg transition-shadow">
        <Image
          src={imageSrc}
          alt={`${book.title} cover`}
          width={150}
          height={225}
          className="mx-auto mb-4 rounded"
          objectFit="cover"
          onError={() => setImageSrc("/covers/default-cover.jpg")}
        />
        <h3 className="text-xl font-semibold text-[var(--foreground)] hover:underline">{book.title}</h3>
        <p className="text-sm text-[var(--foreground)]">by {book.author}</p>
        <p className="text-sm text-[var(--foreground)]">Genre: {book.genre}</p>
        <p className="text-sm text-[var(--foreground)]">Language: {book.language}</p>
        <p className="text-sm text-[var(--foreground)]">Country: {book.countryOfOrigin}</p>
        <p className="text-sm text-[var(--foreground)]">Publisher: {book.publisher}</p>
        <p className="text-sm text-[var(--foreground)]">Year: {book.publicationYear}</p>
        <p className="text-sm text-[var(--foreground)]">Format: {book.format}</p>
        <p className="text-sm text-[var(--foreground)]">Audience: {book.targetAudience}</p>
        {book.series && <p className="text-sm text-[var(--foreground)]">Series: {book.series}</p>}
        <p className="text-sm text-[var(--foreground)]">Price: ${book.price.toFixed(2)}</p>
        <p className="text-sm text-[var(--foreground)]">Rating: {book.averageRating.toFixed(1)}/5</p>
        <p className="text-sm text-[var(--foreground)]">Reading Time: {book.readingTime}</p>
        {book.awards.length > 0 && (
          <p className="text-sm text-[var(--foreground)]">Awards: {book.awards.join(", ")}</p>
        )}
        <p className="mt-2 line-clamp-2 text-[var(--foreground)]">{book.description}</p>
        <p className="mt-2 text-sm text-[var(--foreground)]"><strong>Cultural Notes:</strong> {book.culturalNotes}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            if (!wishlist.includes(book.id)) {
              wishlist.push(book.id);
              localStorage.setItem("wishlist", JSON.stringify(wishlist));
              alert("Added to wishlist!");
            }
          }}
          className="mt-2 text-sm text-[var(--text-color)] hover:underline"
        >
          Add to Wishlist
        </button>
      </div>
    </Link>
  );
}