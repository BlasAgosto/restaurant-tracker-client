/* eslint-disable no-tabs */
// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-tabs */
// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// import RestForm from './RestForm'

// import { createRestaurant } from '../../api/createRestaurants'

// class CreateRestaurant extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       name: '',
//       thoughts: ''
//     }
//   }

// 	handleChange = (event) => {
// 	  // The event.target of this event will be an input element
// 	  // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
// 	  this.setState({ [event.target.name]: event.target.value })
// 	}

// 	handleSubmit = (event) => {
// 	  event.preventDefault()

// 	  const { user, msgAlert, history } = this.props

// 	  createRestaurant(this.state, user)
// 	    // .then((res) => history.push('/add-rests/' + res.data.movie._id))
// 	    .then((res) => history.push('/add-rests/' + res.data))
// 	    .then(() =>
// 	      msgAlert({
// 	        heading: 'Restaurant Added!',
// 	        message: 'You can see this and the rest of your restaurants in My Restaurants.',
// 	        variant: 'success'
// 	      })
// 	    )
// 	    .catch((err) => {
// 	      msgAlert({
// 	        heading: 'Restaurant addition failed :(',
// 	        message: 'Something went wrong: ' + err.message,
// 	        variant: 'danger'
// 	      })
// 	    })
// 	}

// 	render () {
// 	  return (
// 	    <>
// 	      <h3>Add Restaurant to Tracker!</h3>
// 	      <RestForm
// 	        restaurant={this.state}
// 	        handleSubmit={this.handleSubmit}
// 	        handleChange={this.handleChange}
// 	      />
// 	    </>
// 	  )
// 	}
// }

// export default withRouter(CreateRestaurant)
