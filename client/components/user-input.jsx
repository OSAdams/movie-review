import React from 'react';

export default class ReviewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviewValue: '' };
  }

  handleChange(event) {
    this.setState = { reviewValue: event.target.value };
  }

  render() {
    return (
      <div className='review-container'>

        <form>

          <label className='label' htmlFor='review'>Write a review:</label>

          <br/ >

          <input className='review-input'
            type='text'
            id='review'
            name='review'
            placeholder='Enter your review here' />

        </form>

      </div>
    );
  }
}
