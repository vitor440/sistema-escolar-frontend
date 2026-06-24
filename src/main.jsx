import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainContent from './components/MainContent.jsx'
import PageTarefas from './components/PageTarefas.jsx'
import PageResultados from './components/PageResultados.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <MainContent/>
      },
      {
        path:"/tarefas",
        element: <PageTarefas/>
      },
      {
        path:"/resultados",
        element: <PageResultados/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
