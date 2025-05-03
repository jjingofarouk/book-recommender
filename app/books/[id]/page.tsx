// app/books/[id]/page.tsx

import { getBookById } from "../../lib/books";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function BookPage({ params }: PageProps) {
  const book = getBookById(params.id);

  if (!book) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-lg mb-4 text-gray-600">by {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}