import React from 'react';

const styles = {
  nav: {
    position: 'static',
    background: '#49208C',
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#F5F5F5'
  },
  icon: {
    color: '#F5F5F5',
    position: 'absolute',
    fontSize: '24px',
    top: '7px',
    left: '10px'
  }
};

export default function Navigation(props) {
  return (
      <header className='header' style={ styles.nav }>

        <div className='menu-icon' style={ styles.icon }>

          <i className='fas fa-bars'></i>

        </div>

        <div className='title' style={ styles.title }>

          <h2>Movie Review</h2>

        </div>

      </header>
  );
}
