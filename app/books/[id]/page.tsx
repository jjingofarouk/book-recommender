
import { getBookById, getBooks } from '../../lib/books';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
  rating: number;
  publishedDate: string;
}

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const bookId = Number(params.id);
  const book = await getBookById(bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img 
            src={book.coverImage} 
            alt={`Cover of ${book.title}`} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-4">by {book.author}</p>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">{book.rating.toFixed(1)}</span>
          </div>
          
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {book.genre}
            </span>
            <span className="inline-block ml-2 text-gray-600 text-sm">
              Published: {new Date(book.publishedDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
          
          <div className="mt-6">
            <a 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all books
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
