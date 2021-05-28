import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {

    let filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews delReview={this.props.delReview} reviews={filteredReviews} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addReview: (review) => dispatch({ type: 'ADD_REVIEW', review: review }),
      delReview: (reviewID) => dispatch({type: 'DEL_REVIEW', id: reviewID})
    };
}

const mapStateToProps = (state) => {
  return {reviews: state.reviews}
}




export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer);
