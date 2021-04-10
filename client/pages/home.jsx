import React from 'react';
import SearchString from '../components/SearchString';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    marginTop: '2.5rem'
  },
  fontStyles: {
    color: '#222222',
    fontSize: '24px'
  },
  searchColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchBox: {
    background: '#6774ED',
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0px 3px rgba(0, 0, 0, 0.1)',
    height: '35px',
    width: '50%',
    outline: 'none',
    color: '#F5F5F5',
    textAlign: 'center'
  },
  searchButton: {
    background: '#3850A5',
    outline: 'none',
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0px 3px rgba(0, 0, 0, 0.1)',
    height: '35px',
    width: '50%',
    color: '#F5F5F5',
    textAlign: 'center',
    marginTop: '1rem'
  }
};

class Home extends React.Component {
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
    const searchStr = SearchString(this.state.searchValue);
    let movieObj = {};
    fetch(`http://www.omdbapi.com/?t=${searchStr}&apikey=67b9bb43`)
      .then(res => res.json())
      .then(json => {
        movieObj = json;
        // eslint-disable-next-line no-console
        console.log(movieObj);
      });
  }

  render() {
    return (
      <div className='container'
        style={ styles.container }>

        <img src='/images/logo.png' alt='Logo' style={ styles.logo }></img>

          <div className='search' style={ styles.searchColumn }>

            <p style={ styles.fontStyles }>Search by Title!</p>

            <form onSubmit={ this.handleSubmit } style={ styles.searchColumn }>

              <input type='search' placeholder='Movie Name' onChange={ this.handleChange } style={ styles.searchBox } />

              <button type='submit' style={ styles.searchButton }>
                Search
              </button>

            </form>

          </div>

      </div>
    );
  }
}

export default Home;
