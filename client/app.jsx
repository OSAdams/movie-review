import React from 'react';
import Home from './pages/home';
import Navigation from './components/navigation';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
      </>
    );
  }
}
