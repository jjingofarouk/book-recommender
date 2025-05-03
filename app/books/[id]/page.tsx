import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBookById, getRelatedBooks } from '../../lib/books';
import BookDetailsClient from '../../components/BookDetailsClient';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function BookDetailsPage({ params }: Props) {
  const book = getBookById(Number(params.id));
  const relatedBooks = book ? getRelatedBooks(book.genre, book.id) : [];

  if (!book) {
    return notFound();
  }

  return (
    <BookDetailsClient book={book} relatedBooks={relatedBooks} />
  );
}

// Optional: Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = getBookById(Number(params.id));
  
  return {
    title: book?.title || 'Book Not Found',
    description: book?.description,
  };
}