import apiUrl from '../apiConfig'
import axios from 'axios'

export const deleteRestaurant = (user, id) => {
  return axios({
    // url: apiUrl + '/your-rests/',
    url: apiUrl + `/your-rests/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
    // data: {
    //   restaurant: {
    //     id: restaurantData._id
    //   }
    // }
  })
}
