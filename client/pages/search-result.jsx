import React from 'react';

const styles = {
  movieContainer: {
    background: '#BEBBD4',
    paddingTop: '5px'
  },
  infoContainer: {
    background: '#3850A5',
    width: '95%',
    margin: 'auto',
    color: '#F5F5F5'
  },
  row1: {
    width: '50%',
    padding: '0 5px',
    paddingTop: '2px'
  },
  poster: {
    paddingTop: '5px'
  },
  movieRow1: {
    display: 'flex'
  },
  dataRow: {
    display: 'flex',
    justifyContent: 'space-between'
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
    const {
      Title,
      Poster,
      Plot,
      Genre,
      Rated,
      Released,
      Runtime,
      Director,
      BoxOffice,
      Ratings
    } = this.state.movie;
    return (
      <div className='movie-container' style={ styles.movieContainer }>

        <div className='movie-information' style={ styles.infoContainer }>

          <div className='movie-row-1' style={ styles.movieRow1 }>

            <div className='movie-poster' style={ Object.assign({},
              styles.row1,
              styles.poster) }>

              <img src={Poster} alt={Title} />

            </div>

            <div className='movie-row-1' style={ styles.row1 }>

              <div className='movie-title'>

                <h3>{Title}</h3>

              </div>

              <div className='movie-data-col'>

                <div className='movie-row'>

                  <span className='label'>Genre:</span>

                  <span className='value'>{Genre}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Rated:</span>

                  <span className='value'>{Rated}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Release:</span>

                  <span className='value'>{Released}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Director:</span>

                  <span className='value'>{Director}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Runtime:</span>

                  <span className='value'>{Runtime}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Box Office:</span>

                  <span className='value'>{BoxOffice}</span>

                </div>

                <div className='movie-row'>

                  <span className='label'>Box Office:</span>

                  <span className='value'>{BoxOffice}</span>

                </div>

              </div>

            </div>

          </div>

          <div className='movie-information-2' style={ styles.infoContainer }>

            <div className='movie-row'>

              <div>

                <span className='label'>IMDB:</span>

                <span className='value'>{Ratings[0].Value}</span>

              </div>

              <div>

                <span className='label'>RTM:</span>

                <span className='value'>{Ratings[1].Value}</span>

              </div>

              <div>

                <span className='label'>Metacritic:</span>

                <span className='value'>{Ratings[2].Value}</span>

              </div>

            </div>

            <div className='movie-plot'>

              <p className='label'>Plot:</p>

              <p>{Plot}</p>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DisplayMovie;
