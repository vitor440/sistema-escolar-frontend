import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import { Outlet } from 'react-router-dom'
import './Main.css'
import { useState } from 'react'

const Main = () => {
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