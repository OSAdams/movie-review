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
  },
  labelTxt: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  botPad: {
    paddingBottom: '3px'
  },
  defaultFont: {
    fontSize: '12px'
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
    const { Title, Poster, Plot, Genre } = this.state.movie;
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

                <div className='movie-genre' styles={ Object.assign({},
                  styles.botPad,
                  styles.dataRow) }>

                  <span className='label' style={ styles.labelTxt }>Genre:</span>

                  <span className='value' style={ styles.defaultFont }>{Genre}</span>

                </div>

              </div>

            </div>

          </div>

          <div className='movie-information-2' style={ styles.infoContainer }>

            <div className='movie-plot'>

              <p style={ Object.assign({}, styles.labelTxt, styles.botPad) }>Plot:</p>

              <p>{Plot}</p>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DisplayMovie;
