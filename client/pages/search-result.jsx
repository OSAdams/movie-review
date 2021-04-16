import React from 'react';
import ReviewInput from '../components/user-input';

class DisplayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?t=${this.props.userInputValue}&apikey=67b9bb43`)
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
      Ratings,
      Awards
    } = this.state.movie;
    const imdbRating = 'IMDB: ';
    const rtmRating = 'RTM: ';
    const metaRating = 'Metacritic: ';
    return (
      <div className='movie-container'>

        <div className='movie-info-container'>

          <div className='movie-title'>

            <h3>{Title}</h3>

          </div>

          <div className='movie-column'>

            <div className='movie-poster'>

              <img src={Poster} alt={Title} />

            </div>

            <div className='movie-info'>

              <div className='movie-data-col'>

                <div>

                  <span className='label'>Genre:</span>

                  <div className='value-1'>{Genre}</div>

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

                <div className='movie-row-3'>

                  <span className='label'>Awards:</span>

                  <p className='value'>{Awards}</p>

                </div>

              </div>

            </div>

          </div>

          <div className='movie-info-container'>

            <div className='movie-row-2'>

              <div>

                <span className='label'>{ imdbRating }</span>

                <span className='value'>{Ratings[0].Value}</span>

              </div>

              <div>

                <span className='label'>{ rtmRating }</span>

                <span className='value'>{Ratings[1].Value}</span>

              </div>

              <div>

                <span className='label'>{ metaRating }</span>

                <span className='value'>{Ratings[2].Value}</span>

              </div>

            </div>

            <div className='movie-plot'>

              <p className='label'>Plot:</p>

              <p>{Plot}</p>

            </div>

          </div>

          <ReviewInput />

        </div>

      </div>
    );
  }
}

export default DisplayMovie;
