import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, delRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => delRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
