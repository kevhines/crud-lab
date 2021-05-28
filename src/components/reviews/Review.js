import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, delReview } = this.props;

    return (
      <div>
        <li>
          {review.text}
        <button onClick={() => delReview(review.id)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
