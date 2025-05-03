// components/BookDetailsClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BookCard } from './BookCard';
import type { Book } from '@/lib/books';

interface BookDetailsClientProps {
  book: Book;
  relatedBooks: Book[];
}

export default function BookDetailsClient({ 
  book, 
  relatedBooks 
}: BookDetailsClientProps) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    
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
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            {/* More skeleton loading */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto glassmorphic p-8">
        {/* Rest of your existing JSX remains exactly the same */}
        {/* ... */}
      </div>
    </div>
  );
}