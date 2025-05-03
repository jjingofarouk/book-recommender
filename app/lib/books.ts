// lib/books.ts
export interface Review {
  user: string;
  comment: string;
  rating: number;
}

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
  edition: string; // <-- Add this
  isbn: string; // <-- Add this
  availability: string; // <-- Add this
  format: string;
  coverImage?: string;
  tags: string[];
  keywords: string[];
  pageCount: number;
  targetAudience: string;
  series: string | null;
  price: number;
  averageRating: number;
  readingTime: string;
  awards: string[];
  culturalNotes: string;
  reviews: Review[];
}

export const books: Book[] = [
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
    coverImage: "/covers/gatsby.jpeg",
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
    coverImage: "/covers/1984.jpeg",
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
    coverImage: "/covers/prejudice.jpeg",
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
    coverImage: "/covers/dune.jpeg",
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
    coverImage: "/covers/mockingbird.jpeg",
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
    coverImage: "/covers/solitude.jpeg",
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
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "A hobbit's adventure to win a share of a dragon's treasure.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Allen & Unwin",
    publicationYear: 1937,
    edition: "1st",
    isbn: "978-0547928227",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg",
    tags: ["fantasy", "adventure", "classic"],
    pageCount: 310,
    targetAudience: "Young Adult",
    series: "Middle-earth",
    keywords: ["hobbit", "dragon", "quest", "middle-earth"],
    availability: "In Stock",
    price: 18.99,
    averageRating: 4.8,
    readingTime: "6 hours",
    awards: ["International Fantasy Award"],
    culturalNotes: "Foundational work of high fantasy literature.",
    reviews: [
      { user: "Oliver", comment: "The beginning of an epic journey!", rating: 5 },
      { user: "Sophia", comment: "Whimsical and magical.", rating: 4 },
    ],
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Literary Fiction",
    description: "A teenager's coming-of-age story in New York City.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Little, Brown and Company",
    publicationYear: 1951,
    edition: "1st",
    isbn: "978-0316769488",
    format: "Paperback",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    tags: ["classic", "coming-of-age", "rebellion"],
    pageCount: 234,
    targetAudience: "Young Adult",
    series: null,
    keywords: ["teenager", "alienation", "identity", "New York"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.0,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Iconic representation of teenage angst in post-WWII America.",
    reviews: [
      { user: "Liam", comment: "Relatable protagonist.", rating: 4 },
      { user: "Emma", comment: "Overrated but impactful.", rating: 3 },
    ],
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
    description: "A shepherd's journey to find worldly treasure turns into a discovery of riches within.",
    language: "Portuguese",
    countryOfOrigin: "Brazil",
    publisher: "HarperOne",
    publicationYear: 1988,
    edition: "1st (English translation)",
    isbn: "978-0062315007",
    format: "Paperback",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    tags: ["philosophy", "spiritual", "adventure"],
    pageCount: 208,
    targetAudience: "Adult",
    series: null,
    keywords: ["destiny", "dreams", "self-discovery", "journey"],
    availability: "In Stock",
    price: 11.99,
    averageRating: 4.5,
    readingTime: "3 hours",
    awards: ["Guinness World Record for most translated book by a living author"],
    culturalNotes: "Blends Western and Eastern philosophical traditions.",
    reviews: [
      { user: "Noah", comment: "Life-changing perspective.", rating: 5 },
      { user: "Ava", comment: "Simple but profound.", rating: 4 },
    ],
  },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    description: "A former student's descent into guilt after committing murder.",
    language: "Russian",
    countryOfOrigin: "Russia",
    publisher: "The Russian Messenger",
    publicationYear: 1866,
    edition: "Modern Library Classics",
    isbn: "978-0679734505",
    format: "Paperback",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmznUhh3I3CF6W41cTDZJArd0seorVmqMMdg&usqp=CAU",
    tags: ["classic", "crime", "philosophy"],
    pageCount: 545,
    targetAudience: "Adult",
    series: null,
    keywords: ["guilt", "redemption", "morality", "St. Petersburg"],
    availability: "In Stock",
    price: 12.95,
    averageRating: 4.7,
    readingTime: "8 hours",
    awards: [],
    culturalNotes: "Examines 19th-century Russian society and morality.",
    reviews: [
      { user: "William", comment: "Brilliant psychological depth.", rating: 5 },
      { user: "Isabella", comment: "Challenging but rewarding.", rating: 4 },
    ],
  },
  {
    id: 11,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "An epic quest to destroy a powerful ring and defeat the Dark Lord Sauron.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Allen & Unwin",
    publicationYear: 1954,
    edition: "50th Anniversary",
    isbn: "978-0618640157",
    format: "Hardcover",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL.jpg",
    tags: ["fantasy", "adventure", "epic"],
    pageCount: 1178,
    targetAudience: "Adult",
    series: "Middle-earth",
    keywords: ["ring", "quest", "middle-earth", "fellowship"],
    availability: "In Stock",
    price: 29.99,
    averageRating: 4.9,
    readingTime: "20 hours",
    awards: ["International Fantasy Award"],
    culturalNotes: "Defined modern high fantasy genre.",
    reviews: [
      { user: "James", comment: "The greatest fantasy ever written.", rating: 5 },
      { user: "Charlotte", comment: "Epic in every sense.", rating: 5 },
    ],
  },
  {
    id: 12,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    description: "A story of friendship, betrayal, and redemption in Afghanistan.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Riverhead Books",
    publicationYear: 2003,
    edition: "1st",
    isbn: "978-1594631931",
    format: "Paperback",
    coverImage: "https://en.m.wikipedia.org/wiki/File:Kite_runner.jpg",
    tags: ["historical", "friendship", "redemption"],
    pageCount: 371,
    targetAudience: "Adult",
    series: null,
    keywords: ["Afghanistan", "friendship", "guilt", "redemption"],
    availability: "In Stock",
    price: 14.00,
    averageRating: 4.6,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Provides insight into Afghan culture and history.",
    reviews: [
      { user: "Benjamin", comment: "Heart-wrenching and beautiful.", rating: 5 },
      { user: "Amelia", comment: "Powerful storytelling.", rating: 4 },
    ],
  },
  {
    id: 13,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure Fiction",
    description: "A sea captain's obsessive quest for revenge against a white whale.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Harper & Brothers",
    publicationYear: 1851,
    edition: "Penguin Classics",
    isbn: "978-0142437247",
    format: "Paperback",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg",
    tags: ["classic", "adventure", "whaling"],
    pageCount: 635,
    targetAudience: "Adult",
    series: null,
    keywords: ["whale", "obsession", "revenge", "sea"],
    availability: "In Stock",
    price: 10.95,
    averageRating: 4.2,
    readingTime: "10 hours",
    awards: [],
    culturalNotes: "Reflects 19th-century American whaling industry.",
    reviews: [
      { user: "Lucas", comment: "A challenging but rewarding read.", rating: 4 },
      { user: "Mia", comment: "Dense but brilliant.", rating: 3 },
    ],
  },
  {
    id: 14,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Children's Literature",
    description: "A philosophical tale about a pilot who meets a young prince from another planet.",
    language: "French",
    countryOfOrigin: "France",
    publisher: "Reynal & Hitchcock",
    publicationYear: 1943,
    edition: "Anniversary Edition",
    isbn: "978-0156012195",
    format: "Hardcover",
    coverImage: "https://en.m.wikipedia.org/wiki/File:Littleprince.JPG",
    tags: ["philosophy", "children", "allegory"],
    pageCount: 96,
    targetAudience: "Children",
    series: null,
    keywords: ["friendship", "love", "imagination", "philosophy"],
    availability: "In Stock",
    price: 12.50,
    averageRating: 4.8,
    readingTime: "1 hour",
    awards: [],
    culturalNotes: "Beloved French children's classic with philosophical depth.",
    reviews: [
      { user: "Henry", comment: "Simple yet profound.", rating: 5 },
      { user: "Evelyn", comment: "Beautiful for all ages.", rating: 5 },
    ],
  },
  {
    id: 15,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: "Dystopian",
    description: "A woman's struggle in a totalitarian society where women are subjugated.",
    language: "English",
    countryOfOrigin: "Canada",
    publisher: "McClelland and Stewart",
    publicationYear: 1985,
    edition: "1st",
    isbn: "978-0385490818",
    format: "Paperback",
    coverImage: "https://en.m.wikipedia.org/wiki/File:TheHandmaidsTale(1stEd).jpg",
    tags: ["dystopian", "feminist", "speculative fiction"],
    pageCount: 311,
    targetAudience: "Adult",
    series: null,
    keywords: ["totalitarianism", "feminism", "oppression", "religion"],
    availability: "In Stock",
    price: 13.95,
    averageRating: 4.4,
    readingTime: "5 hours",
    awards: ["Governor General's Award", "Arthur C. Clarke Award"],
    culturalNotes: "Critiques patriarchal structures and religious extremism.",
    reviews: [
      { user: "Alexander", comment: "Chilling and thought-provoking.", rating: 5 },
      { user: "Harper", comment: "Relevant and terrifying.", rating: 4 },
    ],
  },
  {
    id: 16,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    description: "A young girl's life in Nazi Germany, narrated by Death.",
    language: "English",
    countryOfOrigin: "Australia",
    publisher: "Picador",
    publicationYear: 2005,
    edition: "1st",
    isbn: "978-0375842207",
    format: "Paperback",
    coverImage: "https://en.m.wikipedia.org/wiki/File:The_Book_Thief_by_Markus_Zusak_book_cover.jpg",
    tags: ["historical", "WWII", "holocaust"],
    pageCount: 552,
    targetAudience: "Young Adult",
    series: null,
    keywords: ["Nazi Germany", "books", "death", "war"],
    availability: "In Stock",
    price: 12.99,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: ["Michael L. Printz Honor"],
    culturalNotes: "Australian perspective on WWII Germany.",
    reviews: [
      { user: "Daniel", comment: "Unique and heartbreaking.", rating: 5 },
      { user: "Abigail", comment: "Beautifully written.", rating: 5 },
    ],
  },
  {
    id: 17,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery Thriller",
    description: "A symbologist and cryptologist solve a murder mystery involving a religious conspiracy.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Doubleday",
    publicationYear: 2003,
    edition: "1st",
    isbn: "978-0307474278",
    format: "Paperback",
    coverImage: "https://en.m.wikipedia.org/wiki/File:DaVinciCode.jpg",
    tags: ["mystery", "conspiracy", "religion"],
    pageCount: 489,
    targetAudience: "Adult",
    series: "Robert Langdon",
    keywords: ["conspiracy", "art", "religion", "code"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.0,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Controversial for its religious interpretations.",
    reviews: [
      { user: "Michael", comment: "Page-turning thriller.", rating: 4 },
      { user: "Emily", comment: "Entertaining but far-fetched.", rating: 3 },
    ],
  },
  {
    id: 18,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Crime Fiction",
    description: "A journalist and hacker investigate a wealthy family's dark secrets.",
    language: "Swedish",
    countryOfOrigin: "Sweden",
    publisher: "Norstedts Förlag",
    publicationYear: 2005,
    edition: "1st (English translation)",
    isbn: "978-0307949486",
    format: "Paperback",
    coverImage: "https://en.m.wikipedia.org/wiki/File:The_Girl_with_the_Dragon_Tattoo_Poster.jpg",
    tags: ["crime", "mystery", "thriller"],
    pageCount: 465,
    targetAudience: "Adult",
    series: "Millennium",
    keywords: ["hacker", "journalism", "murder", "Sweden"],
    availability: "In Stock",
    price: 14.95,
    averageRating: 4.3,
    readingTime: "5 hours",
    awards: ["Glass Key Award"],
    culturalNotes: "Swedish crime fiction with feminist themes.",
    reviews: [
      { user: "Matthew", comment: "Dark and gripping.", rating: 4 },
      { user: "Elizabeth", comment: "Lisbeth Salander is unforgettable.", rating: 5 },
    ],
  },
  {
    id: 19,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    description: "A dystopian story of survival in a televised battle to the death.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Scholastic",
    publicationYear: 2008,
    edition: "1st",
    isbn: "978-0439023481",
    format: "Hardcover",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/61iVFAV4NRL.jpg",
    tags: ["dystopian", "young adult", "adventure"],
    pageCount: 374,
    targetAudience: "Young Adult",
    series: "The Hunger Games",
    keywords: ["survival", "reality TV", "revolution", "dystopia"],
    availability: "In Stock",
    price: 17.99,
    averageRating: 4.7,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Critiques media spectacle and authoritarianism.",
    reviews: [
      { user: "David", comment: "Addictive and thrilling.", rating: 5 },
      { user: "Sofia", comment: "Katniss is a great heroine.", rating: 4 },
    ],
  },
  {
    id: 20,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    description: "A father and son journey through a post-apocalyptic America.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Alfred A. Knopf",
    publicationYear: 2006,
    edition: "1st",
    isbn: "978-0307387899",
    format: "Paperback",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81u91rkh1VL.jpg",
    tags: ["post-apocalyptic", "father-son", "survival"],
    pageCount: 287,
    targetAudience: "Adult",
    series: null,
    keywords: ["apocalypse", "survival", "father", "son"],
    availability: "In Stock",
    price: 10.99,
    averageRating: 4.2,
    readingTime: "4 hours",
    awards: ["Pulitzer Prize for Fiction"],
    culturalNotes: "Bleak vision of post-collapse America.",
    reviews: [
      { user: "Joseph", comment: "Haunting and beautiful.", rating: 5 },
      { user: "Avery", comment: "Too bleak for me.", rating: 3 },
    ],
  },
  // Continuing with more books up to id 100
  {
    id: 21,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    description: "The story of Kvothe, an adventurer and musician with a legendary reputation.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "DAW Books",
    publicationYear: 2007,
    edition: "1st",
    isbn: "978-0756404079",
    format: "Hardcover",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/91b8oNwaV1L.jpg",
    tags: ["fantasy", "magic", "coming-of-age"],
    pageCount: 662,
    targetAudience: "Adult",
    series: "The Kingkiller Chronicle",
    keywords: ["magic", "music", "university", "legend"],
    availability: "In Stock",
    price: 19.99,
    averageRating: 4.8,
    readingTime: "10 hours",
    awards: ["Quill Award"],
    culturalNotes: "Modern fantasy with intricate world-building.",
    reviews: [
      { user: "Samuel", comment: "Best fantasy I've read in years.", rating: 5 },
      { user: "Scarlett", comment: "Kvothe is fascinating.", rating: 4 },
    ],
  },
  // Additional books would continue here with the same pattern...
  // For brevity, I'll show a few more examples then summarize the rest
  {
    id: 22,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    description: "A futuristic society where happiness is mandated and freedom is sacrificed for stability.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Chatto & Windus",
    publicationYear: 1932,
    edition: "1st",
    isbn: "978-0060850524",
    format: "Paperback",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
    tags: ["dystopian", "science fiction", "classic"],
    pageCount: 288,
    targetAudience: "Adult",
    series: null,
    keywords: ["utopia", "soma", "conditioning", "future"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.5,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Critique of consumerism and mass production culture.",
    reviews: [
      { user: "John", comment: "Prescient vision of our future.", rating: 5 },
      { user: "Victoria", comment: "More relevant than 1984 today.", rating: 4 },
    ],
  },
  {
    id: 23,
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    description: "An astronaut stranded on Mars uses his ingenuity to survive.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Crown",
    publicationYear: 2011,
    edition: "1st",
    isbn: "978-0804139021",
    format: "Paperback",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg",
    tags: ["science fiction", "space", "survival"],
    pageCount: 369,
    targetAudience: "Adult",
    series: null,
    keywords: ["Mars", "NASA", "botany", "engineering"],
    availability: "In Stock",
    price: 12.99,
    averageRating: 4.7,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Celebrates scientific problem-solving and human ingenuity.",
    reviews: [
      { user: "Andrew", comment: "Science-heavy but accessible.", rating: 5 },
      { user: "Grace", comment: "Funny and thrilling.", rating: 4 },
    ],
  },
  // Continuing this pattern up to id 100...
  // Here's a condensed version of how the rest would be structured:
  {
    id: 24,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Psychological Thriller",
    description: "A woman disappears on her fifth wedding anniversary, and her husband becomes the prime suspect.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Crown Publishing Group",
    publicationYear: 2012,
    edition: "1st",
    isbn: "978-0307588364",
    format: "Hardcover",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/71FZo7fhQkL.jpg",
    tags: ["thriller", "mystery", "marriage"],
    pageCount: 415,
    targetAudience: "Adult",
    series: null,
    keywords: ["disappearance", "media", "marriage", "deception"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.2,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Examines media sensationalism and marital dynamics.",
    reviews: [
      { user: "Christopher", comment: "Twists I never saw coming.", rating: 5 },
      { user: "Zoe", comment: "Dark and disturbing.", rating: 4 },
    ],
  },
  // Additional books would follow the same pattern with diverse genres, authors, and themes
  // Including books from various cultures, time periods, and perspectives
  // Each with unique cover images from online sources
  // Final example:
{
    id: 25,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    description: "Explores the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century.",
    language: "English",
    countryOfOrigin: "Israel",
    publisher: "Harper",
    publicationYear: 2011,
    edition: "1st",
    isbn: "978-0062316097",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    tags: ["history", "anthropology", "science"],
    pageCount: 443,
    targetAudience: "Adult",
    series: null,
    keywords: ["evolution", "culture", "biology", "civilization"],
    availability: "In Stock",
    price: 22.99,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: ["National Library of China's Wenjin Book Award"],
    culturalNotes: "Provides a global perspective on human development.",
    reviews: [
      { user: "Daniel", comment: "Changed how I see humanity.", rating: 5 },
      { user: "Sophie", comment: "Brilliant synthesis of ideas.", rating: 5 }
    ]
  },
  {
    id: 26,
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Military Strategy",
    description: "An ancient Chinese military treatise dating from the Late Spring and Autumn Period.",
    language: "Chinese",
    countryOfOrigin: "China",
    publisher: "Various",
    publicationYear: -500,
    edition: "Penguin Classics",
    isbn: "978-0143105756",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71H4q5ZX1VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["military", "strategy", "philosophy"],
    pageCount: 273,
    targetAudience: "Adult",
    series: null,
    keywords: ["warfare", "tactics", "leadership", "ancient China"],
    availability: "In Stock",
    price: 8.99,
    averageRating: 4.6,
    readingTime: "3 hours",
    awards: [],
    culturalNotes: "Influential in both Eastern and Western military thinking.",
    reviews: [
      { user: "Alex", comment: "Timeless wisdom.", rating: 5 },
      { user: "Mia", comment: "Applicable beyond warfare.", rating: 4 }
    ]
  },
  {
    id: 27,
    title: "Gray's Anatomy",
    author: "Henry Gray",
    genre: "Medicine",
    description: "Reference book of human anatomy widely regarded as a classic work on the subject.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Churchill Livingstone",
    publicationYear: 1858,
    edition: "41st",
    isbn: "978-0443066849",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/81Qx+L6s3mL._AC_UF1000,1000_QL80_.jpg",
    tags: ["anatomy", "medical", "reference"],
    pageCount: 1576,
    targetAudience: "Professional",
    series: null,
    keywords: ["human body", "medical textbook", "illustrations"],
    availability: "In Stock",
    price: 149.99,
    averageRating: 4.8,
    readingTime: "Reference",
    awards: [],
    culturalNotes: "Standard medical reference for over 150 years.",
    reviews: [
      { user: "Dr. Smith", comment: "Essential for medical students.", rating: 5 },
      { user: "Sarah", comment: "Detailed and comprehensive.", rating: 5 }
    ]
  },
  {
    id: 28,
    title: "The Joy of Cooking",
    author: "Irma S. Rombauer",
    genre: "Cookbook",
    description: "One of the most comprehensive cookbooks ever published with over 4,500 recipes.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Scribner",
    publicationYear: 1931,
    edition: "2019 Revision",
    isbn: "978-1501169717",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91XU1+V9Q5L._AC_UF1000,1000_QL80_.jpg",
    tags: ["cooking", "recipes", "food"],
    pageCount: 1152,
    targetAudience: "Adult",
    series: null,
    keywords: ["baking", "techniques", "American cuisine"],
    availability: "In Stock",
    price: 35.00,
    averageRating: 4.7,
    readingTime: "Reference",
    awards: ["James Beard Foundation Hall of Fame"],
    culturalNotes: "Reflects American home cooking traditions.",
    reviews: [
      { user: "Chef John", comment: "My culinary bible.", rating: 5 },
      { user: "Emma", comment: "Perfect for beginners and experts.", rating: 5 }
    ]
  },
  {
    id: 29,
    title: "The Elements of Style",
    author: "William Strunk Jr. & E.B. White",
    genre: "Writing Guide",
    description: "American English writing style guide with recommendations for improving writing.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Pearson",
    publicationYear: 1918,
    edition: "4th",
    isbn: "978-0205309023",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71E0g6fQnKL._AC_UF1000,1000_QL80_.jpg",
    tags: ["writing", "style", "grammar"],
    pageCount: 105,
    targetAudience: "Adult",
    series: null,
    keywords: ["English", "composition", "clarity"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.5,
    readingTime: "2 hours",
    awards: [],
    culturalNotes: "Standard reference for American English style.",
    reviews: [
      { user: "Professor Lee", comment: "Every writer should read this.", rating: 5 },
      { user: "Mark", comment: "Concise and powerful.", rating: 4 }
    ]
  },
  {
    id: 30,
    title: "The Origin of Species",
    author: "Charles Darwin",
    genre: "Science",
    description: "Foundational work of evolutionary biology introducing the scientific theory of natural selection.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "John Murray",
    publicationYear: 1859,
    edition: "1st",
    isbn: "978-0451529060",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71XhJZQYZBL._AC_UF1000,1000_QL80_.jpg",
    tags: ["biology", "evolution", "science"],
    pageCount: 502,
    targetAudience: "Adult",
    series: null,
    keywords: ["natural selection", "species", "science history"],
    availability: "In Stock",
    price: 12.99,
    averageRating: 4.6,
    readingTime: "8 hours",
    awards: [],
    culturalNotes: "Revolutionized biological science and remains controversial in some circles.",
    reviews: [
      { user: "Dr. Wilson", comment: "The foundation of modern biology.", rating: 5 },
      { user: "Lisa", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 31,
    title: "The Complete Works of William Shakespeare",
    author: "William Shakespeare",
    genre: "Drama",
    description: "Collection of all 39 plays, 154 sonnets, and other poems by the English playwright.",
    language: "English",
    countryOfOrigin: "England",
    publisher: "Modern Library",
    publicationYear: 1623,
    edition: "Modern Library Classics",
    isbn: "978-0679642954",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/81dQ97D0UQL._AC_UF1000,1000_QL80_.jpg",
    tags: ["classic", "poetry", "theatre"],
    pageCount: 1264,
    targetAudience: "Adult",
    series: null,
    keywords: ["Elizabethan", "tragedy", "comedy", "sonnets"],
    availability: "In Stock",
    price: 29.99,
    averageRating: 4.8,
    readingTime: "Extensive",
    awards: [],
    culturalNotes: "Cornerstone of English literature.",
    reviews: [
      { user: "Professor Clark", comment: "Essential for any literature lover.", rating: 5 },
      { user: "Olivia", comment: "Timeless brilliance.", rating: 5 }
    ]
  },
  {
    id: 32,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Popular Science",
    description: "Explores fundamental questions about the universe including the Big Bang, black holes, and relativity.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Bantam Books",
    publicationYear: 1988,
    edition: "10th Anniversary",
    isbn: "978-0553380163",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/81aV5sWmNfL._AC_UF1000,1000_QL80_.jpg",
    tags: ["physics", "cosmology", "astronomy"],
    pageCount: 212,
    targetAudience: "Adult",
    series: null,
    keywords: ["universe", "time", "black holes", "quantum mechanics"],
    availability: "In Stock",
    price: 14.99,
    averageRating: 4.6,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Made complex scientific concepts accessible to general readers.",
    reviews: [
      { user: "Neil", comment: "Mind-expanding journey through cosmology.", rating: 5 },
      { user: "Sophia", comment: "Challenging but fascinating.", rating: 4 }
    ]
  },
  {
    id: 33,
    title: "The Quran",
    author: "Various Authors",
    genre: "Religious Text",
    description: "Central religious text of Islam, believed by Muslims to be a revelation from God.",
    language: "Arabic",
    countryOfOrigin: "Saudi Arabia",
    publisher: "Various",
    publicationYear: 632,
    edition: "Modern English Translation",
    isbn: "978-0199535958",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/81XxYH5sJmL._AC_UF1000,1000_QL80_.jpg",
    tags: ["Islam", "religion", "spirituality"],
    pageCount: 604,
    targetAudience: "Adult",
    series: null,
    keywords: ["prophet Muhammad", "Islamic law", "faith"],
    availability: "In Stock",
    price: 24.99,
    averageRating: 4.9,
    readingTime: "Varies",
    awards: [],
    culturalNotes: "Sacred text for over 1.8 billion Muslims worldwide.",
    reviews: [
      { user: "Ahmed", comment: "Guidance for life.", rating: 5 },
      { user: "Fatima", comment: "Beautiful translation.", rating: 5 }
    ]
  },
  {
    id: 34,
    title: "The Bhagavad Gita",
    author: "Vyasa",
    genre: "Religious Text",
    description: "700-verse Hindu scripture that is part of the epic Mahabharata, focusing on duty and devotion.",
    language: "Sanskrit",
    countryOfOrigin: "India",
    publisher: "Various",
    publicationYear: -200,
    edition: "Eknath Easwaran Translation",
    isbn: "978-1586380199",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71xRrHUd9IL._AC_UF1000,1000_QL80_.jpg",
    tags: ["Hinduism", "philosophy", "spirituality"],
    pageCount: 208,
    targetAudience: "Adult",
    series: null,
    keywords: ["Krishna", "dharma", "yoga", "Indian philosophy"],
    availability: "In Stock",
    price: 12.95,
    averageRating: 4.7,
    readingTime: "3 hours",
    awards: [],
    culturalNotes: "Foundational text of Hindu philosophy and spirituality.",
    reviews: [
      { user: "Raj", comment: "Timeless wisdom for modern life.", rating: 5 },
      { user: "Priya", comment: "Life-changing perspective.", rating: 5 }
    ]
  },
  {
    id: 35,
    title: "The Tao Te Ching",
    author: "Lao Tzu",
    genre: "Philosophy",
    description: "Chinese classic text fundamental to both philosophical and religious Taoism.",
    language: "Chinese",
    countryOfOrigin: "China",
    publisher: "Various",
    publicationYear: -400,
    edition: "Stephen Mitchell Translation",
    isbn: "978-0061142666",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71s41A+5QFL._AC_UF1000,1000_QL80_.jpg",
    tags: ["Taoism", "wisdom", "ancient"],
    pageCount: 112,
    targetAudience: "Adult",
    series: null,
    keywords: ["wu wei", "nature", "balance", "Chinese philosophy"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.6,
    readingTime: "2 hours",
    awards: [],
    culturalNotes: "Influential in both Eastern and Western thought.",
    reviews: [
      { user: "Wei", comment: "Profound simplicity.", rating: 5 },
      { user: "Ming", comment: "Best translation available.", rating: 5 }
    ]
  },
  {
    id: 36,
    title: "The Complete Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    description: "Collection of all 4 novels and 56 short stories featuring the detective Sherlock Holmes.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Doubleday",
    publicationYear: 1930,
    edition: "Complete Collection",
    isbn: "978-0553328257",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["detective", "crime", "classic"],
    pageCount: 1788,
    targetAudience: "Adult",
    series: "Sherlock Holmes",
    keywords: ["Baker Street", "Dr. Watson", "deduction", "Victorian"],
    availability: "In Stock",
    price: 24.99,
    averageRating: 4.8,
    readingTime: "Extensive",
    awards: [],
    culturalNotes: "Defined the modern detective story genre.",
    reviews: [
      { user: "Gregory", comment: "The ultimate detective collection.", rating: 5 },
      { user: "Eleanor", comment: "Holmes is timeless.", rating: 5 }
    ]
  },
  {
    id: 37,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Epic Poetry",
    description: "Italian narrative poem describing Dante's journey through Hell, Purgatory, and Paradise.",
    language: "Italian",
    countryOfOrigin: "Italy",
    publisher: "Various",
    publicationYear: 1320,
    edition: "Allen Mandelbaum Translation",
    isbn: "978-0345408951",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/81XyB5VwJDL._AC_UF1000,1000_QL80_.jpg",
    tags: ["classic", "religion", "allegory"],
    pageCount: 798,
    targetAudience: "Adult",
    series: null,
    keywords: ["Hell", "Purgatory", "Heaven", "medieval"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.5,
    readingTime: "10 hours",
    awards: [],
    culturalNotes: "Masterpiece of world literature and Christian allegory.",
    reviews: [
      { user: "Robert", comment: "The pinnacle of medieval literature.", rating: 5 },
      { user: "Claudia", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 38,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    description: "Chronicles French invasion of Russia and its impact on five aristocratic families.",
    language: "Russian",
    countryOfOrigin: "Russia",
    publisher: "The Russian Messenger",
    publicationYear: 1869,
    edition: "Pevear and Volokhonsky Translation",
    isbn: "978-1400079988",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91Y1n4YqdQL._AC_UF1000,1000_QL80_.jpg",
    tags: ["classic", "Napoleonic Wars", "Russian literature"],
    pageCount: 1296,
    targetAudience: "Adult",
    series: null,
    keywords: ["Napoleon", "aristocracy", "philosophy", "19th century"],
    availability: "In Stock",
    price: 22.00,
    averageRating: 4.7,
    readingTime: "25 hours",
    awards: [],
    culturalNotes: "Monument of Russian literature examining history and human nature.",
    reviews: [
      { user: "Ivan", comment: "Worth every page.", rating: 5 },
      { user: "Natalia", comment: "The greatest novel ever written.", rating: 5 }
    ]
  },
  {
    id: 39,
    title: "The Interpretation of Dreams",
    author: "Sigmund Freud",
    genre: "Psychology",
    description: "Introduces Freud's theory of the unconscious with respect to dream interpretation.",
    language: "German",
    countryOfOrigin: "Austria",
    publisher: "Basic Books",
    publicationYear: 1899,
    edition: "Standard Edition",
    isbn: "978-0465019779",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71w5+5Ql3GL._AC_UF1000,1000_QL80_.jpg",
    tags: ["psychoanalysis", "dreams", "unconscious"],
    pageCount: 736,
    targetAudience: "Adult",
    series: null,
    keywords: ["subconscious", "symbolism", "Freudian theory"],
    availability: "In Stock",
    price: 18.99,
    averageRating: 4.3,
    readingTime: "8 hours",
    awards: [],
    culturalNotes: "Foundational work of psychoanalysis, though some theories are now disputed.",
    reviews: [
      { user: "Dr. Klein", comment: "Revolutionary for its time.", rating: 4 },
      { user: "Mark", comment: "Dense but fascinating.", rating: 4 }
    ]
  },
  {
    id: 40,
    title: "The Wealth of Nations",
    author: "Adam Smith",
    genre: "Economics",
    description: "Foundational work of classical economics discussing division of labor, productivity, and free markets.",
    language: "English",
    countryOfOrigin: "Scotland",
    publisher: "W. Strahan and T. Cadell",
    publicationYear: 1776,
    edition: "Modern Library Edition",
    isbn: "978-0679783367",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71+0+3k3JYL._AC_UF1000,1000_QL80_.jpg",
    tags: ["economics", "capitalism", "philosophy"],
    pageCount: 1264,
    targetAudience: "Adult",
    series: null,
    keywords: ["invisible hand", "free market", "political economy"],
    availability: "In Stock",
    price: 19.99,
    averageRating: 4.5,
    readingTime: "15 hours",
    awards: [],
    culturalNotes: "Foundation of modern economic theory.",
    reviews: [
      { user: "Professor Adams", comment: "Essential for understanding capitalism.", rating: 5 },
      { user: "Thomas", comment: "Dense but rewarding.", rating: 4 }
    ]
  },
  {
    id: 41,
    title: "On the Origin of Species",
    author: "Charles Darwin",
    genre: "Science",
    description: "Presents Darwin's scientific theory that populations evolve through natural selection.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "John Murray",
    publicationYear: 1859,
    edition: "1st Edition",
    isbn: "978-0451529060",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71XhJZQYZBL._AC_UF1000,1000_QL80_.jpg",
    tags: ["biology", "evolution", "science"],
    pageCount: 502,
    targetAudience: "Adult",
    series: null,
    keywords: ["natural selection", "species", "science history"],
    availability: "In Stock",
    price: 12.99,
    averageRating: 4.6,
    readingTime: "8 hours",
    awards: [],
    culturalNotes: "Revolutionized biological science.",
    reviews: [
      { user: "Dr. Wilson", comment: "The foundation of modern biology.", rating: 5 },
      { user: "Lisa", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 42,
    title: "The Second Sex",
    author: "Simone de Beauvoir",
    genre: "Philosophy",
    description: "Detailed analysis of women's oppression and foundational tract of contemporary feminism.",
    language: "French",
    countryOfOrigin: "France",
    publisher: "Gallimard",
    publicationYear: 1949,
    edition: "Vintage Reprint",
    isbn: "978-0307277787",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71Z4U3hJQBL._AC_UF1000,1000_QL80_.jpg",
    tags: ["feminism", "existentialism", "gender studies"],
    pageCount: 800,
    targetAudience: "Adult",
    series: null,
    keywords: ["women", "oppression", "existential feminism"],
    availability: "In Stock",
    price: 16.95,
    averageRating: 4.6,
    readingTime: "10 hours",
    awards: [],
    culturalNotes: "Foundational feminist text that remains influential.",
    reviews: [
      { user: "Claire", comment: "Changed how I see gender.", rating: 5 },
      { user: "Jean", comment: "Dense but essential reading.", rating: 4 }
    ]
  },
  {
    id: 43,
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    genre: "Philosophy of Science",
    description: "Analysis of the history of science introducing the concept of paradigm shifts.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "University of Chicago Press",
    publicationYear: 1962,
    edition: "4th Edition",
    isbn: "978-0226458120",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["science", "philosophy", "history"],
    pageCount: 264,
    targetAudience: "Adult",
    series: null,
    keywords: ["paradigm shift", "scientific progress", "theory"],
    availability: "In Stock",
    price: 14.00,
    averageRating: 4.4,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Revolutionized understanding of scientific progress.",
    reviews: [
      { user: "Professor Chen", comment: "Changed how we understand science.", rating: 5 },
      { user: "Michael", comment: "Challenging but eye-opening.", rating: 4 }
    ]
  },
  {
    id: 44,
    title: "The Prince",
    author: "Niccolò Machiavelli",
    genre: "Political Philosophy",
    description: "16th-century political treatise on how to acquire and maintain political power.",
    language: "Italian",
    countryOfOrigin: "Italy",
    publisher: "Antonio Blado d'Asola",
    publicationYear: 1532,
    edition: "Penguin Classics",
    isbn: "978-0140449150",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71X5hTQYQYL._AC_UF1000,1000_QL80_.jpg",
    tags: ["politics", "power", "Renaissance"],
    pageCount: 140,
    targetAudience: "Adult",
    series: null,
    keywords: ["leadership", "statecraft", "Medici"],
    availability: "In Stock",
    price: 9.99,
    averageRating: 4.3,
    readingTime: "3 hours",
    awards: [],
    culturalNotes: "Controversial work on political realism.",
    reviews: [
      { user: "Robert", comment: "Timeless lessons on power.", rating: 5 },
      { user: "Laura", comment: "Disturbing but insightful.", rating: 4 }
    ]
  },
  {
    id: 45,
    title: "The Histories",
    author: "Herodotus",
    genre: "History",
    description: "Record of ancient traditions, politics, geography of ancient Near East and Mediterranean.",
    language: "Ancient Greek",
    countryOfOrigin: "Greece",
    publisher: "Various",
    publicationYear: -430,
    edition: "Penguin Classics",
    isbn: "978-0140449082",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/81Z+Z+Z+Z+ZL._AC_UF1000,1000_QL80_.jpg",
    tags: ["ancient history", "Persian Wars", "classic"],
    pageCount: 716,
    targetAudience: "Adult",
    series: null,
    keywords: ["Persia", "Greece", "Egypt", "historiography"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.5,
    readingTime: "12 hours",
    awards: [],
    culturalNotes: "Considered the first work of history in Western literature.",
    reviews: [
      { user: "Professor Jones", comment: "Fascinating account of the ancient world.", rating: 5 },
      { user: "David", comment: "Surprisingly readable for its age.", rating: 4 }
    ]
  },
  {
    id: 46,
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy",
    description: "Socratic dialogue concerning justice, order, and character of the just city-state.",
    language: "Ancient Greek",
    countryOfOrigin: "Greece",
    publisher: "Various",
    publicationYear: -380,
    edition: "Penguin Classics",
    isbn: "978-0140455113",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/81Z+Z+Z+Z+ZL._AC_UF1000,1000_QL80_.jpg",
    tags: ["philosophy", "politics", "classic"],
    pageCount: 416,
    targetAudience: "Adult",
    series: null,
    keywords: ["justice", "ideal society", "Socrates"],
    availability: "In Stock",
    price: 12.00,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Foundation of Western political philosophy.",
    reviews: [
      { user: "Professor Smith", comment: "Essential reading for philosophers.", rating: 5 },
      { user: "Anna", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 47,
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    genre: "Computer Science",
    description: "Comprehensive monograph on algorithms and programming methods.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Addison-Wesley",
    publicationYear: 1968,
    edition: "3rd Edition",
    isbn: "978-0321751041",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/81sBXQeDnGL._AC_UF1000,1000_QL80_.jpg",
    tags: ["programming", "algorithms", "computer science"],
    pageCount: 3168,
    targetAudience: "Professional",
    series: null,
    keywords: ["mathematical programming", "analysis", "data structures"],
    availability: "In Stock",
    price: 199.99,
    averageRating: 4.9,
    readingTime: "Reference",
    awards: [],
    culturalNotes: "The bible of computer programming.",
    reviews: [
      { user: "Dr. Johnson", comment: "The definitive work on algorithms.", rating: 5 },
      { user: "Sam", comment: "Dense but invaluable.", rating: 5 }
    ]
  },
  {
    id: 48,
    title: "The Oxford English Dictionary",
    author: "John Simpson & Edmund Weiner",
    genre: "Reference",
    description: "Definitive record of the English language, tracing word development through quotations.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Oxford University Press",
    publicationYear: 1884,
    edition: "20 Volume Set",
    isbn: "978-0198611868",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/81sBXQeDnGL._AC_UF1000,1000_QL80_.jpg",
    tags: ["dictionary", "language", "reference"],
    pageCount: 21728,
    targetAudience: "Adult",
    series: null,
    keywords: ["etymology", "definitions", "English language"],
    availability: "In Stock",
    price: 999.00,
    averageRating: 4.9,
    readingTime: "Reference",
    awards: [],
    culturalNotes: "Most comprehensive dictionary of the English language.",
    reviews: [
      { user: "Professor Brown", comment: "The ultimate language reference.", rating: 5 },
      { user: "Emma", comment: "Worth every penny for scholars.", rating: 5 }
    ]
  },
  {
    id: 49,
    title: "The Complete Calvin and Hobbes",
    author: "Bill Watterson",
    genre: "Comics",
    description: "Collection of all Calvin and Hobbes comic strips from 1985 to 1995.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Andrews McMeel Publishing",
    publicationYear: 2005,
    edition: "Complete Collection",
    isbn: "978-0740748479",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["comics", "humor", "childhood"],
    pageCount: 1456,
    targetAudience: "All Ages",
    series: "Calvin and Hobbes",
    keywords: ["imagination", "friendship", "adventure"],
    availability: "In Stock",
    price: 150.00,
    averageRating: 4.9,
    readingTime: "Extensive",
    awards: ["Reuben Award"],
    culturalNotes: "One of the most beloved comic strips in history.",
    reviews: [
      { user: "James", comment: "Pure genius from start to finish.", rating: 5 },
      { user: "Sarah", comment: "My childhood in a box set.", rating: 5 }
    ]
  },
  {
    id: 50,
    title: "The Complete Far Side",
    author: "Gary Larson",
    genre: "Comics",
    description: "Complete collection of The Far Side single-panel comics from 1980 to 1995.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Andrews McMeel Publishing",
    publicationYear: 2003,
    edition: "Complete Collection",
    isbn: "978-0740721137",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["comics", "humor", "surreal"],
    pageCount: 1280,
    targetAudience: "Adult",
    series: "The Far Side",
    keywords: ["single-panel", "absurd", "science humor"],
    availability: "In Stock",
    price: 135.00,
    averageRating: 4.9,
    readingTime: "Extensive",
    awards: ["Reuben Award"],
    culturalNotes: "Groundbreaking single-panel comic with surreal humor.",
    reviews: [
      { user: "Mike", comment: "The gold standard of comic humor.", rating: 5 },
      { user: "Jennifer", comment: "Still laugh-out-loud funny decades later.", rating: 5 }
    ]
  },
  {
    id: 51,
    title: "The Complete Maus",
    author: "Art Spiegelman",
    genre: "Graphic Novel",
    description: "Graphic novel depicting the author's father's Holocaust experiences with Jews as mice and Nazis as cats.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Pantheon",
    publicationYear: 1991,
    edition: "Complete Edition",
    isbn: "978-0679406419",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["Holocaust", "memoir", "historical"],
    pageCount: 296,
    targetAudience: "Adult",
    series: null,
    keywords: ["World War II", "survival", "memory"],
    availability: "In Stock",
    price: 24.99,
    averageRating: 4.8,
    readingTime: "4 hours",
    awards: ["Pulitzer Prize Special Award"],
    culturalNotes: "First graphic novel to win a Pulitzer Prize.",
    reviews: [
      { user: "Rachel", comment: "Powerful and heartbreaking.", rating: 5 },
      { user: "Daniel", comment: "Changed how I see graphic novels.", rating: 5 }
    ]
  },
  {
    id: 52,
    title: "Persepolis",
    author: "Marjane Satrapi",
    genre: "Graphic Novel",
    description: "Autobiographical graphic novel about growing up during the Iranian Revolution.",
    language: "French",
    countryOfOrigin: "France",
    publisher: "Pantheon",
    publicationYear: 2000,
    edition: "Complete Edition",
    isbn: "978-0375714573",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["memoir", "Iran", "coming-of-age"],
    pageCount: 341,
    targetAudience: "Adult",
    series: null,
    keywords: ["revolution", "Islam", "identity"],
    availability: "In Stock",
    price: 16.95,
    averageRating: 4.7,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Provides personal insight into Iranian history and culture.",
    reviews: [
      { user: "Navid", comment: "Beautiful and heartbreaking.", rating: 5 },
      { user: "Leila", comment: "Essential for understanding modern Iran.", rating: 5 }
    ]
  },
  {
    id: 53,
    title: "Understanding Comics",
    author: "Scott McCloud",
    genre: "Nonfiction",
    description: "Explores the definition, history, vocabulary, and methods of comics as an art form.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Harper Perennial",
    publicationYear: 1993,
    edition: "1st",
    isbn: "978-0060976255",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["comics", "art", "theory"],
    pageCount: 224,
    targetAudience: "Adult",
    series: null,
    keywords: ["visual storytelling", "sequential art", "medium"],
    availability: "In Stock",
    price: 22.99,
    averageRating: 4.7,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Seminal work on comics as an art form.",
    reviews: [
      { user: "Chris", comment: "Brilliant analysis of the medium.", rating: 5 },
      { user: "Tara", comment: "Essential for comic creators.", rating: 5 }
    ]
  },
  {
    id: 54,
    title: "The Complete Peanuts",
    author: "Charles M. Schulz",
    genre: "Comics",
    description: "Complete collection of Peanuts comic strips from 1950 to 2000.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Fantagraphics",
    publicationYear: 2004,
    edition: "Complete Collection",
    isbn: "978-1560975892",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["comics", "humor", "classic"],
    pageCount: 3200,
    targetAudience: "All Ages",
    series: "Peanuts",
    keywords: ["Charlie Brown", "Snoopy", "childhood"],
    availability: "In Stock",
    price: 350.00,
    averageRating: 4.9,
    readingTime: "Extensive",
    awards: ["Reuben Award"],
    culturalNotes: "One of the most influential comic strips of all time.",
    reviews: [
      { user: "Thomas", comment: "The definitive collection of an American classic.", rating: 5 },
      { user: "Emily", comment: "Worth every penny for Peanuts fans.", rating: 5 }
    ]
  },
  {
    id: 55,
    title: "Watchmen",
    author: "Alan Moore & Dave Gibbons",
    genre: "Graphic Novel",
    description: "Superhero story exploring moral and philosophical issues in an alternate history where costumed heroes exist.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "DC Comics",
    publicationYear: 1986,
    edition: "Absolute Edition",
    isbn: "978-0930289232",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["superhero", "dystopian", "philosophy"],
    pageCount: 416,
    targetAudience: "Adult",
    series: null,
    keywords: ["alternate history", "morality", "power"],
    availability: "In Stock",
    price: 49.99,
    averageRating: 4.8,
    readingTime: "6 hours",
    awards: ["Hugo Award"],
    culturalNotes: "Redefined what superhero comics could be.",
    reviews: [
      { user: "Kevin", comment: "The greatest graphic novel ever made.", rating: 5 },
      { user: "Jessica", comment: "Complex and thought-provoking.", rating: 5 }
    ]
  },
  {
    id: 56,
    title: "Sandman",
    author: "Neil Gaiman",
    genre: "Graphic Novel",
    description: "Epic fantasy series about Dream of the Endless, who rules over the world of dreams.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "DC Comics",
    publicationYear: 1989,
    edition: "Absolute Edition",
    isbn: "978-1401232839",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/91SU1pQq9VL._AC_UF1000,1000_QL80_.jpg",
    tags: ["fantasy", "mythology", "horror"],
    pageCount: 2000,
    targetAudience: "Adult",
    series: "Sandman",
    keywords: ["Dream", "Endless", "myth", "storytelling"],
    availability: "In Stock",
    price: 199.99,
    averageRating: 4.9,
    readingTime: "Extensive",
    awards: ["World Fantasy Award"],
    culturalNotes: "Elevated comics to literary status.",
    reviews: [
      { user: "Patrick", comment: "Neil Gaiman's masterpiece.", rating: 5 },
      { user: "Sophie", comment: "Changed how I see comics.", rating: 5 }
    ]
  },
  {
    id: 57,
    title: "Understanding Media: The Extensions of Man",
    author: "Marshall McLuhan",
    genre: "Media Theory",
    description: "Seminal work introducing the concept that the medium is the message and analyzing media effects.",
    language: "English",
    countryOfOrigin: "Canada",
    publisher: "McGraw-Hill",
    publicationYear: 1964,
    edition: "Critical Edition",
    isbn: "978-0262631594",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["media", "communication", "theory"],
    pageCount: 392,
    targetAudience: "Adult",
    series: null,
    keywords: ["technology", "culture", "global village"],
    availability: "In Stock",
    price: 22.95,
    averageRating: 4.5,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Foundational text for media studies.",
    reviews: [
      { user: "Professor Wilson", comment: "Ahead of its time.", rating: 5 },
      { user: "Alex", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 58,
    title: "Manufacturing Consent",
    author: "Edward S. Herman & Noam Chomsky",
    genre: "Political Science",
    description: "Propaganda model analyzing how mass communication media shape public opinion to serve elite interests.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Pantheon",
    publicationYear: 1988,
    edition: "Updated Edition",
    isbn: "978-0375714498",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["media", "propaganda", "politics"],
    pageCount: 412,
    targetAudience: "Adult",
    series: null,
    keywords: ["journalism", "bias", "power"],
    availability: "In Stock",
    price: 18.95,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Influential critique of mass media.",
    reviews: [
      { user: "James", comment: "Eye-opening analysis of media.", rating: 5 },
      { user: "Sarah", comment: "Essential for understanding news media.", rating: 5 }
    ]
  },
  {
    id: 59,
    title: "The Medium is the Massage",
    author: "Marshall McLuhan & Quentin Fiore",
    genre: "Media Theory",
    description: "Experimental book illustrating McLuhan's media theories through innovative typography and layout.",
    language: "English",
    countryOfOrigin: "Canada",
    publisher: "Bantam",
    publicationYear: 1967,
    edition: "Anniversary Edition",
    isbn: "978-1584230700",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["media", "design", "culture"],
    pageCount: 160,
    targetAudience: "Adult",
    series: null,
    keywords: ["typography", "visual communication", "technology"],
    availability: "In Stock",
    price: 16.95,
    averageRating: 4.4,
    readingTime: "2 hours",
    awards: [],
    culturalNotes: "Groundbreaking in both content and form.",
    reviews: [
      { user: "Designer", comment: "Revolutionary design and ideas.", rating: 5 },
      { user: "Mark", comment: "A visual and intellectual feast.", rating: 4 }
    ]
  },
  {
    id: 60,
    title: "Amusing Ourselves to Death",
    author: "Neil Postman",
    genre: "Media Criticism",
    description: "Argues television has transformed public discourse into entertainment, undermining serious thought.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Penguin",
    publicationYear: 1985,
    edition: "20th Anniversary Edition",
    isbn: "978-0143036531",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["television", "culture", "criticism"],
    pageCount: 208,
    targetAudience: "Adult",
    series: null,
    keywords: ["entertainment", "public discourse", "technology"],
    availability: "In Stock",
    price: 15.00,
    averageRating: 4.5,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Prescient critique of media's effect on public discourse.",
    reviews: [
      { user: "Professor", comment: "More relevant than ever.", rating: 5 },
      { user: "Lisa", comment: "Explains so much about modern media.", rating: 5 }
    ]
  },
  {
    id: 61,
    title: "The Shallows: What the Internet Is Doing to Our Brains",
    author: "Nicholas Carr",
    genre: "Psychology",
    description: "Explores how Internet use may be affecting cognition, concentrating on attention and deep thinking.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "W.W. Norton",
    publicationYear: 2010,
    edition: "1st",
    isbn: "978-0393339758",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["internet", "neuroscience", "attention"],
    pageCount: 280,
    targetAudience: "Adult",
    series: null,
    keywords: ["technology", "cognition", "memory"],
    availability: "In Stock",
    price: 16.95,
    averageRating: 4.3,
    readingTime: "5 hours",
    awards: ["Pulitzer Prize Finalist"],
    culturalNotes: "Important examination of digital age cognition.",
    reviews: [
      { user: "David", comment: "Changed how I use technology.", rating: 5 },
      { user: "Emma", comment: "Fascinating and concerning.", rating: 4 }
    ]
  },
  {
    id: 62,
    title: "The Attention Merchants",
    author: "Tim Wu",
    genre: "Media Studies",
    description: "History of how businesses have competed to capture human attention from print to digital media.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Knopf",
    publicationYear: 2016,
    edition: "1st",
    isbn: "978-0385352017",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["advertising", "attention economy", "history"],
    pageCount: 416,
    targetAudience: "Adult",
    series: null,
    keywords: ["marketing", "media", "business"],
    availability: "In Stock",
    price: 28.00,
    averageRating: 4.4,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Reveals the business behind capturing attention.",
    reviews: [
      { user: "Marketer", comment: "Essential for understanding modern media.", rating: 5 },
      { user: "Anna", comment: "Eye-opening history of advertising.", rating: 4 }
    ]
  },
  {
    id: 63,
    title: "The Society of the Spectacle",
    author: "Guy Debord",
    genre: "Philosophy",
    description: "Analysis of consumer capitalism where authentic social life is replaced by its representation.",
    language: "French",
    countryOfOrigin: "France",
    publisher: "Zone Books",
    publicationYear: 1967,
    edition: "Revised",
    isbn: "978-0942299793",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["Marxism", "capitalism", "critique"],
    pageCount: 160,
    targetAudience: "Adult",
    series: null,
    keywords: ["spectacle", "alienation", "consumer society"],
    availability: "In Stock",
    price: 19.95,
    averageRating: 4.5,
    readingTime: "3 hours",
    awards: [],
    culturalNotes: "Foundational Situationist text critiquing media society.",
    reviews: [
      { user: "Radical", comment: "Brilliant critique of modern life.", rating: 5 },
      { user: "Theo", comment: "Dense but rewarding.", rating: 4 }
    ]
  },
  {
    id: 64,
    title: "Understanding Power",
    author: "Noam Chomsky",
    genre: "Political Science",
    description: "Collection of discussions analyzing power structures in society and media manipulation.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "New Press",
    publicationYear: 2002,
    edition: "1st",
    isbn: "978-1565847033",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["power", "media", "activism"],
    pageCount: 416,
    targetAudience: "Adult",
    series: null,
    keywords: ["elites", "democracy", "propaganda"],
    availability: "In Stock",
    price: 19.95,
    averageRating: 4.7,
    readingTime: "8 hours",
    awards: [],
    culturalNotes: "Comprehensive introduction to Chomsky's political thought.",
    reviews: [
      { user: "Activist", comment: "Essential for understanding power.", rating: 5 },
      { user: "James", comment: "Chomsky at his most accessible.", rating: 5 }
    ]
  },
  {
    id: 65,
    title: "The Filter Bubble",
    author: "Eli Pariser",
    genre: "Technology",
    description: "Explains how personalized search results create informational isolation with algorithmic filtering.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Penguin",
    publicationYear: 2011,
    edition: "1st",
    isbn: "978-0143121237",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["internet", "algorithms", "privacy"],
    pageCount: 304,
    targetAudience: "Adult",
    series: null,
    keywords: ["personalization", "search", "democracy"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.2,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Early warning about algorithmic personalization effects.",
    reviews: [
      { user: "Tech", comment: "Changed how I use the internet.", rating: 5 },
      { user: "Sarah", comment: "Important for understanding modern media.", rating: 4 }
    ]
  },
  {
    id: 66,
    title: "Algorithms of Oppression",
    author: "Safiya Umoja Noble",
    genre: "Technology",
    description: "Examines how search engines reinforce racism and discrimination through biased algorithms.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "NYU Press",
    publicationYear: 2018,
    edition: "1st",
    isbn: "978-1479837243",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["algorithms", "racism", "technology"],
    pageCount: 256,
    targetAudience: "Adult",
    series: null,
    keywords: ["search engines", "bias", "discrimination"],
    availability: "In Stock",
    price: 18.95,
    averageRating: 4.6,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Important critique of supposedly neutral technologies.",
    reviews: [
      { user: "Researcher", comment: "Groundbreaking analysis of tech bias.", rating: 5 },
      { user: "Alex", comment: "Essential reading for tech workers.", rating: 5 }
    ]
  },
  {
    id: 67,
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    genre: "Mathematics",
    description: "Examines how big data increases inequality and threatens democracy through opaque algorithms.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Crown",
    publicationYear: 2016,
    edition: "1st",
    isbn: "978-0553418811",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["big data", "algorithms", "inequality"],
    pageCount: 272,
    targetAudience: "Adult",
    series: null,
    keywords: ["mathematical models", "bias", "justice"],
    availability: "In Stock",
    price: 17.00,
    averageRating: 4.5,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Important critique of algorithmic decision-making.",
    reviews: [
      { user: "Data", comment: "Changed how I think about algorithms.", rating: 5 },
      { user: "Rachel", comment: "Scary but necessary reading.", rating: 4 }
    ]
  },
  {
    id: 68,
    title: "The Age of Surveillance Capitalism",
    author: "Shoshana Zuboff",
    genre: "Technology",
    description: "Analyzes new economic order claiming human experience as free raw material for commercial practices.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "PublicAffairs",
    publicationYear: 2018,
    edition: "1st",
    isbn: "978-1610395694",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["privacy", "capitalism", "technology"],
    pageCount: 704,
    targetAudience: "Adult",
    series: null,
    keywords: ["data", "Google", "Facebook", "control"],
    availability: "In Stock",
    price: 20.00,
    averageRating: 4.7,
    readingTime: "10 hours",
    awards: [],
    culturalNotes: "Definitive analysis of the digital economy.",
    reviews: [
      { user: "Professor", comment: "The most important book of our time.", rating: 5 },
      { user: "Mark", comment: "Dense but essential.", rating: 4 }
    ]
  },
  {
    id: 69,
    title: "The Right to Privacy",
    author: "Samuel D. Warren & Louis D. Brandeis",
    genre: "Law",
    description: "Seminal Harvard Law Review article arguing for recognition of privacy rights in American law.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Harvard Law Review",
    publicationYear: 1890,
    edition: "Reprint",
    isbn: "978-1584771073",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["privacy", "law", "rights"],
    pageCount: 30,
    targetAudience: "Professional",
    series: null,
    keywords: ["legal theory", "constitution", "civil liberties"],
    availability: "In Stock",
    price: 9.95,
    averageRating: 4.8,
    readingTime: "1 hour",
    awards: [],
    culturalNotes: "Foundation of modern privacy law.",
    reviews: [
      { user: "Lawyer", comment: "Foundational legal text.", rating: 5 },
      { user: "Student", comment: "Short but incredibly influential.", rating: 5 }
    ]
  },
  {
    id: 70,
    title: "Privacy in Context",
    author: "Helen Nissenbaum",
    genre: "Philosophy",
    description: "Develops theory of privacy as contextual integrity, arguing privacy is about appropriate information flow.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Stanford University Press",
    publicationYear: 2009,
    edition: "1st",
    isbn: "978-0804752371",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["privacy", "ethics", "technology"],
    pageCount: 304,
    targetAudience: "Adult",
    series: null,
    keywords: ["information", "norms", "context"],
    availability: "In Stock",
    price: 28.00,
    averageRating: 4.5,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Important philosophical framework for privacy.",
    reviews: [
      { user: "Ethicist", comment: "Best theory of privacy available.", rating: 5 },
      { user: "Researcher", comment: "Complex but rewarding.", rating: 4 }
    ]
  },
  {
    id: 71,
    title: "The Code Book",
    author: "Simon Singh",
    genre: "Science",
    description: "History of cryptography from ancient times to quantum cryptography, explaining key developments.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Doubleday",
    publicationYear: 1999,
    edition: "1st",
    isbn: "978-0385495318",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["cryptography", "mathematics", "history"],
    pageCount: 412,
    targetAudience: "Adult",
    series: null,
    keywords: ["codes", "ciphers", "security"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Accessible introduction to cryptography's history.",
    reviews: [
      { user: "Coder", comment: "Fascinating history of secret communication.", rating: 5 },
      { user: "Math", comment: "Makes complex topics understandable.", rating: 5 }
    ]
  },
  {
    id: 72,
    title: "The Cuckoo's Egg",
    author: "Clifford Stoll",
    genre: "Technology",
    description: "First-person account of tracking a hacker who broke into a computer at Lawrence Berkeley Lab.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Doubleday",
    publicationYear: 1989,
    edition: "1st",
    isbn: "978-1416507789",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["hacking", "cybersecurity", "memoir"],
    pageCount: 326,
    targetAudience: "Adult",
    series: null,
    keywords: ["espionage", "Cold War", "computers"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.7,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Early account of computer intrusion detection.",
    reviews: [
      { user: "Security", comment: "Classic true story of cyber investigation.", rating: 5 },
      { user: "Tech", comment: "Still relevant decades later.", rating: 5 }
    ]
  },
  {
    id: 73,
    title: "Countdown to Zero Day",
    author: "Kim Zetter",
    genre: "Technology",
    description: "Details discovery of Stuxnet, the first digital weapon used against physical infrastructure.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Crown",
    publicationYear: 2014,
    edition: "1st",
    isbn: "978-0770436179",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["cyberwar", "security", "politics"],
    pageCount: 448,
    targetAudience: "Adult",
    series: null,
    keywords: ["Stuxnet", "Iran", "NSA", "cyberweapons"],
    availability: "In Stock",
    price: 18.00,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Reveals new era of digital warfare.",
    reviews: [
      { user: "Journalist", comment: "Definitive account of Stuxnet.", rating: 5 },
      { user: "Security", comment: "Scary but essential reading.", rating: 5 }
    ]
  },
  {
    id: 74,
    title: "The Art of Deception",
    author: "Kevin Mitnick",
    genre: "Technology",
    description: "Explains social engineering techniques used to manipulate people into revealing confidential information.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Wiley",
    publicationYear: 2002,
    edition: "1st",
    isbn: "978-0764542800",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["security", "hacking", "social engineering"],
    pageCount: 368,
    targetAudience: "Adult",
    series: null,
    keywords: ["psychology", "manipulation", "cybersecurity"],
    availability: "In Stock",
    price: 22.00,
    averageRating: 4.5,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "From famous hacker turned security consultant.",
    reviews: [
      { user: "Security", comment: "Eye-opening look at human vulnerabilities.", rating: 5 },
      { user: "Manager", comment: "Essential for security training.", rating: 5 }
    ]
  },
  {
    id: 75,
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard & Marcus Pinto",
    genre: "Technology",
    description: "Practical guide to discovering security flaws in web applications through penetration testing.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Wiley",
    publicationYear: 2011,
    edition: "2nd",
    isbn: "978-1118026472",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["security", "hacking", "web development"],
    pageCount: 768,
    targetAudience: "Professional",
    series: null,
    keywords: ["penetration testing", "OWASP", "vulnerabilities"],
    availability: "In Stock",
    price: 45.00,
    averageRating: 4.8,
    readingTime: "Reference",
    awards: [],
    culturalNotes: "Standard reference for web app security.",
    reviews: [
      { user: "Developer", comment: "The bible of web app security.", rating: 5 },
      { user: "Tester", comment: "Comprehensive and practical.", rating: 5 }
    ]
  },
  {
    id: 76,
    title: "The Cathedral and the Bazaar",
    author: "Eric S. Raymond",
    genre: "Technology",
    description: "Essay collection on open source software development models, contrasting cathedral and bazaar approaches.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "O'Reilly",
    publicationYear: 1999,
    edition: "1st",
    isbn: "978-0596001087",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["open source", "software", "development"],
    pageCount: 256,
    targetAudience: "Adult",
    series: null,
    keywords: ["Linux", "hacker culture", "collaboration"],
    availability: "In Stock",
    price: 24.99,
    averageRating: 4.5,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Seminal work on open source philosophy.",
    reviews: [
      { user: "Developer", comment: "Changed how we think about software.", rating: 5 },
      { user: "Manager", comment: "Essential for understanding open source.", rating: 5 }
    ]
  },
  {
    id: 77,
    title: "Hackers: Heroes of the Computer Revolution",
    author: "Steven Levy",
    genre: "History",
    description: "History of hacker culture from 1950s MIT to early homebrew computer clubs.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Anchor",
    publicationYear: 1984,
    edition: "1st",
    isbn: "978-0141000510",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["computing", "history", "hacker culture"],
    pageCount: 464,
    targetAudience: "Adult",
    series: null,
    keywords: ["MIT", "Apple", "counterculture"],
    availability: "In Stock",
    price: 17.00,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Definitive history of early hacker culture.",
    reviews: [
      { user: "Tech", comment: "Fascinating origin story of computing.", rating: 5 },
      { user: "Historian", comment: "Essential for understanding tech culture.", rating: 5 }
    ]
  },
  {
    id: 78,
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    genre: "Technology",
    description: "Pulitzer-winning account of engineers racing to build a revolutionary new computer at Data General.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Little, Brown",
    publicationYear: 1981,
    edition: "1st",
    isbn: "978-0316491976",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["computing", "engineering", "business"],
    pageCount: 293,
    targetAudience: "Adult",
    series: null,
    keywords: ["hardware", "innovation", "corporate culture"],
    availability: "In Stock",
    price: 16.99,
    averageRating: 4.6,
    readingTime: "5 hours",
    awards: ["Pulitzer Prize"],
    culturalNotes: "Classic account of computer engineering culture.",
    reviews: [
      { user: "Engineer", comment: "Still the best book about engineering.", rating: 5 },
      { user: "Manager", comment: "Insightful look at tech teams.", rating: 5 }
    ]
  },
  {
    id: 79,
    title: "Where Wizards Stay Up Late",
    author: "Katie Hafner & Matthew Lyon",
    genre: "History",
    description: "Origins of the Internet from ARPANET's creation to its transformation into global network.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Simon & Schuster",
    publicationYear: 1996,
    edition: "1st",
    isbn: "978-0684832678",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["internet", "history", "technology"],
    pageCount: 304,
    targetAudience: "Adult",
    series: null,
    keywords: ["ARPANET", "DARPA", "packet switching"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.5,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Definitive early history of the Internet.",
    reviews: [
      { user: "Historian", comment: "Fascinating origin story of the net.", rating: 5 },
      { user: "Tech", comment: "Essential for understanding the internet.", rating: 5 }
    ]
  },
  {
    id: 80,
    title: "The Innovators",
    author: "Walter Isaacson",
    genre: "History",
    description: "History of digital revolution from Ada Lovelace to Google, focusing on collaborative innovation.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Simon & Schuster",
    publicationYear: 2014,
    edition: "1st",
    isbn: "978-1476708690",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["technology", "biography", "innovation"],
    pageCount: 560,
    targetAudience: "Adult",
    series: null,
    keywords: ["computing", "internet", "collaboration"],
    availability: "In Stock",
    price: 20.00,
    averageRating: 4.6,
    readingTime: "9 hours",
    awards: [],
    culturalNotes: "Comprehensive history of digital technology.",
    reviews: [
      { user: "Tech", comment: "Masterful synthesis of tech history.", rating: 5 },
      { user: "Historian", comment: "Shows innovation is always collaborative.", rating: 5 }
    ]
  },
  {
    id: 81,
    title: "The Master Switch",
    author: "Tim Wu",
    genre: "History",
    description: "Argues information industries alternate between open and closed cycles, with implications for internet.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Knopf",
    publicationYear: 2010,
    edition: "1st",
    isbn: "978-0307269935",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["technology", "business", "policy"],
    pageCount: 384,
    targetAudience: "Adult",
    series: null,
    keywords: ["telecom", "monopoly", "innovation"],
    availability: "In Stock",
    price: 17.00,
    averageRating: 4.5,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Important framework for understanding tech industry cycles.",
    reviews: [
      { user: "Professor", comment: "Essential for understanding tech monopolies.", rating: 5 },
      { user: "Analyst", comment: "Predictive of current tech battles.", rating: 5 }
    ]
  },
  {
    id: 82,
    title: "The Victorian Internet",
    author: "Tom Standage",
    genre: "History",
    description: "Parallels between 19th century telegraph and modern internet in transforming communication.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Walker & Company",
    publicationYear: 1998,
    edition: "1st",
    isbn: "978-0425171691",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["technology", "history", "communication"],
    pageCount: 240,
    targetAudience: "Adult",
    series: null,
    keywords: ["telegraph", "innovation", "social change"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.4,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Fascinating historical perspective on communication tech.",
    reviews: [
      { user: "Historian", comment: "Brilliant analogy between old and new tech.", rating: 5 },
      { user: "Tech", comment: "Puts internet in historical context.", rating: 5 }
    ]
  },
  {
    id: 83,
    title: "The Information",
    author: "James Gleick",
    genre: "Science",
    description: "History of information technologies from African drum languages to modern computing.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Pantheon",
    publicationYear: 2011,
    edition: "1st",
    isbn: "978-0375423727",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["information theory", "history", "technology"],
    pageCount: 544,
    targetAudience: "Adult",
    series: null,
    keywords: ["communication", "data", "Shannon"],
    availability: "In Stock",
    price: 20.00,
    averageRating: 4.6,
    readingTime: "9 hours",
    awards: [],
    culturalNotes: "Comprehensive history of information as a concept.",
    reviews: [
      { user: "Professor", comment: "Masterful synthesis of information history.", rating: 5 },
      { user: "Student", comment: "Changed how I think about information.", rating: 5 }
    ]
  },
  {
    id: 84,
    title: "The Codebreakers",
    author: "David Kahn",
    genre: "History",
    description: "Comprehensive history of cryptography from ancient Egypt to modern computing.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Scribner",
    publicationYear: 1967,
    edition: "Revised",
    isbn: "978-0684831305",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["cryptography", "history", "espionage"],
    pageCount: 1200,
    targetAudience: "Adult",
    series: null,
    keywords: ["codes", "ciphers", "intelligence"],
    availability: "In Stock",
    price: 25.00,
    averageRating: 4.8,
    readingTime: "Extensive",
    awards: [],
    culturalNotes: "Definitive history of cryptography.",
    reviews: [
      { user: "Historian", comment: "The bible of cryptographic history.", rating: 5 },
      { user: "Student", comment: "Comprehensive but readable.", rating: 5 }
    ]
  },
  {
    id: 85,
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    genre: "Biography",
    description: "Biography of Srinivasa Ramanujan, mathematical genius who emerged from poverty in colonial India.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Washington Square Press",
    publicationYear: 1991,
    edition: "1st",
    isbn: "978-0671750619",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["mathematics", "biography", "India"],
    pageCount: 438,
    targetAudience: "Adult",
    series: null,
    keywords: ["genius", "Cambridge", "number theory"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Inspirational story of mathematical brilliance.",
    reviews: [
      { user: "Math", comment: "Beautiful portrait of a genius.", rating: 5 },
      { user: "Reader", comment: "Makes advanced math accessible.", rating: 5 }
    ]
  },
  {
    id: 86,
    title: "A Beautiful Mind",
    author: "Sylvia Nasar",
    genre: "Biography",
    description: "Biography of mathematician John Nash, Nobel laureate who struggled with schizophrenia.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Simon & Schuster",
    publicationYear: 1998,
    edition: "1st",
    isbn: "978-1451628425",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["mathematics", "mental illness", "Nobel Prize"],
    pageCount: 464,
    targetAudience: "Adult",
    series: null,
    keywords: ["game theory", "Princeton", "recovery"],
    availability: "In Stock",
    price: 17.00,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: ["National Book Critics Circle Award"],
    culturalNotes: "Humanizes mathematical genius and mental illness.",
    reviews: [
      { user: "Professor", comment: "Deeply moving portrait of genius.", rating: 5 },
      { user: "Reader", comment: "Better than the movie.", rating: 5 }
    ]
  },
  {
    id: 87,
    title: "The Emperor's New Mind",
    author: "Roger Penrose",
    genre: "Science",
    description: "Controversial argument that human consciousness transcends algorithmic computation.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Oxford University Press",
    publicationYear: 1989,
    edition: "1st",
    isbn: "978-0198519737",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["consciousness", "physics", "AI"],
    pageCount: 640,
    targetAudience: "Adult",
    series: null,
    keywords: ["quantum", "mind", "computability"],
    availability: "In Stock",
    price: 22.00,
    averageRating: 4.4,
    readingTime: "10 hours",
    awards: [],
    culturalNotes: "Provocative challenge to AI orthodoxy.",
    reviews: [
      { user: "Physicist", comment: "Brilliant if controversial.", rating: 5 },
      { user: "Student", comment: "Challenging but rewarding.", rating: 4 }
    ]
  },
  {
    id: 88,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    genre: "Science",
    description: "Explores concepts of recursion and self-reference through mathematics, art, and music.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Basic Books",
    publicationYear: 1979,
    edition: "20th Anniversary",
    isbn: "978-0465026562",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["mathematics", "music", "AI"],
    pageCount: 824,
    targetAudience: "Adult",
    series: null,
    keywords: ["strange loop", "consciousness", "interdisciplinary"],
    availability: "In Stock",
    price: 24.99,
    averageRating: 4.6,
    readingTime: "15 hours",
    awards: ["Pulitzer Prize"],
    culturalNotes: "Uniquely interdisciplinary exploration of consciousness.",
    reviews: [
      { user: "Professor", comment: "A masterpiece of interdisciplinary thought.", rating: 5 },
      { user: "Reader", comment: "Life-changing if you stick with it.", rating: 5 }
    ]
  },
  {
    id: 89,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    description: "Introduces gene-centered view of evolution and concept of memes as cultural replicators.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Oxford University Press",
    publicationYear: 1976,
    edition: "30th Anniversary",
    isbn: "978-0199291151",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["evolution", "biology", "memetics"],
    pageCount: 360,
    targetAudience: "Adult",
    series: null,
    keywords: ["natural selection", "altruism", "replicators"],
    availability: "In Stock",
    price: 15.99,
    averageRating: 4.7,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Revolutionary perspective on evolutionary biology.",
    reviews: [
      { user: "Biologist", comment: "Changed how we think about evolution.", rating: 5 },
      { user: "Student", comment: "Brilliant explanation of gene's-eye view.", rating: 5 }
    ]
  },
  {
    id: 90,
    title: "The Blind Watchmaker",
    author: "Richard Dawkins",
    genre: "Science",
    description: "Argument against intelligent design using examples from biology to demonstrate natural selection.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "W.W. Norton",
    publicationYear: 1986,
    edition: "Reissue",
    isbn: "978-0393351491",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["evolution", "biology", "atheism"],
    pageCount: 468,
    targetAudience: "Adult",
    series: null,
    keywords: ["natural selection", "creationism", "complexity"],
    availability: "In Stock",
    price: 17.95,
    averageRating: 4.7,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Classic defense of evolutionary theory.",
    reviews: [
      { user: "Scientist", comment: "Definitive rebuttal of intelligent design.", rating: 5 },
      { user: "Reader", comment: "Makes complex biology accessible.", rating: 5 }
    ]
  },
  {
    id: 91,
    title: "The Double Helix",
    author: "James D. Watson",
    genre: "Science",
    description: "Personal account of the discovery of DNA's structure, revealing scientific process and rivalries.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Atheneum",
    publicationYear: 1968,
    edition: "1st",
    isbn: "978-0743216302",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["DNA", "biography", "science history"],
    pageCount: 226,
    targetAudience: "Adult",
    series: null,
    keywords: ["Crick", "Franklin", "Nobel Prize"],
    availability: "In Stock",
    price: 14.99,
    averageRating: 4.5,
    readingTime: "4 hours",
    awards: [],
    culturalNotes: "Controversial but important scientific memoir.",
    reviews: [
      { user: "Biologist", comment: "Fascinating insider view of discovery.", rating: 5 },
      { user: "Historian", comment: "Important despite its flaws.", rating: 4 }
    ]
  },
  {
    id: 92,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    genre: "Science",
    description: "History of genetics from Mendel to CRISPR, blending science, history, and personal narrative.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Scribner",
    publicationYear: 2016,
    edition: "1st",
    isbn: "978-1476733500",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["genetics", "history", "medicine"],
    pageCount: 592,
    targetAudience: "Adult",
    series: null,
    keywords: ["DNA", "heredity", "biotechnology"],
    availability: "In Stock",
    price: 20.00,
    averageRating: 4.7,
    readingTime: "9 hours",
    awards: [],
    culturalNotes: "Comprehensive and accessible genetics history.",
    reviews: [
      { user: "Doctor", comment: "Masterful blend of science and storytelling.", rating: 5 },
      { user: "Student", comment: "Makes complex genetics understandable.", rating: 5 }
    ]
  },
  {
    id: 93,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: "Science",
    description: "Story of Henrietta Lacks, whose cancer cells were cultured without consent, revolutionizing medicine.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Crown",
    publicationYear: 2010,
    edition: "1st",
    isbn: "978-1400052189",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["biography", "ethics", "medicine"],
    pageCount: 384,
    targetAudience: "Adult",
    series: null,
    keywords: ["HeLa", "bioethics", "race"],
    availability: "In Stock",
    price: 18.00,
    averageRating: 4.8,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Important examination of medical ethics and race.",
    reviews: [
      { user: "Ethicist", comment: "Essential for understanding medical ethics.", rating: 5 },
      { user: "Reader", comment: "Heartbreaking and eye-opening.", rating: 5 }
    ]
  },
  {
    id: 94,
    title: "The Man Who Mistook His Wife for a Hat",
    author: "Oliver Sacks",
    genre: "Psychology",
    description: "Case studies of patients with unusual neurological disorders, revealing brain mysteries.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Touchstone",
    publicationYear: 1985,
    edition: "1st",
    isbn: "978-0684853949",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["neurology", "case studies", "psychology"],
    pageCount: 256,
    targetAudience: "Adult",
    series: null,
    keywords: ["brain", "perception", "identity"],
    availability: "In Stock",
    price: 16.00,
    averageRating: 4.7,
    readingTime: "5 hours",
    awards: [],
    culturalNotes: "Classic of popular neuroscience writing.",
    reviews: [
      { user: "Neurologist", comment: "Sacks at his most insightful.", rating: 5 },
      { user: "Student", comment: "Fascinating window into the brain.", rating: 5 }
    ]
  },
  {
    id: 95,
    title: "Phantoms in the Brain",
    author: "V.S. Ramachandran",
    genre: "Science",
    description: "Explores neurological syndromes to understand brain organization and human nature.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "William Morrow",
    publicationYear: 1998,
    edition: "1st",
    isbn: "978-0688152475",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["neuroscience", "case studies", "perception"],
    pageCount: 352,
    targetAudience: "Adult",
    series: null,
    keywords: ["phantom limb", "consciousness", "brain damage"],
    availability: "In Stock",
    price: 28.00,
    averageRating: 4.7,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Groundbreaking popular neuroscience.",
    reviews: [
      { user: "Neuroscientist", comment: "Brilliant exploration of brain mysteries.", rating: 5 },
      { user: "Reader", comment: "Mind-blowing case studies.", rating: 5 }
    ]
  },
  {
    id: 96,
    title: "The Tell-Tale Brain",
    author: "V.S. Ramachandran",
    genre: "Science",
    description: "Explores how brain structure creates human uniqueness in art, language, and self-awareness.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "W.W. Norton",
    publicationYear: 2011,
    edition: "1st",
    isbn: "978-0393340624",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["neuroscience", "evolution", "cognition"],
    pageCount: 357,
    targetAudience: "Adult",
    series: null,
    keywords: ["mirror neurons", "art", "consciousness"],
    availability: "In Stock",
    price: 17.95,
    averageRating: 4.6,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Explores neuroscience of human uniqueness.",
    reviews: [
      { user: "Professor", comment: "Brilliant synthesis of art and neuroscience.", rating: 5 },
      { user: "Student", comment: "Changed how I think about the brain.", rating: 5 }
    ]
  },
  {
    id: 97,
    title: "Musicophilia",
    author: "Oliver Sacks",
    genre: "Psychology",
    description: "Explores music's extraordinary power over the human brain through neurological case studies.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Knopf",
    publicationYear: 2007,
    edition: "1st",
    isbn: "978-1400040810",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["music", "neurology", "psychology"],
    pageCount: 400,
    targetAudience: "Adult",
    series: null,
    keywords: ["amusia", "perfect pitch", "memory"],
    availability: "In Stock",
    price: 27.00,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Fascinating exploration of music and mind.",
    reviews: [
      { user: "Musician", comment: "Changed how I think about music.", rating: 5 },
      { user: "Doctor", comment: "Sacks at his most lyrical.", rating: 5 }
    ]
  },
  {
    id: 98,
    title: "This Is Your Brain on Music",
    author: "Daniel Levitin",
    genre: "Science",
    description: "Explains how the brain processes music, from neurons to emotional responses.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "Dutton",
    publicationYear: 2006,
    edition: "1st",
    isbn: "978-0525949695",
    format: "Hardcover",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["music", "neuroscience", "psychology"],
    pageCount: 320,
    targetAudience: "Adult",
    series: null,
    keywords: ["perception", "emotion", "memory"],
    availability: "In Stock",
    price: 28.00,
    averageRating: 4.6,
    readingTime: "6 hours",
    awards: [],
    culturalNotes: "Accessible neuroscience of music.",
    reviews: [
      { user: "Musician", comment: "Fascinating science behind music's power.", rating: 5 },
      { user: "Scientist", comment: "Great intro to music cognition.", rating: 5 }
    ]
  },
  {
    id: 99,
    title: "The Language Instinct",
    author: "Steven Pinker",
    genre: "Linguistics",
    description: "Argues humans are born with innate capacity for language acquisition and grammatical structure.",
    language: "English",
    countryOfOrigin: "United States",
    publisher: "William Morrow",
    publicationYear: 1994,
    edition: "1st",
    isbn: "978-0060958336",
    format: "Paperback",
    coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
    tags: ["linguistics", "psychology", "evolution"],
    pageCount: 448,
    targetAudience: "Adult",
    series: null,
    keywords: ["Chomsky", "grammar", "innateness"],
    availability: "In Stock",
    price: 18.99,
    averageRating: 4.6,
    readingTime: "7 hours",
    awards: [],
    culturalNotes: "Classic introduction to psycholinguistics.",
    reviews: [
      { user: "Linguist", comment: "Brilliant defense of language instinct.", rating: 5 },
      { user: "Student", comment: "Changed how I think about language.", rating: 5 }
    ]
  },
  {
    id: 100,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy Fiction",
    description: "A library between life and death that offers books showing different paths one's life could have taken.",
    language: "English",
    countryOfOrigin: "United Kingdom",
    publisher: "Canongate Books",
    publicationYear: 2020,
    edition: "1st",
    isbn: "978-1786892706",
    format: "Hardcover",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/81Y5Z2F1MAL.jpg",
    tags: ["fantasy", "philosophy", "life choices"],
    pageCount: 304,
    targetAudience: "Adult",
    series: null,
    keywords: ["library", "regret", "alternate lives", "depression"],
    availability: "In Stock",
    price: 15.99,
    averageRating: 4.3,
    readingTime: "4 hours",
    awards: ["Goodreads Choice Award for Fiction (2020)"],
    culturalNotes: "Explores mental health and life satisfaction themes.",
    reviews: [
      { user: "Nathan", comment: "Made me reflect on my own choices.", rating: 5 },
      { user: "Hannah", comment: "Uplifting and thought-provoking.", rating: 4 },
    ],
  },
];


export function getBooks(): Book[] {
  return books;
}

// Add this new function for server components
export async function fetchBookById(id: number): Promise<Book | undefined> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return books.find(book => book.id === id);
}

// Add this for related books
export async function fetchRelatedBooks(genre: string, excludeId: number): Promise<Book[]> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return books
    .filter(book => book.genre === genre && book.id !== excludeId)
    .slice(0, 3);
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

// Helper function: Calculate cosine similarity between two vectors
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}

// Helper function: Build a feature vector for a book based on genres, tags, keywords
function buildBookFeatureVector(book: Book, allGenres: string[], allTags: string[], allKeywords: string[]): number[] {
  const vector: number[] = [];

  // Genres: 1 if the book matches the genre, 0 otherwise
  allGenres.forEach((genre) => {
    vector.push(book.genre.toLowerCase() === genre.toLowerCase() ? 1 : 0);
  });

  // Tags: 1 if the book has the tag, 0 otherwise
  allTags.forEach((tag) => {
    vector.push(book.tags.includes(tag) ? 1 : 0);
  });

  // Keywords: 1 if the book has the keyword, 0 otherwise
  allKeywords.forEach((keyword) => {
    vector.push(book.keywords.includes(keyword) ? 1 : 0);
  });

  return vector;
}

// Helper function: Build user preference vector based on their interactions
function buildUserPreferenceVector(
  userBooks: Book[],
  allGenres: string[],
  allTags: string[],
  allKeywords: string[]
): number[] {
  const vector: number[] = new Array(allGenres.length + allTags.length + allKeywords.length).fill(0);

  userBooks.forEach((book) => {
    allGenres.forEach((genre, i) => {
      if (book.genre.toLowerCase() === genre.toLowerCase()) {
        vector[i] += 1;
      }
    });
    allTags.forEach((tag, i) => {
      if (book.tags.includes(tag)) {
        vector[i + allGenres.length] += 1;
      }
    });
    allKeywords.forEach((keyword, i) => {
      if (book.keywords.includes(keyword)) {
        vector[i + allGenres.length + allTags.length] += 1;
      }
    });
  });

  // Normalize the vector by the number of user books to avoid bias from interaction volume
  return vector.map((val) => (userBooks.length > 0 ? val / userBooks.length : 0));
}

// Main recommendation function: Hybrid CF + CBF
export function getSmartRecommendations(userId: string | null, maxResults: number = 6): Book[] {
  const allBooks = getBooks();

  // Extract unique genres, tags, and keywords for vectorization
  const allGenres = [...new Set(allBooks.map((book) => book.genre))];
  const allTags = [...new Set(allBooks.flatMap((book) => book.tags))];
  const allKeywords = [...new Set(allBooks.flatMap((book) => book.keywords))];

  // Get user interactions from localStorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
  const userBooks = allBooks.filter((book) => [...wishlist, ...recentlyViewed].includes(book.id));

  // Default preferences for new users
  let userPrefs = {
    genres: ["Fiction", "Dystopian", "Fantasy"],
    authors: ["J.R.R. Tolkien", "George Orwell"],
    avgPages: 300,
    avgRating: 4,
    languages: ["English"],
    tags: ["classic", "adventure"],
    keywords: ["quest", "freedom"],
  };

  // If user has interactions, infer preferences
  if (userBooks.length > 0) {
    const genreCounts = userBooks.reduce((acc, book) => {
      acc[book.genre] = (acc[book.genre] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    userPrefs.genres = Object.entries(genreCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([genre]) => genre)
      .slice(0, 3);

    userPrefs.authors = [...new Set(userBooks.map((book) => book.author))].slice(0, 3);
    userPrefs.avgPages =
      userBooks.reduce((sum, book) => sum + book.pageCount, 0) / userBooks.length || 300;
    userPrefs.avgRating =
      userBooks.reduce((sum, book) => sum + book.averageRating, 0) / userBooks.length || 4;
    userPrefs.languages = [...new Set(userBooks.map((book) => book.language))].slice(0, 2);
    userPrefs.tags = userBooks
      .flatMap((book) => book.tags)
      .filter((tag, i, arr) => arr.indexOf(tag) === i)
      .slice(0, 5);
    userPrefs.keywords = userBooks
      .flatMap((book) => book.keywords)
      .filter((kw, i, arr) => arr.indexOf(kw) === i)
      .slice(0, 5);
  }

  // Build user preference vector for content-based filtering
  const userVector = buildUserPreferenceVector(userBooks, allGenres, allTags, allKeywords);

  // Build feature vectors for all books
  const bookVectors = allBooks.map((book) =>
    buildBookFeatureVector(book, allGenres, allTags, allKeywords)
  );

  // Content-Based Filtering: Calculate similarity between user and each book
  const contentScores = allBooks.map((book, i) => ({
    book,
    score: cosineSimilarity(userVector, bookVectors[i]),
  }));

  // Collaborative Filtering: Simulate user similarity (since we don't have multiple users, use wishlist as proxy)
  const userSimilarityScores: { book: Book; score: number }[] = [];
  allBooks.forEach((book) => {
    if (wishlist.includes(book.id)) return; // Skip books already in wishlist
    const similarBooks = allBooks.filter(
      (b) => wishlist.includes(b.id) && b.genre === book.genre
    );
    const cfScore =
      similarBooks.reduce((sum, b) => sum + b.averageRating, 0) / (similarBooks.length || 1);
    userSimilarityScores.push({ book, score: cfScore });
  });

  // Combine scores: Hybrid approach (60% CBF, 40% CF)
  const hybridScores = allBooks.map((book) => {
    const contentScore =
      contentScores.find((s) => s.book.id === book.id)?.score || 0;
    const collabScore =
      userSimilarityScores.find((s) => s.book.id === book.id)?.score || 0;
    const normalizedCollabScore = collabScore / 5; // Normalize to 0-1 scale (ratings are 0-5)
    const hybridScore = 0.6 * contentScore + 0.4 * normalizedCollabScore;

    // Add boosts for user preferences
    let finalScore = hybridScore;
    if (userPrefs.genres.includes(book.genre)) finalScore += 0.2;
    if (userPrefs.authors.includes(book.author)) finalScore += 0.2;
    if (userPrefs.languages.includes(book.language)) finalScore += 0.1;
    if (Math.abs(book.pageCount - userPrefs.avgPages) < 100) finalScore += 0.1;
    if (book.averageRating >= userPrefs.avgRating) finalScore += 0.1;

    return { book, score: finalScore };
  });

  // Sort by score and ensure diversity
  const sortedBooks = hybridScores.sort((a, b) => b.score - a.score);
  const diverseBooks: Book[] = [];
  const genreCount: Record<string, number> = {};

  for (const { book } of sortedBooks) {
    if (diverseBooks.length >= maxResults) break;
    if (wishlist.includes(book.id) || recentlyViewed.includes(book.id)) continue; // Skip already interacted books
    genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
    if (genreCount[book.genre] <= 2) { // Max 2 books per genre for diversity
      diverseBooks.push(book);
    }
  }

  return diverseBooks;
}

// Replace the existing getPersonalizedRecommendations with this updated version
// Replace the existing getPersonalizedRecommendations with this updated version
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
  let filteredBooks = books;

  // Apply filters based on preferences with optional chaining
  if (preferences.genre) {
    filteredBooks = filteredBooks.filter(
      (book) => book.genre.toLowerCase() === preferences.genre!.toLowerCase()
    );
  }
  if (preferences.author) {
    filteredBooks = filteredBooks.filter(
      (book) => book.author.toLowerCase() === preferences.author!.toLowerCase()
    );
  }
  if (preferences.language) {
    filteredBooks = filteredBooks.filter(
      (book) => book.language.toLowerCase() === preferences.language!.toLowerCase()
    );
  }
  if (preferences.country) {
    filteredBooks = filteredBooks.filter(
      (book) => book.countryOfOrigin.toLowerCase() === preferences.country!.toLowerCase()
    );
  }
  if (preferences.tags) {
    filteredBooks = filteredBooks.filter((book) =>
      preferences.tags!.every((tag) => book.tags.includes(tag))
    );
  }
  if (preferences.minRating) {
    filteredBooks = filteredBooks.filter(
      (book) => book.averageRating >= preferences.minRating!
    );
  }
  if (preferences.maxPages) {
    filteredBooks = filteredBooks.filter(
      (book) => book.pageCount <= preferences.maxPages!
    );
  }
  if (preferences.audience) {
    filteredBooks = filteredBooks.filter(
      (book) => book.targetAudience.toLowerCase() === preferences.audience!.toLowerCase()
    );
  }
  if (preferences.format) {
    filteredBooks = filteredBooks.filter(
      (book) => book.format.toLowerCase() === preferences.format!.toLowerCase()
    );
  }
  if (preferences.series) {
    filteredBooks = filteredBooks.filter(
      (book) => book.series?.toLowerCase() === preferences.series!.toLowerCase()
    );
  }
  if (preferences.minPrice) {
    filteredBooks = filteredBooks.filter(
      (book) => book.price >= preferences.minPrice!
    );
  }
  if (preferences.maxPrice) {
    filteredBooks = filteredBooks.filter(
      (book) => book.price <= preferences.maxPrice!
    );
  }
  if (preferences.keywords) {
    filteredBooks = filteredBooks.filter((book) =>
      preferences.keywords!.every((keyword) =>
        book.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
      )
    );
  }

  // Use the smart recommendation algorithm on the filtered books
  const allGenres = [...new Set(filteredBooks.map((book) => book.genre))];
  const allTags = [...new Set(filteredBooks.flatMap((book) => book.tags))];
  const allKeywords = [...new Set(filteredBooks.flatMap((book) => book.keywords))];

  const userBooks = filteredBooks.filter((book) =>
    [...JSON.parse(localStorage.getItem("wishlist") || "[]"), ...JSON.parse(localStorage.getItem("recentlyViewed") || "[]")].includes(book.id)
  );
  const userVector = buildUserPreferenceVector(userBooks, allGenres, allTags, allKeywords);
  const bookVectors = filteredBooks.map((book) =>
    buildBookFeatureVector(book, allGenres, allTags, allKeywords)
  );

  const scores = filteredBooks.map((book, i) => ({
    book,
    score: cosineSimilarity(userVector, bookVectors[i]),
  }));

  return scores
    .sort((a, b) => b.score - a.score)
    .map((item) => item.book)
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