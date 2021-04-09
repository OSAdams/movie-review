import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    marginTop: '1rem'
  },
  fontStyles: {
    color: '#222222',
    fontSize: '24px'
  },
  searchBox: {
    background: '#6774ED',
    border: 'none',
    borderRadius: '2px',
    height: '35px'
  }
};

export default function Home(props) {
  return (
      <div className='container' style={ styles.container }>
        <img src='/images/logo.png' alt='Logo' style={ styles.logo }></img>
        <div className='search'>
          <p style={ styles.fontStyles }>Search by Title</p>
          <input type='search' placeholder='Search Movie Title' style={ styles.searchBox }></input>
        </div>
      </div>
  );
}
