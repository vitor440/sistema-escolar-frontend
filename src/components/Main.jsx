import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import { Outlet } from 'react-router-dom'
import './Main.css'
import { useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import AdminSideBar from './AdminSideBar'



const Main = () => {
  
  const roles = localStorage.getItem("roles")

  function getSideBar() {
    if(roles.includes("ALUNO")) {
      return <SideBar/>
    }
    else if(roles.includes("ADMIN")) {
      return <AdminSideBar/>
    }
  }

  return (
    <div>
        <div className="main-content">
            {/* <SideBar/> */}
            {getSideBar()}
            {/* <MainContent/> */}
            <Outlet/>
        </div>
    </div>
  )
}

export default Main