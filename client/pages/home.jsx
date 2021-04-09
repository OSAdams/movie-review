import React from 'react';

const styles = {
  container: {
    width: '375px'
  }
};

export default function Home(props) {
  return (
      <div className='container' styles={ styles.container }>
        <img src='/images/logo.png' alt='Logo'></img>
      </div>
  );
}
