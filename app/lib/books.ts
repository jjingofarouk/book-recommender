export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  language: string;
  countryOfOrigin: string;
  publisher: string;
  publicationYear: number;
  edition: string;
  isbn: string;
  format: string; // e.g., Hardcover, Paperback, eBook
  coverImage: string;
  tags: string[];
  pageCount: number;
  targetAudience: string; // e.g., Adult, Young Adult, Children
  series: string | null; // e.g., "Dune Series" or null
  keywords: string[];
  availability: string; // e.g., In Stock, Out of Stock, Pre-order
  price: number; // in USD
  averageRating: number;
  readingTime: string; // e.g., "5 hours"
  awards: string[];
  culturalNotes: string; // Cultural context of the book
  reviews: { user: string; comment: string; rating: number }[];
}

const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for Daisy.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Scribner",
    publicationYear: 1925,
    edition: "1st",
    isbn: "978-0743273565",
    format: "Paperback",
    coverImage: "/covers/gatsby.jpg",
    tags: ["classic", "romance", "tragedy"],
    pageCount: 180,
    targetAudience: "Adult",
    series: null,
    keywords: ["wealth", "love", "1920s", "American Dream"],
    availability: "In Stock",
    price: 10.99,
    averageRating: 4.5,
    readingTime: "3 hours",
    awards: ["Pulitzer Prize Finalist"],
    culturalNotes: "Reflects the Jazz Age and American social stratification.",
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
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Secker & Warburg",
    publicationYear: 1949,
    edition: "1st",
    isbn: "978-0451524935",
    format: "eBook",
    coverImage: "/covers/1984.jpg",
    tags: ["dystopian", "political", "classic"],
    pageCount: 328,
    targetAudience: "Adult",
    series: null,
    keywords: ["surveillance", "totalitarianism", "freedom"],
    availability: "In Stock",
    price: 8.99,
    averageRating: 4.8,
    readingTime: "5 hours",
    awards: ["Prometheus Hall of Fame"],
    culturalNotes: "Critiques post-WWII political ideologies in the UK.",
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
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Penguin Classics",
    publicationYear: 1813,
    edition: "2nd",
    isbn: "978-0141439518",
    format: "Hardcover",
    coverImage: "/covers/pride.jpg",
    tags: ["romance", "classic", "social commentary"],
    pageCount: 432,
    targetAudience: "Young Adult",
    series: null,
    keywords: ["love", "marriage", "class", "Regency"],
    availability: "In Stock",
    price: 14.99,
    averageRating: 4.3,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Explores gender and class in 19th-century England.",
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
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Ace Books",
    publicationYear: 1965,
    edition: "1st",
    isbn: "978-0441172719",
    format: "Paperback",
    coverImage: "/covers/dune.jpg",
    tags: ["sci-fi", "adventure", "epic"],
    pageCount: 896,
    targetAudience: "Adult",
    series: "Dune Series",
    keywords: ["space", "politics", "religion", "ecology"],
    availability: "Pre-order",
    price: 19.99,
    averageRating: 4.7,
    readingTime: "14 hours",
    awards: ["Hugo Award", "Nebula Award"],
    culturalNotes: "Inspired by Middle Eastern and ecological themes.",
    reviews: [
      { user: "Grace", comment: "Epic world-building!", rating: 5 },
      { user: "Henry", comment: "Complex but rewarding.", rating: 4 },
    ],
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    description: "A story of racial injustice and the loss of innocence in a small Southern town.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "J.B. Lippincott & Co.",
    publicationYear: 1960,
    edition: "1st",
    isbn: "978-0446310789",
    format: "Paperback",
    coverImage: "/covers/mockingbird.jpg",
    tags: ["classic", "social justice", "coming-of-age"],
    pageCount: 281,
    targetAudience: "Young Adult",
    series: null,
    keywords: ["racism", "justice", "childhood", "South"],
    availability: "In Stock",
    price: 12.99,
    averageRating: 4.6,
    readingTime: "4 hours",
    awards: ["Pulitzer Prize"],
    culturalNotes: "Addresses racial tensions in the American South.",
    reviews: [
      { user: "Ivy", comment: "Powerful and moving.", rating: 5 },
      { user: "Jack", comment: "Important but heavy.", rating: 4 },
    ],
  },
  {
    id: 6,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Magical Realism",
    description: "The multi-generational story of the Buendía family in the fictional town of Macondo.",
    language: "Spanish",
    countryOfOrigin: "Colombia",
    publisher: "Harper & Row",
    publicationYear: 1967,
    edition: "1st (English translation)",
    isbn: "978-0060883287",
    format: "Paperback",
    coverImage: "/covers/solitude.jpg",
    tags: ["magical realism", "family saga", "Latin American"],
    pageCount: 417,
    targetAudience: "Adult",
    series: null,
    keywords: ["family", "myth", "history", "Colombia"],
    availability: "In Stock",
    price: 15.99,
    averageRating: 4.9,
    readingTime: "6 hours",
    awards: ["Nobel Prize in Literature (author)"],
    culturalNotes: "Embodies Latin American magical realism and Colombian history.",
    reviews: [
      { user: "Luna", comment: "A masterpiece of storytelling.", rating: 5 },
      { user: "Mateo", comment: "Rich but complex.", rating: 4 },
    ],
  },
];

