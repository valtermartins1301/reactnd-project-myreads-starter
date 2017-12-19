import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
//import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    showSearchPage: false,
  }

  onChangeSearch(value) {
    this.setState({ showSearchPage: value });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onChangeSearch={(value) => this.onChangeSearch(value)}/>
        ) : (
          <ListBooks onChangeSearch={(value) => this.onChangeSearch(value)}/>
        )}
      </div>
    )
  }
}

export default BooksApp
