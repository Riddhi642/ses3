import React from 'react'

const Conditional_2 = ({isLoggedIn}) => {
  return (
    <div>
      {
        isLoggedIn ? <h2>welcome This is home</h2>: <h2>Try Again</h2>
      }

      {
        isLoggedIn && <h1>Home...!</h1>
      }
    </div>
  )
}

export default Conditional_2
