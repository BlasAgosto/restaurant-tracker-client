/* eslint-disable no-tabs */
import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
// import { deleteRestaurant } from '../api/delete'

export default function Delete ({ user, msgAlert, id }) {
  const handleSubmit = (event) => {
    axios({
      url: apiUrl + `/your-rests/${id}`,
      //   url: apiUrl + '/your-rests/',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    // deleteRestaurant(user)
      .then((res) => {
        return res
      })
      .then(() =>
        msgAlert({
          heading: 'Deleted Successfully',
          message: 'you have successfully removed a restaurant',
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: 'Failed to delete a restaurant. Check your routes',
          variant: 'danger'
        })
      })
  }

  return (
    <div>
      {/* <input id="imageId" onChange={handleChange} type="text" value={imageId}></input> */}
      <button value='submit' onClick={handleSubmit}>
					Delete
      </button>
    </div>
  )
}
