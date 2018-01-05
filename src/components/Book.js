import React from 'react';
import SelfChanger from './SelfChanger';

function getAuthors(book) {
  return book.authors.toString();
}

function Book({ book, changeShelf }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
        <SelfChanger book={book} changeShelf={changeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{getAuthors(book)}</div>
    </div>
  );
}

Book.defaultProps = {
  book: {},
  changeShelf: () => {},
};


export default Book;
