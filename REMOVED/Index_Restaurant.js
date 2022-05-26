import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../src/apiConfig'
import Delete from '../src/components/Delete'

export default function IndexRestaurant ({ msgAlert, user }) {
  const [restaurant, setRestaurant] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl + '/add-rests',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then((res) => {
        return res
      })

      .then((res) => {
        setRestaurant(res.data)
      })
      .catch(console.error)
  }, [])

  if (restaurant.length < 1) {
    return <h1>loading...</h1>
  } else {
    const restaurantJSX = restaurant.map((restaurant) => (
      <div key={restaurant._id}>
        <img className='image--index' src={restaurant.url} />
        <li>Name: {restaurant.name}</li>
        <li>Thoughts: {restaurant.thoughts}</li>
        <Delete id={restaurant._id} user={user} msgAlert={msgAlert} />
      </div>
    ))

    return (
      <div>
        <h4>My restaurant!</h4>
        <h3>{restaurantJSX}</h3>
      </div>
    )
  }
}
