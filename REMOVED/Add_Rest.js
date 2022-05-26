// import React, { useState } from 'react'
// import axios from 'axios'
// import apiUrl from '../src/apiConfig'

// export default function AddRest () {
//   // const url = 'apiUrl'
//   const [data, setData] = useState({
//     name: '',
//     thoughts: ''
//   })

//   // const details = {
//   //   name: { name },
//   //   thoughts: { thoughts }

//   function submit (e) {
//     e.preventDefault()
//     axios({
//       url: apiUrl + '/add-rests',
//       method: 'POST',
//       headers: {
//         // Authorization: `Bearer ${user.token}`
//       }
//       // data,
//       // body: details
//       // : data + `${user}`
//     })
//     // ================Youtube code ===========
//     // Axios.post(url, {
//     //   name: data.name,
//     //   thoughts: data.thoughts
//     // })
//       .then((res) => {
//         console.log(res.data)
//       })
//   }

//   function handle (e) {
//     const newRest = { ...data }
//     newRest[e.target.id] = e.target.value
//     setData(newRest)
//     console.log(newRest)
//   }
//   return (
//     <div>
//       <h2>Add your restaurant here!</h2>
//       <form onSubmit={(e) => submit(e)}>
//         <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' type="text"></input> <br></br>
//         <input onChange={(e) => handle(e)} id="thoughts" value={data.thoughts} placeholder='thoughts' type="text"></input>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }
