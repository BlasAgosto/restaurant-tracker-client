/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RestaurantForm from './Rest_deets'
import { createRestaurant } from '../api/restaurantApi'

class CreateRestaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      thoughts: '',
      rating: '',
      cocktails: '',
      momWorthy: '',
      famWorthy: '',
      friendWorthy: ''
    }
  }

	handleChange = (event) => {
	  this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
	  event.preventDefault()

	  //   console.log('huehue')

	  const { user, msgAlert, history } = this.props
	  //   console.log(this.props)

	  createRestaurant(this.state, user)
	    .then((res) => history.push('/your-rests/' + res.data.restaurant._id))
	    .then(() =>
	      msgAlert({
	        heading: 'Restaurant Added!',
	        message: 'Nice work, go check out your restaurant.',
	        variant: 'success'
	      })
	    )
	    .catch((err) => {
	      msgAlert({
	        heading: 'Restaurant addition failed :(',
	        message: 'Something went wrong: ' + err.message,
	        variant: 'danger'
	      })
	    })
	}

	render () {
	  return (
	    <>
	      <h3>Add Restaurant info here!</h3>
	      <RestaurantForm
	        restaurant = {this.state}
	        handleSubmit={this.handleSubmit}
	        handleChange={this.handleChange}
	      />
	    </>
	  )
	}
}

export default withRouter(CreateRestaurant)
