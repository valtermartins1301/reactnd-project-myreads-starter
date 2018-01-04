import React from 'react';
import SelfChanger from './SelfChanger';

function Book({ book, changeShelf }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
        <div className="book-shelf-changer">
          <SelfChanger book={book} changeShelf={changeShelf} />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{() => book.authors.toString()}</div>
    </div>
  );
}

Book.defaultProps = {
  book: {},
  changeShelf: () => {},
};


export default Book;
