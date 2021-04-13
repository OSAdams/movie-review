import React from 'react';

const styles = {
  container: {
    background: '#BEBBD4'
  },
  infoContainer: {
    background: '#3850A5',
    width: '95%',
    display: 'flex',
    padding: '1rem 0.5rem',
    margin: 'auto'
  },
  col: {
    paddingTop: '2rem',
    width: '50%'
  },
  txtCenter: {
    textAlign: 'center',
    color: '#F5F5F5'
  },
  poster: {
    width: '100%'
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
      .then(movie => {
        this.setState({ movie }, () => {
          // eslint-disable-next-line no-console
          console.log(this.state.movie);
        });
      });
  }

  render() {
    if (!this.state.movie) return null;
    const { Title, Poster } = this.state.movie;
    return (
      <div className='container' style={ styles.container }>
        <div className='movie-container'>
          <div className='movie-row-1' style={ styles.infoContainer }>
            <div className='movie-poster' style={ styles.col }>
              <img src={Poster} alt={Title} style={ styles.poster } />
            </div>
            <div className='movie-information' style={ styles.col }>
              <h3 style={ styles.txtCenter }>{Title}</h3>
            </div>
          </div>
          <div className='movie-row-2'>

          </div>
        </div>
      </div>
    );
  }
}

export default DisplayMovie;
