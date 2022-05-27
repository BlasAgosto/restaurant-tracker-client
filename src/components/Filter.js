/* eslint-disable indent */
/* eslint-disable no-tabs */
// import { Button } from 'bootstrap'
import React, { Component } from 'react'
// import Filter from './Filter'
// import { Link } from 'react-router-dom'
import { allRestaurant } from '../api/restaurantApi'
// import Delete from './Delete'
// import UpdateRestaurant from './UpdateRestaurant'

class IndexRestaurant extends Component {
	constructor (props) {
		super(props)

		this.state = {
			restaurant: null
		}
	}

	componentDidMount () {
		const { user, msgAlert } = this.props
		allRestaurant(user)
			.then((res) => this.setState({ restaurant: res.data.restaurant }))
			// .then(console.log(this.state))
			.then(() =>
				msgAlert({
					heading: 'Index success',
					message: 'Here\'re the all the restaurants you\'ve added',
					variant: 'success'
				})
			)
			.catch((err) =>
				msgAlert({
					heading: 'Index failed :(',
					message: 'Something went wrong: ' + err.message,
					variant: 'danger'
				})
			)
	}

	render () {
		const { restaurant } = this.state
		// const { user, msgAlert } = this.props
		if (restaurant === null) {
			return 'Loading...'
		}

		let restaurantJsx
		if (restaurant.length === 0) {
			restaurantJsx = 'No restaurants added, go eat somewhere'
		} else {
			// console.log('index time baby!')
			// console.log(restaurant)
			restaurantJsx = restaurant.map((restaurant) => (
				<div key={restaurant._id}>
					<ul>
						<li>
							<h3>Restaurant: {restaurant.name}</h3>
							{/* <br></br> */}
							Summary: {restaurant.thoughts}
							<br></br>
							{/* Restaurant._id {restaurant._id}
					<br></br> */}
							Rating, {restaurant.rating} out of 5<br></br>
							Any good drinks? {restaurant.cocktails}
						</li>
						{/* <br></br> */}
						<li>
							Mom Worthy? {restaurant.momWorthy}
							<br></br>
							Fam Worthy? {restaurant.famWorthy}
							<br></br>
							Friend Worthy? {restaurant.friendWorthy}
						</li>
					</ul>
					<br></br>
					<br></br>
					<br></br>
				</div>
			))
		}

		return (
			<>
				<h3>Recently Added Restaurants </h3>
				{restaurantJsx}
			</>
		)
	}
}
export default IndexRestaurant
