// rafce
import React from 'react'

const Display = ({newUser}) => {
  // console.log(newUser);
  return (
    <fieldset>
        <legend>Display.jsx</legend>
    <div>{JSON.stringify(newUser)}</div>
    </fieldset>
  )
}

export default Display