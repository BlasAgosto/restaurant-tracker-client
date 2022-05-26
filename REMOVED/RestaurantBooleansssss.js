/* eslint-disable no-tabs */
// import { React, useState } from 'react'
// import { state } from 'useState'
import React from 'react'

export default function RestaurantBooleans (props) {
//   const [state, setState] = useState()
  const handleCheckbox = event => {
    // let state = this.state
    // state.momWorthy[event.target.value] = event.target.checked
    // this.state(state)
    console.log(props)
    // console.log(this.state)
  }

  return (
    <div>
      Yes{' '}
      <input
        onChange={handleCheckbox}
        type='checkbox'
        name='true'
        value='yes'
        // checked={this.state.momWorthy.yes}
      />
      No{' '}
      <input
        onChange={handleCheckbox}
        type='checkbox'
        name='false'
        value='no'
        // checked={this.state.momWorthy.no}
      />
    </div>
  )
}
