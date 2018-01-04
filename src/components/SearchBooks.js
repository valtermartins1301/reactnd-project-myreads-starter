import React from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import BooksGrid from './BooksGrid';
import Progress from './Progress';

function NoResults() {
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

  return <NoResults />;
}

function SearchBooks({
  books, onSearch, onUpdate, isLoading,
}) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <DebounceInput
          minLength={2}
          debounceTimeout={400}
          placeholder="Type here to search by title or author"
          onChange={event => onSearch(event.target.value)}
        />
        {isLoading &&
          <Progress />
        }
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
  isLoading: false,
};

export default SearchBooks;
