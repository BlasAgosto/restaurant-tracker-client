import { React, useState } from 'react'

export default function RestaurantRank () {
  const [myCar, setMyCar] = useState('')

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <div>
      <p>Restaurant Rank: </p>
      <select value={myCar} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
    </div>
  )
}
