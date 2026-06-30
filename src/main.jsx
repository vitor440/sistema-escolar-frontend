import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainContent from './components/MainContent.jsx'
import PageTarefas from './components/PageTarefas.jsx'
import PageExames from './components/PageExames.jsx'
import PageHorarios from './components/PageHorarios.jsx'
import PageResultados from './components/PageResultados.jsx'
import Callback from './Callback.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
import Login from './Login.jsx'
import Error from './Error.jsx'
import ProtectRouter from './router/ProtectRouter.jsx'
import AdminMain from './components/AdminMain.jsx'
import PageDepartamentos from './components/PageDepartamentos.jsx'
import PageCursos from './components/PageCursos.jsx'
import PageDocentes from './components/PageDocentes.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<ProtectRouter roles={["ALUNO"]}>
                <App/>
            </ProtectRouter>,
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
        path:"/exames",
        element: <PageExames/>
      },
      {
        path:"/resultados",
        element: <PageResultados/>
      },
      {
        path:"/horarios",
        element: <PageHorarios/>
      }
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/callback",
    element: <Callback/>
  },
  {
    path: "/error",
    element: <Error/>
  },

  {
    path: "/admin",
    element:<ProtectRouter roles={["ADMIN"]}>
                <App/>
            </ProtectRouter>,
    children: [
      {
        index: true,
        element: <AdminMain/>
      },
      {
        path: "departamentos",
        element: <PageDepartamentos/>
      },
      {
        path: "cursos",
        element: <PageCursos/>
      },
      {
        path: "docentes",
        element: <PageDocentes/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
