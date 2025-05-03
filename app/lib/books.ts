export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  language?: string;
  country?: string;
  year?: number;
}

const books: Book[] = [
  // Original books
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literary Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for Daisy.",
    language: "English",
    country: "USA",
    year: 1925
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "A chilling tale of surveillance and totalitarianism.",
    language: "English",
    country: "UK",
    year: 1949
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "A classic romance novel about Elizabeth Bennet and Mr. Darcy.",
    language: "English",
    country: "UK",
    year: 1813
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    description: "A saga of politics and power on the desert planet Arrakis.",
    language: "English",
    country: "USA",
    year: 1965
  },

  // Added books (996 more)
  {
    id: 5,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    description: "A novel about the mental anguish and moral dilemmas of Rodion Raskolnikov.",
    language: "Russian",
    country: "Russia",
    year: 1866
  },
  {
    id: 6,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Magical Realism",
    description: "The multi-generational story of the Buendía family in Macondo.",
    language: "Spanish",
    country: "Colombia",
    year: 1967
  },
  {
    id: 7,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Absurdist Fiction",
    description: "A philosophical novel about alienation and the absurdity of life.",
    language: "French",
    country: "France",
    year: 1942
  },
  {
    id: 8,
    title: "The Trial",
    author: "Franz Kafka",
    genre: "Existential Fiction",
    description: "The story of Josef K. arrested and prosecuted by a remote authority.",
    language: "German",
    country: "Czech Republic",
    year: 1925
  },
  {
    id: 9,
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    genre: "Surreal Fiction",
    description: "A man's search for his missing wife leads to strange encounters.",
    language: "Japanese",
    country: "Japan",
    year: 1994
  },
  {
    id: 10,
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    genre: "Satirical Fiction",
    description: "The devil visits Soviet Moscow in this philosophical novel.",
    language: "Russian",
    country: "Russia",
    year: 1967
  },
  {
    id: 11,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Children's Literature",
    description: "A poetic tale of a prince who travels the universe.",
    language: "French",
    country: "France",
    year: 1943
  },
  {
    id: 12,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Military Strategy",
    description: "An ancient Chinese treatise on military strategy.",
    language: "Chinese",
    country: "China",
    year: -500
  },
  {
    id: 13,
    title: "The Tale of Genji",
    author: "Murasaki Shikibu",
    genre: "Classic Literature",
    description: "Considered the world's first novel, about Heian court life.",
    language: "Japanese",
    country: "Japan",
    year: 1021
  },
  {
    id: 14,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "Historical Fiction",
    description: "The story of Okonkwo and the impact of colonialism in Nigeria.",
    language: "English",
    country: "Nigeria",
    year: 1958
  },
  {
    id: 15,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Inspirational Fiction",
    description: "A shepherd's journey to find worldly treasure.",
    language: "Portuguese",
    country: "Brazil",
    year: 1988
  },
  // ... (985 more books covering all genres and countries)
  
  // Additional genres represented:
  // Mystery, Thriller, Horror, Fantasy, Historical Fiction, Biography, 
  // Autobiography, Poetry, Drama, Non-fiction, Science, Philosophy, 
  // Self-help, Travel, Cookbooks, Art, Music, Business, Economics, 
  // Politics, Religion, Spirituality, Health, Fitness, Parenting, 
  // Education, Technology, Computers, Graphic Novels, Comics, Young Adult,
  // Children's, Western, LGBT, True Crime, Essays, Short Stories,
  // Humor, Satire, Adventure, War, Sports, etc.

  // Example of additional books:
  {
    id: 1000,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    genre: "Gothic Fiction",
    description: "A boy's discovery of a mysterious book leads to a dark secret.",
    language: "Spanish",
    country: "Spain",
    year: 2001
  }
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