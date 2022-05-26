// // apiUrl will be either the production or development url defined
// // in the apiConfig.js file
// import apiUrl from '../src/apiConfig'
// import axios from 'axios'

// // Create Movie Request
// // assume that `data` is an object with `title` and `director`
// // { title: 'something', director: 'someone' }
// export const createRestaurant = (data, user) => {
//   return axios({
//     url: apiUrl + '/add-rests',
//     method: 'POST',
//     data: { restaurant: data },
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// // Index request
// // no data, we will need a token
// export const indexMovies = (user) => {
//   return axios({
//     // method key sets the HTTP verb/method for this request
//     // GET is the default method, so we can include or not up to us
//     method: 'GET',
//     url: apiUrl + '/movies',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// // GET /movies/:id
// export const showMovie = (id, user) => {
//   return axios({
//     url: apiUrl + '/movies/' + id,
//     // method is optional, default is GET
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// // DELETE /movies/:id
// export const deleteMovie = (id, user) => {
//   return axios({
//     url: apiUrl + '/movies/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// // PATCH /movies/:id
// export const updateMovie = (data, id, user) => {
//   return axios({
//     url: apiUrl + '/movies/' + id,
//     method: 'patch',
//     data: { movie: data },
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }
