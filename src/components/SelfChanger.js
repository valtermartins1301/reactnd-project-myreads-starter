import React, { Component } from 'react';

class SelfChanger extends Component {
  state = {
    shelf: 'none',
  }

  handleChange = ({ target }) => {
    const { book, changeShelf } = this.props;
    const shelf = target.value;
    this.setState({ shelf });

    changeShelf(book, shelf);
  }

  render() {
    return (
      <select value={this.state.shelf} onChange={this.handleChange}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

SelfChanger.defaultProps = {
  book: {},
  changeShelf: () => {},
};

export default SelfChanger;
