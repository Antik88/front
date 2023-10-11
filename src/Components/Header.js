import React from 'react';
import "../Styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.query 
    };
  }

  handleBtnClick = () => {
    this.props.back();
    this.handleClearClick();
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleSearch(this.state.searchQuery);
    }
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleClearClick = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className='header'>
        <button className='header__btn' onClick={this.handleBtnClick}>
          <h5 className='header__Logo'>FilmFearcher</h5>
        </button>
        <div className='header__inputContainer'>
          <input
            className='header__input'
            type="text"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          {this.state.searchQuery && (
            <button className='header__clearButton' onClick={this.handleClearClick}>
              Clear
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default Header;