import React, { Component } from 'react';

class ShelfChanger extends Component {
  state = {
    shelf: this.props.book.shelf || 'none',
  }

  handleChange = ({ target }) => {
    const { book, changeShelf } = this.props;
    const shelf = target.value;
    this.setState({ shelf });

    changeShelf(book, shelf);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.handleChange}>
          <option default disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

ShelfChanger.defaultProps = {
  book: {},
  changeShelf: () => {},
};

export default ShelfChanger;
