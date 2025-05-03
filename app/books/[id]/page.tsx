import { notFound } from 'next/navigation';
import { getBookById, getRelatedBooks } from '../../lib/books';
import BookDetailsClient from '../../components/BookDetailsClient';

export default function BookDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const book = getBookById(Number(params.id));
  const relatedBooks = book ? getRelatedBooks(book.genre, book.id) : [];

  if (!book) {
    return notFound();
  }

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}