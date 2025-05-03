export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  reviews: { user: string; comment: string; rating: number }[];
}

const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for Daisy.",
    reviews: [
      { user: "Alice", comment: "A timeless classic!", rating: 5 },
      { user: "Bob", comment: "Beautiful prose, but slow at times.", rating: 4 },
    ],
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "A chilling tale of surveillance and totalitarianism.",
    reviews: [
      { user: "Clara", comment: "Terrifyingly relevant.", rating: 5 },
      { user: "Dan", comment: "A must-read for dystopian fans.", rating: 4 },
    ],
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "A classic romance novel about Elizabeth Bennet and Mr. Darcy.",
    reviews: [
      { user: "Emma", comment: "Witty and charming!", rating: 5 },
      { user: "Frank", comment: "Great characters, but dated.", rating: 3 },
    ],
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    description: "A saga of politics and power on the desert planet Arrakis.",
    reviews: [
      { user: "Grace", comment: "Epic world-building!", rating: 5 },
      { user: "Henry", comment: "Complex but rewarding.", rating: 4 },
    ],
  },
];

export function getBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getRecommendations(genre: string, author: string): Book[] {
  return books
    .filter(
      (book) =>
        (!genre || book.genre === genre) &&
        (!author || book.author === author)
    )
    .slice(0, 3);
}

export function getRelatedBooks(genre: string, excludeId: number): Book[] {
  return books
    .filter((book) => book.genre === genre && book.id !== excludeId)
    .slice(0, 3);
}