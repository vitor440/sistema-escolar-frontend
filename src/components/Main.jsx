import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import { Outlet } from 'react-router-dom'
import './Main.css'
import { useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode";



const Main = () => {
  useEffect(() => {
      const accessToken = localStorage.getItem("access_token")
      const decodedToken = jwtDecode(accessToken)
      console.log(decodedToken.aud)
  }, [])

  return (
    <div>
        <div className="main-content">
            <SideBar/>
            {/* <MainContent/> */}
            <Outlet/>
        </div>
    </div>
  )
}

export default Main