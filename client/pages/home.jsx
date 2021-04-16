import React from 'react';
import SearchString from '../lib/search-string';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userInputValue = SearchString(this.state.searchValue);
    window.location.hash = '#search-results?title=' + userInputValue;
  }

  render() {
    return (
      <div className='search-container'>

        <img src='/images/logo.png' alt='Logo' className='logo'></img>

          <div className='search-column'>

            <p className='home-font'>Search by Title!</p>

            <form className='search-column' onSubmit={ this.handleSubmit }>

              <input className='search-box'
                type='search'
                placeholder='Movie Name'
                onChange={ this.handleChange }/>

              <button className='search-button' type='submit'>
                Search
              </button>

            </form>

          </div>

      </div>
    );
  }
}
