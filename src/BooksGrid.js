import React from 'react';
import Book from './Book';

function BooksGrid({ books, changeShelf }) {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book book={book} changeShelf={changeShelf} />
        </li>
      ))}
    </ol>
  );
}

BooksGrid.defaultProps = {
  books: [],
  changeShelf: () => {},
};

export default BooksGrid;
