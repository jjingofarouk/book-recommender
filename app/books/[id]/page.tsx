l// app/books/[id]/page.tsx
import { notFound } from 'next/navigation';
import BookDetailsClient from '../../components/BookDetailsClient';
import { books } from '../../lib/books';

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === Number(params.id));
  
  if (!book) {
    return notFound();
  }

  const relatedBooks = books
    .filter(b => b.genre === book.genre && b.id !== book.id)
    .slice(0, 3);

  return <BookDetailsClient book={book} relatedBooks={relatedBooks} />;
}