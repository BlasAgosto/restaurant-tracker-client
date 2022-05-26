/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
// import { Button } from 'bootstrap'
import React from 'react'
// import RadioChoice from './RadioButton'
// import RadioChoice from './RadioButton'

// import Booleans from './RestaurantBooleans'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
// import RestaurantRank from './rest_rating'

export default function RestaurantForm (props) {
  // console.log(props)
  // const [inputs, setInputs] = useState({})
  // console.log(inputs)
  // const [msgAlert] = props

  const { restaurant, handleSubmit, handleChange } = props
  console.log(restaurant)
  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setInputs((values) => ({ ...values, [name]: value }))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   // console.log(inputs)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label>
				Restaurant name:
        <input
          type='text'
          name='name'
          value={restaurant.name || ''}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
				Rating:
        {/* <input
          type='number'
          name='rating'
          value={restaurant.rating || ''}
          onChange={handleChange}
        /> */}
        <select type='number' name='rating' value={restaurant.rating} onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </label>
      {/* <RestaurantRank /> */}
      <br></br>
      <label>
				Thoughts:
        <input
          type='text'
          name='thoughts'
          value={restaurant.thoughts || ''}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
				Cocktails:
        <input
          type='string'
          name='cocktails'
          value={restaurant.cocktails || ''}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
				Mom worthy?:
        <label>Yes:</label>
        <input
          type='radio'
          name='momWorthy'
          value='yes'
          onChange={handleChange}
        />
        <label>No:</label>
        <input
          type='radio'
          name='momWorthy'
          value='no'
          onChange={handleChange}
        />
        {/* <input
          type='boolean'
          name='momWorthy'
          value={restaurant.momWorthy}
          onChange={handleChange}
        /> */}
        {/* <Booleans /> */}
      </label>
      <br></br>
      <label>
				Fam worthy?:
        <label>Yes:</label>
        <input
          type='radio'
          name='famWorthy'
          value='yes'
          onChange={handleChange}
        />
        <label>No:</label>
        <input
          type='radio'
          name='famWorthy'
          value='no'
          onChange={handleChange}
        />
        {/* <RadioChoice /> */}
        {/* <input
          type='boolean'
          name='famWorthy'
          value={restaurant.famWorthy}
          onChange={handleChange}
        /> */}
        {/* <Booleans /> */}
      </label>
      <br></br>
      <label>
				Stranger worthy?:
        {/* <RadioChoice /> */}
        <label>Yes:</label>
        <input
          type='radio'
          name='friendWorthy'
          value='yes'
          onChange={handleChange}
        />
        <label>No:</label>
        <input
          type='radio'
          name='friendWorthy'
          value='no'
          onChange={handleChange}
        />
        {/* <input
          type='boolean'
          name='friendWorthy'
          value={restaurant.friendWorthy}
          onChange={handleChange}
        /> */}
      </label>
      <br></br>
      {/* <Booleans /> */}
      {/* <RadioChoice /> */}
      <input type='submit' />
      {/* <p>{Button.momWorthy}</p> */}
    </form>
  )
}
