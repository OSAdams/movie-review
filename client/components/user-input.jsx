import React from 'react';

export default class ReviewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHash = this.handleHash.bind(this);
  }

  handleChange(event) {
    this.setState({ reviewValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state.reviewValue);
  }

  handleHash(event) {
    const userInputValue = this.props.userInputValue;
    window.location.hash = '#movie-reviews?title=' + userInputValue;
  }

  render() {
    return (
      <div className='review-container'>

        <form onSubmit={ this.handleSubmit }>

          <label className='label' htmlFor='review'>Write a review:</label>

          <br/ >

          <textarea className='review-input'
            type='text'
            name='review'
            placeholder='Enter your review here'
            onChange={ this.handleChange } />

          <div className='review-submit-container'>

            <span className='view-thread-link'
              onClick={ this.handleHash }>
                View Thread
              </span>

            <button className='submit-button'
              type='submit'>
              Submit Review
            </button>

          </div>

        </form>

      </div>
    );
  }
}
