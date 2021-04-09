import React from 'react';

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
    height: '35px',
    width: '50%',
    color: '#F5F5F5',
    textAlign: 'center',
    marginTop: '1rem'
  }
};

export default function Home(props) {

  return (
      <div className='container' style={ styles.container }>
        <img src='/images/logo.png' alt='Logo' style={ styles.logo }></img>
        <div className='search' style={ styles.searchColumn }>
          <p style={ styles.fontStyles }>Search by Title</p>
          <input type='search' placeholder='Movie Name' style={ styles.searchBox }></input>
          <button type='submit' style={ styles.searchButton }>Search</button>
        </div>
      </div>
  );
}
