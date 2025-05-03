import Image from "next/image";
import Link from "next/link";
import { BookCard } from "./components/BookCard";
import { getBooks } from "./lib/books";

export default function Home() {
  const books = getBooks().slice(0, 3); // Feature 3 books

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center">Welcome to Book Recommender</h1>
        <p className="text-lg text-center max-w-2xl">
          Discover your next favorite book! Explore our collection or get personalized recommendations based on your preferences.
        </p>
        <Link
          href="/recommend"
          className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Get Recommendations
        </Link>
        <h2 className="text-2xl font-semibold mt-12">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}