import * as React from 'react';
import { motion } from 'framer-motion';
import { type BookEntry } from '../content/books';

interface BookProps {
  book: BookEntry;
}

export function Book({ book }: BookProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  // Get higher quality cover image
  const coverImage = book.coverImage?.replace('zoom=1', 'zoom=2')
    .replace('&edge=curl', '')
    .replace('&source=gbs_api', '')
    .replace('http://', 'https://');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col bg-ctp-base rounded-xl overflow-hidden group"
    >
      {/* Cover image */}
      <div className="h-[400px] bg-ctp-base">
        {coverImage ? (
          <img
            src={coverImage}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-contain rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-ctp-base text-ctp-subtext0 p-4 rounded-t-xl">
            <div className="text-4xl mb-4">📚</div>
            <p>No cover available</p>
          </div>
        )}
      </div>
      
      {/* Book info */}
      <div className="p-4 bg-ctp-surface0 group-hover:bg-ctp-surface1 transition-colors duration-200 rounded-b-xl">
        <h3 className="text-lg font-medium text-ctp-text mb-2">
          {book.title}
        </h3>
        <p className="text-sm text-ctp-subtext0 mb-2">
          {book.authors.join(', ')}
        </p>
        <p className="text-sm text-ctp-subtext1">
          Read in {formatDate(book.dateRead)}
        </p>
      </div>
    </motion.div>
  );
} 