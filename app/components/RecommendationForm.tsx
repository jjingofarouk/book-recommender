"use client";
import { useState } from "react";
import { getPersonalizedRecommendations, getBooks } from "../lib/books";

interface PreferenceState {
  genre?: string;
  country?: string;
  language?: string;
  audience?: string;
  author?: string;
  format?: string;
  series?: string;
  tags?: string[];
  keywords?: string[];
  minPrice?: number;
  maxPrice?: number;
  maxPages?: number;
  minRating?: number;
}

export function RecommendationForm({
  onSubmit,
}: {
  onSubmit: (books: any[]) => void;
}) {
  const [step, setStep] = useState(0); // Track the current question
  const [preferences, setPreferences] = useState<PreferenceState>({});
  const [loading, setLoading] = useState(false);

  // Extract unique options from books data
  const books = getBooks();
  const uniqueGenres = [...new Set(books.map((book) => book.genre))];
  const uniqueCountries = [...new Set(books.map((book) => book.countryOfOrigin))];
  const uniqueLanguages = [...new Set(books.map((book) => book.language))];
  const uniqueAudiences = [...new Set(books.map((book) => book.targetAudience))];
  const uniqueAuthors = [...new Set(books.map((book) => book.author))].slice(0, 10); // Limit to 10 for usability
  const uniqueFormats = [...new Set(books.map((book) => book.format))];
  const uniqueSeries = [...new Set(books.map((book) => book.series).filter((s) => s !== null))] as string[];
  const uniqueTags = [...new Set(books.flatMap((book) => book.tags))].slice(0, 10); // Limit to 10
  const uniqueKeywords = [...new Set(books.flatMap((book) => book.keywords))].slice(0, 10); // Limit to 10
  const priceRanges = [
    { label: "Under $10", min: 0, max: 10 },
    { label: "$10 - $15", min: 10, max: 15 },
    { label: "$15 - $20", min: 15, max: 20 },
    { label: "Over $20", min: 20, max: Infinity },
  ];
  const pageRanges = [
    { label: "Short (Under 200 pages)", max: 200 },
    { label: "Medium (200-400 pages)", max: 400 },
    { label: "Long (400-600 pages)", max: 600 },
    { label: "Epic (Over 600 pages)", max: Infinity },
  ];
  const ratingOptions = [
    { label: "At least 3 stars", value: 3 },
    { label: "At least 4 stars", value: 4 },
    { label: "4.5 stars or higher", value: 4.5 },
  ];

  // Define the questions and their options
  const questions = [
    {
      question: "What's your favorite genre?",
      key: "genre",
      options: uniqueGenres,
      type: "single",
    },
    {
      question: "Which country are you interested in?",
      key: "country",
      options: uniqueCountries,
      type: "single",
    },
    {
      question: "What language do you prefer to read in?",
      key: "language",
      options: uniqueLanguages,
      type: "single",
    },
    {
      question: "Who are you reading for?",
      key: "audience",
      options: uniqueAudiences,
      type: "single",
    },
    {
      question: "Do you have a favorite author?",
      key: "author",
      options: uniqueAuthors,
      type: "single",
    },
    {
      question: "What book format do you prefer?",
      key: "format",
      options: uniqueFormats,
      type: "single",
    },
    {
      question: "Are you looking for a book in a series?",
      key: "series",
      options: uniqueSeries,
      type: "single",
    },
    {
      question: "What themes or tags interest you?",
      key: "tags",
      options: uniqueTags,
      type: "multiple", // Allow multiple selections
    },
    {
      question: "What topics or keywords are you interested in?",
      key: "keywords",
      options: uniqueKeywords,
      type: "multiple",
    },
    {
      question: "What's your budget for this book?",
      key: "priceRange",
      options: priceRanges.map((range) => range.label),
      type: "single",
      mapTo: (value: string) => {
        const range = priceRanges.find((r) => r.label === value);
        return { minPrice: range?.min, maxPrice: range?.max };
      },
    },
    {
      question: "How long do you want the book to be?",
      key: "maxPages",
      options: pageRanges.map((range) => range.label),
      type: "single",
      mapTo: (value: string) => {
        const range = pageRanges.find((r) => r.label === value);
        return { maxPages: range?.max };
      },
    },
    {
      question: "What's the minimum rating you're looking for?",
      key: "minRating",
      options: ratingOptions.map((opt) => opt.label),
      type: "single",
      mapTo: (value: string) => {
        const opt = ratingOptions.find((o) => o.label === value);
        return { minRating: opt?.value };
      },
    },
  ];

  const handleAnswer = (key: string, value: string | string[], mapTo?: (value: string) => Partial<PreferenceState>) => {
    if (mapTo) {
      const mappedValues = mapTo(value as string);
      setPreferences((prev) => ({ ...prev, ...mappedValues }));
    } else {
      setPreferences((prev) => ({ ...prev, [key]: value }));
    }
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSkip = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const books = getPersonalizedRecommendations(preferences);
    onSubmit(books);
    setLoading(false);
  };

  const currentQuestion = questions[step];

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 rounded-lg glassmorphic bg-[var(--background)] shadow-lg">
      <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
        Let’s Find Your Perfect Book! ({step + 1}/{questions.length})
      </h2>
      <div className="w-full text-center">
        <p className="text-lg text-[var(--foreground)] mb-4">
          {currentQuestion.question}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(currentQuestion.key, option, currentQuestion.mapTo)}
              className="px-4 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-opacity-80 transition-all duration-200 font-medium"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleSkip}
            className="text-[var(--foreground)] underline hover:text-opacity-80 transition-all duration-200"
          >
            Skip this question
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-opacity-80 transition-all duration-200 font-medium"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Recommendations Now"}
          </button>
        </div>
      </div>
    </div>
  );
}