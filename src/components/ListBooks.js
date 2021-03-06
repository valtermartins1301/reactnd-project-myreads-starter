import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Progress from './Progress';

function ListBooks({
  currentlyReading, wantToRead, read, onUpdate, isLoading,
}) {
  return (
    <div className="list-books">
      {isLoading &&
        <Progress />
      }
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          books={currentlyReading}
          shelfTitle="Currently Reading"
          changeShelf={onUpdate}
        />
        <Bookshelf
          books={wantToRead}
          shelfTitle="Want To Read"
          changeShelf={onUpdate}
        />
        <Bookshelf
          books={read}
          shelfTitle="Read"
          changeShelf={onUpdate}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

ListBooks.defaultProps = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
  onUpdate: () => {},
  isLoading: false,
};

export default ListBooks;
