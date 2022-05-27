/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import apiUrl from '../apiConfig'
import axios from 'axios'

export const createRestaurant = (restaurantData, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/add-rests/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      restaurant: {
        name: restaurantData.name,
        thoughts: restaurantData.thoughts,
        rating: restaurantData.rating,
        cocktails: restaurantData.cocktails,
        momWorthy: restaurantData.momWorthy,
        famWorthy: restaurantData.famWorthy,
        friendWorthy: restaurantData.friendWorthy
      }
    }
  })
}

export const indexRestaurant = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/add-rests/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

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

export const filterRestaurant = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/add-rests/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const allRestaurant = (user) => {
  // console.log('HELLLLLLLPPPPPPPPPPP')
  return axios({
    method: 'GET',
    url: apiUrl + '/all-rests/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// export const indexAllRestaurant = (user) => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/add-rests/',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }
