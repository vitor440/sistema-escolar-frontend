import React from 'react'
import { redirect } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {

  useEffect(() => {
      window.location.replace("http://localhost:8080/oauth2/authorize?response_type=code&client_id=react&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fcallback")
  }, [])

  return (
    <div>
        
    </div>
  )
}

export default Login