import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'
import Main from './components/Main'
import Error from './Error'
import './App.css'

function App() {

  const roles = localStorage.getItem("roles")

  return (
    <>
      
      <HeaderComponent/>
      <Main/>
    </>
  )
}

export default App
