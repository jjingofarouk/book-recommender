// app/books/[id]/page.tsx
import BookDetailsClient from "@/components/BookDetailsClient";
import { getBookById, getRelatedBooks } from "../../lib/books";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await the Promise to get the id
  const book = getBookById(parseInt(id));
  if (!book) {
    return <div className="p-8 text-center text-[var(--foreground)]">Book not found</div>;
  }

  const relatedBooks = getRelatedBooks(book.genre, book.id);

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}