import { notFound } from 'next/navigation';
import { getBookById, getRelatedBooks } from '@/lib/books';
import BookDetailsClient from './BookDetailsClient';

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function BookDetailsPage({ params }: PageProps) {
  const book = getBookById(Number(params.id));
  const relatedBooks = book ? getRelatedBooks(book.genre, book.id) : [];

  if (!book) {
    return notFound();
  }

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}