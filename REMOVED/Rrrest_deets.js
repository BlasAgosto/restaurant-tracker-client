/* eslint-disable no-tabs */
import React from 'react'

export default function Deets (props) {
  const { restName, setRestName, thoughts, setThoughts } = props
  const handleChangeName = (event) => {
    setRestName(event.target.value)
  }
  const handleChangeThoughts = (event) => {
    setThoughts(event.target.value)
  }
  //  props is used to pull info from parent components
  // while referencing information within the component no props are needed
  return (
    <div>
      <p>
				Thoughts:
        <input
          type='text'
          name='thoughts'
          value={thoughts}
          onChange={handleChangeThoughts}></input>
        <br></br>
				Name:
        <input
          type='text'
          name='restName'
          value={restName}
          onChange={handleChangeName}></input>
      </p>
    </div>
  )
}