export function getBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getBooksByTags(tags: string[]): Book[] {
  return books.filter((book) =>
    tags.every((tag) => book.tags.includes(tag))
  );
}

export function getBooksByYearRange(startYear: number, endYear: number): Book[] {
  return books.filter(
    (book) => book.publicationYear >= startYear && book.publicationYear <= endYear
  );
}

export function getBooksByLanguage(language: string): Book[] {
  return books.filter((book) => book.language.toLowerCase() === language.toLowerCase());
}

export function getBooksByCountry(country: string): Book[] {
  return books.filter((book) => book.countryOfOrigin.toLowerCase() === country.toLowerCase());
}

export function getBooksByPublisher(publisher: string): Book[] {
  return books.filter((book) => book.publisher.toLowerCase() === publisher.toLowerCase());
}

export function getBooksByFormat(format: string): Book[] {
  return books.filter((book) => book.format.toLowerCase() === format.toLowerCase());
}

export function getBooksByAudience(audience: string): Book[] {
  return books.filter((book) => book.targetAudience.toLowerCase() === audience.toLowerCase());
}

export function getBooksBySeries(series: string): Book[] {
  return books.filter((book) => book.series?.toLowerCase() === series.toLowerCase());
}

export function getBooksByAvailability(availability: string): Book[] {
  return books.filter((book) => book.availability.toLowerCase() === availability.toLowerCase());
}

export function getBooksByPriceRange(minPrice: number, maxPrice: number): Book[] {
  return books.filter((book) => book.price >= minPrice && book.price <= maxPrice);
}

export function getBooksByKeywords(keywords: string[]): Book[] {
  return books.filter((book) =>
    keywords.every((keyword) =>
      book.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
    )
  );
}

export function getRecommendations(
  genre: string,
  author: string,
  language: string = "",
  country: string = "",
  tags: string[] = []
): Book[] {
  return books
    .filter(
      (book) =>
        (!genre || book.genre.toLowerCase() === genre.toLowerCase()) &&
        (!author || book.author.toLowerCase() === author.toLowerCase()) &&
        (!language || book.language.toLowerCase() === language.toLowerCase()) &&
        (!country || book.countryOfOrigin.toLowerCase() === country.toLowerCase()) &&
        (tags.length === 0 || tags.every((tag) => book.tags.includes(tag)))
    )
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 3);
}

