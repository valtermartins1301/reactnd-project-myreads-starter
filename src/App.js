import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { union } from 'lodash';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead: [],
    searchedBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
      const wantToRead = books.filter(book => book.shelf === 'wantToRead');
      const read = books.filter(book => book.shelf === 'read');

      this.setState({
        currentlyReading,
        wantToRead,
        read,
        books,
      });
    });
  }

  searchBook = async (query) => {
    const { books } = this.state;
    const searchedBooks = await BooksAPI.search(query) || [];

    this.setState({
      searchedBooks,
      books: union(books, searchedBooks),
    });
  }

  updateBook = async (book, shelf) => {
    const { currentlyReading, wantToRead, read } = await BooksAPI.update(book, shelf);

    this.setState({
      currentlyReading: currentlyReading.map(this.findBook),
      wantToRead: wantToRead.map(this.findBook),
      read: read.map(this.findBook),
    });
  }

  findBook = (id) => {
    const { books } = this.state;

    return books.find(book => book.id === id);
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
