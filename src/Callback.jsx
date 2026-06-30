import { parseMarker } from '@fullcalendar/core/internal';
import React from 'react'
import { useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const Callback = () => {

    const [searchParams] = useSearchParams();
    let navigate = useNavigate();

    const code = searchParams.get("code")

    async function getToken() {
        try {
            
            const params = new URLSearchParams()

            params.append("grant_type", "authorization_code");
            params.append("code", code);
            params.append("redirect_uri", "http://localhost:5173/callback");
            

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
        
            console.log(token)

            const tokenDecoded = jwtDecode(token)
            console.log(tokenDecoded)

            localStorage.setItem("access_token", token)
            localStorage.setItem("username", tokenDecoded.sub)
            localStorage.setItem("email", tokenDecoded.email)
            localStorage.setItem("roles", tokenDecoded.roles)
            
            if(localStorage.getItem("roles").includes("ALUNO")) {
                navigate("/")
            }
            else if(localStorage.getItem("roles").includes("ADMIN")) {
                navigate("/admin")
            }
            else {
                navigate("/")
            }
            
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        
        getToken()
    }, [])

  return (
    <div>

    </div>
  )
}

export default Callback