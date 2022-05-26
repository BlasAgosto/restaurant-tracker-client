import React, { useState } from 'react'
// import React from 'react'

export default function RadioChoice () {
  const [choice, setChoice] = useState({
    worthy: ''
  })

  const handleChange = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    setChoice({
      ...choice,
      [name]: value
    })
  }

  return (
    <>
      <div>
        <label>Worthy:</label>
        <input
          type='radio'
          name='stworthy'
          value='yes'
          onChange={handleChange}
        />

        <label>Not Worthy:</label>
        <input
          type='radio'
          name='stworthy'
          value='no'
          onChange={handleChange}
        />
      </div>
      <p> Worthy? {choice.stworthy}</p>
    </>
  )
}
