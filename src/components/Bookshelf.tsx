import * as React from 'react';
import { motion } from 'framer-motion';
import { Book } from './Book';
import { books } from '../content/books';
import { Link } from 'react-router-dom';

export function Bookshelf() {
  // Group books by year read
  const booksByYear = books.reduce((acc, book) => {
    const year = new Date(book.dateRead).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(book);
    return acc;
  }, {} as Record<number, typeof books>);

  // Sort years in descending order
  const years = Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-ctp-base text-ctp-text p-8">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-ctp-subtext1 hover:text-ctp-text transition-colors"
        >
          <span className="mr-2">←</span>
          Back home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.h1 
          className="text-5xl font-semibold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Bookshelf
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <blockquote className="border-l-2 border-ctp-surface0 pl-6 text-ctp-subtext0 italic">
            "The universe will express itself as long as somebody will be able to say, 'I read, therefore it writes.'"
            <footer className="mt-2 text-ctp-subtext1 not-italic">
              - If On a Winter's Night a Traveler, Italo Calvino
            </footer>
          </blockquote>

          <p className="text-ctp-subtext0">
            I think you can tell a lot about a person by what they read. So, in the name of transparency, here are all the things I read - books, long form blog posts/essays, and other things. This currently only has 2024, but I'll be adding more as I read them (and 2023, when I have the chance).
          </p>
        </motion.div>
      </div>

      {/* Books by Year */}
      <div className="max-w-7xl mx-auto">
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: yearIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="text-2xl font-medium">{year}</h2>
              <div className="flex-1 h-px bg-ctp-surface0" />
              <span className="text-ctp-subtext0">
                {booksByYear[year].length} things
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              {booksByYear[year]
                .sort((a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime())
                .map((book) => (
                  <Book key={book.isbn} book={book} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 