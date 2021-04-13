import React from 'react';

const styles = {
  infoContainer: {
    background: '#3850A5'
  },
  poster: {
    width: '50%'
  },
  styles: {

  }
};

class DisplayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?t=${this.props.userInputValue}&apikey=67b9bb43`)
      .then(res => res.json())
      .then(movie => this.setState({ movie }));
  }

  render() {
    if (!this.state.movie) return null;
    const { title, poster, plot } = this.state.movie;
    return (
      <div className='movie-background' styles={ styles.infoContainer }>
        <span><img src={poster} alt={title} styles={ styles.poster } /></span>
        <span><h1>{ title }</h1></span>
        <div>
          <p>Plot:</p>
          <p>{ plot }</p>
        </div>
      </div>
    );
  }
}

export default DisplayMovie;
