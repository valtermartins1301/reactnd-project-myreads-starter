import React from 'react';
import BooksGrid from './BooksGrid';

function Bookshelf({ books, shelfTitle, changeShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} changeShelf={changeShelf} />
      </div>
    </div>
  );
}

Bookshelf.defaultProps = {
  books: [],
  shelfTitle: '',
  changeShelf: () => {},
};

export default Bookshelf;
