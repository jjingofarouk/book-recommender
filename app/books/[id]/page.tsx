import { getBookById, getBooks } from '../../lib/books'; // Assuming this is where you fetch data

interface PageProps {
  params: {
    id: string; // `id` is a string from the URL (all dynamic routes in Next.js are strings)
  };
}

// This function generates static parameters for the dynamic route
export async function generateStaticParams() {
  const books = await getBooks(); // Get all books
  return books.map((book) => ({
    id: book.id.toString(), // Convert book ID to a string (as URL params are strings)
  }));
}

// This is your page component that will receive the dynamic params
export default async function Page({ params }: PageProps) {
  const bookId = Number(params.id); // Convert the string `id` to a number here
  const book = await getBookById(bookId); // Fetch the book data using the ID

  if (!book) {
    return <div>Book not found</div>; // Handle missing book case
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {/* Render more details here */}
    </div>
  );
}