/* eslint-disable no-tabs */
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'

export default function UpdateRestaurant ({ user, msgAlert, id }) {
//   const [imageTitle, setImageTitle] = useState('')
//   const [imageCaption, setImageCaption] = useState('')
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantThoughts, setRestaurantThoughts] = useState('')

  const handleChangeName = (event) => {
    setRestaurantName(event.target.value)
  }
  const handleChangeThoughts = (event) => {
    setRestaurantThoughts(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // restaurant = destructured values. for consistancy across all CRUD actions
    const updateData = {
      name: restaurantName,
      thoughts: restaurantThoughts
    }
    axios({
      url: apiUrl + `/your-rests/${id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${user.token}`
      },
      data: { updateData }
    })

      .then((res) => {
        return res
      })
      .then(() =>
        msgAlert({
          heading: 'Updated Successfully',
          message: 'You have updated your restaurant info! Change of mind?',
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Update Failed with error: ' + error.message,
          message: 'Nah. Your thoughts will stay here as is',
          variant: 'danger'
        })
      })
  }

  return (
    <div>
      <div>
        <input
          id='restaurant_id'
          name='restaurant.name'
          onChange={handleChangeName}
          type='text'
          placeholder='Restaurant Name'
          value={restaurantName.name}></input>
        <input
          id='restaurant_id'
          name='restaurant.thoughts'
          onChange={handleChangeThoughts}
          type='text'
          placeholder='Change of heart?'
          value={restaurantThoughts.thoughts}></input>
        <button value='submit' onClick={handleSubmit}>
					Update
        </button>
      </div>
    </div>
  )
}
