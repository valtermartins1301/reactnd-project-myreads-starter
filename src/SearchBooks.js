import React from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import BooksGrid from './BooksGrid';

function NotFound() {
  return (
    <p className="search-books-no-results">
      Nenhum livro encontrado...
    </p>
  );
}

function SearchResult({ books, changeShelf }) {
  if (books.length > 0) {
    return (
      <BooksGrid
        books={books}
        changeShelf={changeShelf}
      />
    );
  }

  return <NotFound />;
}

function SearchBooks({ books, onSearch, onUpdate }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            placeholder="Search by title or author"
            onChange={event => onSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <SearchResult
          books={books}
          changeShelf={onUpdate}
        />
      </div>
    </div>
  );
}

SearchBooks.defaultProps = {
  books: [],
  onSearch: () => {},
  onUpdate: () => {},
};

export default SearchBooks;
