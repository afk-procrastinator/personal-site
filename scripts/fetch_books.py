import sys
import requests
from typing import Optional, Dict, Any

GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes'

def fetch_book_info(isbn: str) -> Optional[Dict[str, Any]]:
    """Fetch book information from Google Books API."""
    try:
        response = requests.get(f"{GOOGLE_BOOKS_API_URL}?q=isbn:{isbn}&maxResults=1")
        data = response.json()

        if not data.get('items'):
            print(f"No book found for ISBN: {isbn}")
            return None

        book = data['items'][0]
        volume_info = book['volumeInfo']
        
        # Extract year from published date (YYYY-MM-DD or YYYY format)
        published_date = volume_info.get('publishedDate', '')
        year_published = int(published_date.split('-')[0]) if published_date else 0
        
        # Get the largest available cover image
        image_links = volume_info.get('imageLinks', {})
        cover_image = (
            image_links.get('extraLarge') or
            image_links.get('large') or
            image_links.get('medium') or
            image_links.get('thumbnail') or
            ''
        ).replace('&edge=curl', '')  # Remove the curled edge effect
        
        return {
            'isbn': isbn,
            'title': volume_info.get('title', 'Unknown Title'),
            'authors': volume_info.get('authors', ['Unknown Author']),
            'coverImage': cover_image,
            'yearPublished': year_published,
            'dateRead': ''  # This will need to be filled in manually
        }
    except Exception as e:
        print(f"Error fetching book with ISBN {isbn}: {e}")
        return None

def format_book_entry(book: Dict[str, Any]) -> str:
    """Format book information as a TypeScript object."""
    return f"""  {{
    isbn: "{book['isbn']}",
    title: "{book['title'].replace('"', '\\"')}", // {book['title']}
    authors: {str(book['authors']).replace("'", '"')},
    coverImage: "{book['coverImage']}",
    yearPublished: {book['yearPublished']},
    dateRead: "" // TODO: Fill in the date you read this book
  }}"""

def main():
    if len(sys.argv) < 2:
        print("Usage: python fetch_books.py ISBN1 [ISBN2 ISBN3 ...]")
        sys.exit(1)

    isbns = sys.argv[1:]
    print("Fetching book information...\n")
    
    successful_books = []
    for isbn in isbns:
        book = fetch_book_info(isbn)
        if book:
            print(format_book_entry(book) + ",\n")
            successful_books.append(book)

    print(f"Successfully fetched {len(successful_books)} out of {len(isbns)} books.")
    print("\nCopy the book entries above into src/content/books.ts")
    print("Don't forget to fill in the dateRead field for each book!")

if __name__ == '__main__':
    main() 