import React from 'react';
import Home from './pages/home';
import Navigation from './components/navigation';
import DisplayMovie from './pages/search-result';
import parseRoute from './lib/parse-route.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'search-results') {
      const title = route.params.get('title');
      return <DisplayMovie userInputValue={title} />;
    }
  }

  render() {
    return (
      <>
        <Navigation />
        { this.renderPage() }
      </>
    );
  }
}
