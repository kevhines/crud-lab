import React, { Component } from 'react';
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant= {this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} delRestaurant={this.props.delRestaurant} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addRestaurant: (restaurantText) => dispatch({ type: 'ADD_RESTAURANT', text: restaurantText }),
      delRestaurant: (restaurantId) => dispatch({type: 'DEL_RESTAURANT', id: restaurantId})
    };
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer);
