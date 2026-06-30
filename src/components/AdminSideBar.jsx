import React from 'react'
import "./AdminSideBar.css"
import { FaCalendarAlt, FaRegClock, FaRegCheckCircle, FaTasks } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div>
        <div className="side-bar">
            <ul>
              <div className="itens">
                <div className="item">
                  <IoMdHome color='#fff'/>
                  <Link to={"/admin"} className='link'>Home</Link>
                  {/* <li>Home</li> */}
                </div>
                <div className="item">
                  <FaTasks color='#fff'/>
                  {/* <li>Tarefas</li> */}
                  <Link to={"/admin/departamentos"} className='link'>Departamentos</Link>
                </div>
                <div className="item">
                  <FaCalendarAlt color='#fff'/>
                  {/* <li>Calendário de provas</li> */}
                  <Link to={"/admin/cursos"} className='link'>Cursos</Link>
                </div>
                <div className="item">
                  <LuNotebookPen color='#fff'/>
                  <Link to={"/admin/docentes"} className='link'>Docentes</Link>
                </div>
                <div className="item">
                  <FaRegClock color='#fff'/>
                  {/* <li>Horários</li> */}
                  <Link to={"/horarios"} className='link'>Alunos</Link>
                </div>
                <div className="item">
                  <FaFileCircleCheck color='#fff'/>
                  {/* <li>Resultados</li> */}
                  <Link to={"/resultados"} className='link'>Usuários</Link>
                </div>
                <div className="item">
                  <MdOutlineEventNote color='#fff'/>
                  <li>Matriculas</li>
                </div>
              </div>
                
            </ul>
        </div>
    </div>
  )
}

export default AdminSideBar