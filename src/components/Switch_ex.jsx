import React from 'react'

const Switch_ex = ({isLoggedIn}) => {
  switch (isLoggedIn) {
    case true:
        return (
    <div>
      <h1>LOgin successfully</h1>
    </div>
  )
        break;
    case false:
        return (
    <div>
      <h1>LOgin failed</h1>
    </div>
  )
        break;
  
    default:
            case true:
        return (
    <div>
      <h1>Invalid detailes</h1>
    </div>
  )
        
  
        break;
  }
}

export default Switch_ex
