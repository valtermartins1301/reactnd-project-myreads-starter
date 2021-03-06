import React from 'react';
import ShelfChanger from './ShelfChanger';

function getAuthors({ authors = [] }) {
  return authors.toString();
}
function getThumbnail({ imageLinks = {} }) {
  return imageLinks.thumbnail;
}

function Book({ book, changeShelf }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${getThumbnail(book)})` }} />
        <ShelfChanger book={book} changeShelf={changeShelf} />
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
