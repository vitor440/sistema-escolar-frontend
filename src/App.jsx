import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'
import Main from './components/Main'
import './App.css'
import { jwtDecode } from "jwt-decode";

function App() {

  

  return (
    <>
      
      <HeaderComponent/>
      <Main/>
    </>
  )
}

export default App
