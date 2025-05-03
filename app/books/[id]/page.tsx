// app/books/[id]/page.tsx
import { notFound } from 'next/navigation';
import BookDetailsClient from '../../components/BookDetailsClient';
import { fetchBookById, fetchRelatedBooks } from '../../lib/books';

interface PageProps {
  params: { id: string };
}

export default async function BookPage({ params }: PageProps) {
  const book = await fetchBookById(Number(params.id));
  
  if (!book) {
    return notFound();
  }

  const relatedBooks = await fetchRelatedBooks(book.genre, book.id);

  return (
    <BookDetailsClient 
      book={book} 
      relatedBooks={relatedBooks} 
    />
  );
}

export async function generateMetadata({ params }: PageProps) {
  const book = await fetchBookById(Number(params.id));
  
  return {
    title: book?.title || 'Book Not Found',
    description: book?.description,
  };
}