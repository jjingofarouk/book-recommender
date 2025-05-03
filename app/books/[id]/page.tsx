import BookDetailsClient from "../../components/BookDetailsClient";
import { getBookById, getRelatedBooks } from "../../lib/books";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const book = getBookById(Number(params.id));
  
  if (!book) {
    return (
      <div className="p-8 text-center text-[var(--foreground)]">
        Book not found
      </div>
    );
  }

  const relatedBooks = getRelatedBooks(book.genre, book.id);

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}