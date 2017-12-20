import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';
import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
  state = {
    books: [],
    searchedBooks: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      const searchedBooks = Array.isArray(books) ? books : [];
      this.setState({ searchedBooks });
    });
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.searchedBooks}
            onSearch={this.searchBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
