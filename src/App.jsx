import React from 'react'
import Props_ex from './components/Props_ex'
import Conditional_2 from './components/Conditional_2'
import Conditional_Render_ex from './components/Conditional_Render_ex'
import UseState from './components/UseState'

const App = () => {
  return (
    <div>
      <Props_ex name="Riddhi" age={21}/>
      <Conditional_2 isLoggedIn={true}/>
      <Conditional_Render_ex isLoggedIn={false}/>
      <UseState/>
    </div>
  )
}

export default App
