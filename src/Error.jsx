import React from 'react'
import { useEffect } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

const Error = () => {

    
  const navigate = useNavigate()
  useEffect(() => {

    async function logout() {
        try{
            await fetch("http://localhost:8080/logout", {
                credentials: "include",
                method: "GET"
            })
            console.log("logout foi realizado!")
        }
        catch(error) {
            alert(error)
        }
        
    }

    localStorage.clear()
    logout()
    navigate("/login")

  }, [])

  return (
    <div>
        <h2>Erro de autorização</h2>
    </div>
  )
}

export default Error