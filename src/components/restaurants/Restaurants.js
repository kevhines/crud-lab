import React, { Component } from 'react';
import Restaurant from './Restaurant'


class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} delRestaurant={this.props.delRestaurant} restaurant={restaurant}/>)
  }



  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;