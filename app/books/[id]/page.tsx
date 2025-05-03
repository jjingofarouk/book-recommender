import BookDetailsClient from "../../../components/BookDetailsClient";
import { getBookById, getRelatedBooks } from "../../../lib/books";

export default function Page({ params }: { params: { id: string } }) {
  const book = getBookById(parseInt(params.id));
  if (!book) {
    return <div className="p-8 text-center text-[var(--foreground)]">Book not found</div>;
  }

  const relatedBooks = getRelatedBooks(book.genre, book.id);

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}