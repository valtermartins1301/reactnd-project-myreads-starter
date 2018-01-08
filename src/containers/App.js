import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { union } from 'lodash';
import SearchBooks from '../components/SearchBooks';
import ListBooks from '../components/ListBooks';
import * as BooksAPI from '../BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead: [],
    searchedBooks: [],
    isLoading: false,
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
    this.setState({ isLoading: true });

    const result = query ? await BooksAPI.search(query) : [];
    const searchedBooks = result.items || result;
    const {
      currentlyReading, wantToRead, read, books,
    } = this.state;
    const bookShelfs = [
      ...currentlyReading,
      ...wantToRead,
      ...read,
    ];
    const findOnBookShelf = searchedBook => bookShelfs.find(book => book.id === searchedBook.id);

    this.setState({
      searchedBooks: searchedBooks.map(book => findOnBookShelf(book) || book),
      books: union(books, searchedBooks),
      isLoading: false,
    });
  }

  updateBook = async (book, shelf) => {
    this.setState({ isLoading: true });
    const { books } = this.state;
    const { currentlyReading, wantToRead, read } = await BooksAPI.update(book, shelf);
    const currentlyReadingBooks = currentlyReading.map(this.findBook);
    const wantToReadBooks = wantToRead.map(this.findBook);
    const readBooks = read.map(this.findBook);

    this.setState({
      currentlyReading: currentlyReadingBooks,
      wantToRead: wantToReadBooks,
      read: readBooks,
      books: union(currentlyReadingBooks, wantToReadBooks, readBooks, books),
      isLoading: false,
    });
  }

  findBook = (id) => {
    const { books } = this.state;

    return books.find(book => book.id === id);
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
              read={this.state.read}
              onUpdate={this.updateBook}
              isLoading={this.state.isLoading}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.searchedBooks}
              onSearch={this.searchBook}
              onUpdate={this.updateBook}
              isLoading={this.state.isLoading}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
