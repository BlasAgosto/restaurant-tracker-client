/* eslint-disable func-call-spacing */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
// import { useHistory } from 'react-router-dom'

export default function UpdateRestaurant ({ user, msgAlert, id }) {
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantThoughts, setRestaurantThoughts] = useState('')

  // const history = useHistory()

  const handleChangeName = (event) => {
    setRestaurantName(event.target.value)
  }
  const handleChangeThoughts = (event) => {
    setRestaurantThoughts(event.target.value)
    // const allData = event.target.value
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //  ===================================TURN ME BACK ON ==============================================================
    // history.push('/')
    // =============================THIS GUY ^^^^^====================================================================
    function wipe () {
      event.value = ('')
    }
    wipe()
    const updateData = {
      name: restaurantName,
      thoughts: restaurantThoughts
    }

    // window.location.reload()

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
    // .then(console.log({ updateData }))
    // .then(history.push('/'))
    // .then(refreshPage())
      .catch((error) => {
        msgAlert({
          heading: 'Update Failed with error: ' + error.message,
          message: 'Nah. Your thoughts will stay here as is',
          variant: 'danger'
        })
      })
  }
  /* =================================================================================================
  // =================================================================================================

  // const resetFields = () => {
  //   setRestaurantName('')
  //   setRestaurantThoughts('')
  // }
    const handleClear = (event) => {
			//   event.preventDefault(event)
			// const clearFields = {
			// name: (''),
			// thoughts: ('')
			// }
			event.target.value = ''
			// setRestaurantThoughts('')
			console.log(event.target.value)
			// restaurantName.current.value = ''
			// restaurantThoughts.current.value = ''
			//  name: '',
			// thoughts: ''
			// }
		}
        // onSubmit={(updateData, {resetForm}) => {
    //    console.log('hi', updateData)
    //    resetForm({updateData: "  "})
    // }}
  //= ===============================================================================================
  //= ===============================================================================================
 = =============================================================================================== */

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
