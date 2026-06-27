import { parseMarker } from '@fullcalendar/core/internal';
import React from 'react'
import { Navigate, useSearchParams} from 'react-router-dom'
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const Callback = () => {

    const [searchParams] = useSearchParams();
    const code = searchParams.get("code")

    async function getToken() {
        try {
            console.log("debugando...")
            const params = new URLSearchParams()
            params.append("grant_type", "authorization_code");
            params.append("code", code);
            params.append("redirect_uri", "http://localhost:5173/callback");
            
            console.log("code recebido: " + code)

            const response = await fetch("http://localhost:8080/oauth2/token", {
                method: "POST",
                headers: {
                    "Authorization": "Basic cmVhY3Q6cmVhY3QxMjM=",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params
            })

            const data = await response.json()
            

            const token = data.access_token
            console.log("Token: " + token)

            const tokenDecoded = jwtDecode(token)

            localStorage.setItem("access_token", token)
            
            
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        
        getToken()
    }, [])

  return (
    <div>
        <Navigate to={"/"}/>
    </div>
  )
}

export default Callback