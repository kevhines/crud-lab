import React, { Component } from 'react';


class ReviewInput extends Component {

  constructor(props) {
    super(props)
    this.state = {text:  ""}

  }

  handleSubmit(e) {
    e.preventDefault()
    let newReview = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(newReview)
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

export default ReviewInput;