export function getPersonalizedRecommendations(
  preferences: {
    genre?: string;
    author?: string;
    language?: string;
    country?: string;
    tags?: string[];
    minRating?: number;
    maxPages?: number;
    audience?: string;
    format?: string;
    series?: string;
    minPrice?: number;
    maxPrice?: number;
    keywords?: string[];
  }
): Book[] {
  return books
    .filter(
      (book) =>
        (!preferences.genre || book.genre.toLowerCase() === preferences.genre.toLowerCase()) &&
        (!preferences.author || book.author.toLowerCase() === preferences.author.toLowerCase()) &&
        (!preferences.language || book.language.toLowerCase() === preferences.language.toLowerCase()) &&
        (!preferences.country || book.countryOfOrigin.toLowerCase() === preferences.country.toLowerCase()) &&
        (!preferences.tags || preferences.tags.every((tag) => book.tags.includes(tag))) &&
        (!preferences.minRating || book.averageRating >= preferences.minRating) &&
        (!preferences.maxPages || book.pageCount <= preferences.maxPages) &&
        (!preferences.audience || book.targetAudience.toLowerCase() === preferences.audience.toLowerCase()) &&
        (!preferences.format || book.format.toLowerCase() === preferences.format.toLowerCase()) &&
        (!preferences.series || book.series?.toLowerCase() === preferences.series?.toLowerCase()) &&
        (!preferences.minPrice || book.price >= preferences.minPrice) &&
        (!preferences.maxPrice || book.price <= preferences.maxPrice) &&
        (!preferences.keywords || preferences.keywords.every((keyword) =>
          book.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
        ))
    )
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 3);
}

export function getRelatedBooks(genre: string, excludeId: number): Book[] {
  return books
    .filter((book) => book.genre.toLowerCase() === genre.toLowerCase() && book.id !== excludeId)
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 3);
}

export function getWishlistStats(wishlistIds: number[]): {
  totalBooks: number;
  totalPages: number;
  preferredGenres: string[];
  preferredLanguages: string[];
  preferredCountries: string[];
  averagePrice: number;
} {
  const wishlistBooks = books.filter((book) => wishlistIds.includes(book.id));
  const totalPages = wishlistBooks.reduce((sum, book) => sum + book.pageCount, 0);
  const totalPrice = wishlistBooks.reduce((sum, book) => sum + book.price, 0);
  const averagePrice = wishlistBooks.length ? totalPrice / wishlistBooks.length : 0;

  const genreCounts = wishlistBooks.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const preferredGenres = Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre)
    .slice(0, 3);

  const languageCounts = wishlistBooks.reduce((acc, book) => {
    acc[book.language] = (acc[book.language] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const preferredLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([language]) => language)
    .slice(0, 3);

  const countryCounts = wishlistBooks.reduce((acc, book) => {
    acc[book.countryOfOrigin] = (acc[book.countryOfOrigin] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const preferredCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([country]) => country)
    .slice(0, 3);

  return {
    totalBooks: wishlistBooks.length,
    totalPages,
    preferredGenres,
    preferredLanguages,
    preferredCountries,
    averagePrice: Number(averagePrice.toFixed(2)),
  };
}

export function getReadingProgress(wishlistIds: number[]): {
  totalBooks: number;
  totalReadingTime: string;
  estimatedCompletionDays: number;
} {
  const wishlistBooks = books.filter((book) => wishlistIds.includes(book.id));
  const totalReadingHours = wishlistBooks.reduce((sum, book) => {
    const hours = parseFloat(book.readingTime) || 0;
    return sum + hours;
  }, 0);
  const estimatedCompletionDays = Math.ceil(totalReadingHours / 2); // Assume 2 hours reading per day

  return {
    totalBooks: wishlistBooks.length,
    totalReadingTime: `${totalReadingHours.toFixed(1)} hours`,
    estimatedCompletionDays,
  };
}

export function sortBooks(
  booksToSort: Book[],
  criterion: "title" | "author" | "year" | "rating" | "price" | "pageCount" | "language" | "country"
): Book[] {
  return [...booksToSort].sort((a, b) => {
    if (criterion === "title") return a.title.localeCompare(b.title);
    if (criterion === "author") return a.author.localeCompare(b.author);
    if (criterion === "year") return b.publicationYear - a.publicationYear;
    if (criterion === "rating") return b.averageRating - a.averageRating;
    if (criterion === "price") return a.price - b.price;
    if (criterion === "pageCount") return a.pageCount - b.pageCount;
    if (criterion === "language") return a.language.localeCompare(b.language);
    if (criterion === "country") return a.countryOfOrigin.localeCompare(b.countryOfOrigin);
    return 0;
  });
}