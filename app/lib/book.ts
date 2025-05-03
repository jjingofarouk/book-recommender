export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for Daisy.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "A chilling tale of surveillance and totalitarianism.",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "A classic romance novel about Elizabeth Bennet and Mr. Darcy.",
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    description: "A saga of politics and power on the desert planet Arrakis.",
  },
];

export function getBooks(): Book[] {
  return books;
}

export function getRecommendations(genre: string, author: string): Book[] {
  return books.filter(
    (book) =>
      (!genre || book.genre === genre) &&
      (!author || book.author === author)
  ).slice(0, 3); // Return up to 3 recommendations
}