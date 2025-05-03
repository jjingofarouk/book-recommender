// components/BookDetailsClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BookCard } from './BookCard';
import type { Book } from '../lib/books';

export default function BookDetailsClient({ 
  book,
  relatedBooks 
}: { 
  book: Book;
  relatedBooks: Book[];
}) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Track when component mounts on client

    const updateRecentlyViewed = () => {
      try {
        const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        if (!viewed.includes(book.id)) {
          const updated = [book.id, ...viewed].slice(0, 5);
          localStorage.setItem('recentlyViewed', JSON.stringify(updated));
        }
      } catch (error) {
        console.error('Error updating recently viewed:', error);
      }
    };

    updateRecentlyViewed();
  }, [book.id]);

  const handleAddToWishlist = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (!wishlist.includes(book.id)) {
        const updated = [...wishlist, book.id];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        alert('Added to wishlist!');
      } else {
        alert('This book is already in your wishlist!');
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      alert('Failed to update wishlist');
    }
  };

  if (!isClient) {
    return (
      <div className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto p-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto glassmorphic p-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {book.coverImage && (
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              width={200}
              height={300}
              className="rounded object-cover"
              priority
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">{book.title}</h1>
            <p className="text-lg text-[var(--gray-light)] mb-4">by {book.author}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-[var(--gray-light)]">Genre</p>
                <p className="text-[var(--foreground)]">{book.genre}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--gray-light)]">Language</p>
                <p className="text-[var(--foreground)]">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--gray-light)]">Country</p>
                <p className="text-[var(--foreground)]">{book.countryOfOrigin}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--gray-light)]">Published</p>
                <p className="text-[var(--foreground)]">{book.publicationYear}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-[var(--gray-light)]">Description</p>
              <p className="text-[var(--foreground)] mt-2">{book.description}</p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[var(--background)] px-3 py-1 rounded-full">
                <span className="text-[var(--foreground)]">${book.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-[var(--foreground)]">{book.averageRating.toFixed(1)}/5</span>
              </div>
              <div className="text-[var(--gray-light)] text-sm">
                {book.readingTime} read
              </div>
            </div>

            <button
              onClick={handleAddToWishlist}
              className="w-full sm:w-auto px-6 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Add to Wishlist
            </button>

            {book.culturalNotes && (
              <div className="mt-6 p-4 bg-[var(--background-secondary)] rounded-lg">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Cultural Context</h3>
                <p className="text-[var(--foreground)]">{book.culturalNotes}</p>
              </div>
            )}
          </div>
        </div>

        {book.awards.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Awards</h3>
            <div className="flex flex-wrap gap-2">
              {book.awards.map((award, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[var(--background-secondary)] text-[var(--foreground)] rounded-full text-sm"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        )}

        {book.reviews.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Reviews</h3>
            <div className="space-y-4">
              {book.reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-[var(--gray-light)] rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--background-secondary)] flex items-center justify-center">
                      <span className="text-[var(--foreground)]">
                        {review.user.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium text-[var(--foreground)]">{review.user}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[var(--foreground)]">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedBooks.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}