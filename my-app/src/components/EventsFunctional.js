import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Click the functional button")
    }
  return (
    <div>
        <button onClick={clickHandler}>click me - functional components</button>
    </div>
  )
}

export default EventsFunctional