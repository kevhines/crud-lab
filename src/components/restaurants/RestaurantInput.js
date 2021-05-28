import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)
    this.state = {text:  ""}

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }



  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.state.text} name="text"/>

        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
