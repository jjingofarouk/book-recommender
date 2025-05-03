import { Book } from "../lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow dark:border-gray-700">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Genre: {book.genre}</p>
      <p className="mt-2">{book.description}</p>
    </div>
  );
}