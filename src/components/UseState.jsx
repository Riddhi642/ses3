import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
    const[title,setTitle]=useState('Click Me')
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)} >Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setTitle('Clicked..')}>{title}</button>
    </div>
  )
}

export default UseState
