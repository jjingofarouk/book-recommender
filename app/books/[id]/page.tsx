import BookDetailsClient from "../../components/BookDetailsClient";
import { getBookById, getRelatedBooks } from "../../lib/books";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const book = getBookById(Number(params.id));

  if (!book) {
    return (
      <div className="p-8 text-center text-[var(--foreground)]">
        Book not found
      </div>
    );
  }

  const relatedBooks = getRelatedBooks(book.genre, book.id);

  return <BookDetailsClient book={book} relatedBooks={relatedBooks} />;
}