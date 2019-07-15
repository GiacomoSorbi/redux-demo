import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const App = props => {
  return (
    <div className='app'>
      <header className='app-header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/info'>Info</NavLink>
      </header>
      {props.children}
    </div>
  )
}

export default App
