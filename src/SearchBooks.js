import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
  }

  render() {
    const { onSearch, books } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              placeholder="Search by title or author"
              onChange={event => onSearch(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
