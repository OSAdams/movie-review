import React from 'react';

const styles = {
  movieContainer: {
    background: '#BEBBD4'
  },
  infoContainer: {
    background: '#3850A5',
    width: '95%',
    display: 'flex',
    paddingTop: '1rem',
    paddingLeft: '0.5rem',
    margin: 'auto',
    color: '#F5F5F5'
  },
  col: {
    paddingTop: '2rem',
    width: '50%'
  },
  txtCenter: {
    textAlign: 'center',
    color: '#F5F5F5',
    fontSize: '36px'
  },
  txtBold: {
    fontWeight: 'bold',
    paddingBottom: '5px'
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
    const { Title, Poster, Plot } = this.state.movie;
    return (
      <div className='movie-container' style={ styles.movieContainer }>
        <div className='movie-col'>
          <div className='movie-row-1' style={ styles.infoContainer }>
            <div className='movie-poster' style={ styles.col }>
              <img src={Poster} alt={Title} style={ styles.poster } />
            </div>
            <div className='movie-information' style={ styles.col }>
              <h3 style={ styles.txtCenter }>{Title}</h3>
            </div>
          </div>
          <div className='movie-row-2' style={ styles.infoContainer }>
            <div className='movie-plot'>
              <p style={ styles.txtBold }>Plot:</p>
              <p style={ styles.txtReg }>{Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayMovie;
