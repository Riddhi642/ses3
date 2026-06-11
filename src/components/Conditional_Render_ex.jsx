import React from 'react'

const Conditional_Render_ex = ({isLoggedIn}) => {
    if (isLoggedIn) {
        
  return (
    <div>
      <h4>LoggedIn Successfully</h4>
    </div>
  )
    } else {
        
  return (
    <div>
      <h4>Failed...</h4>
    </div>
  )
    }
}

export default Conditional_Render_ex
