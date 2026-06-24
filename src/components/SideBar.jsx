import React from 'react'
import { FaCalendarAlt, FaRegClock, FaRegCheckCircle, FaTasks } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import './SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
        <div className="side-bar">
            <ul>
              <div className="itens">
                <div className="item">
                  <IoMdHome color='#fff'/>
                  <Link to={"/"} className='link'>Home</Link>
                  {/* <li>Home</li> */}
                </div>
                <div className="item">
                  <FaTasks color='#fff'/>
                  {/* <li>Tarefas</li> */}
                  <Link to={"/tarefas"} className='link'>Tarefas</Link>
                </div>
                <div className="item">
                  <FaCalendarAlt color='#fff'/>
                  {/* <li>Calendário de provas</li> */}
                  <Link to={"/resultados"} className='link'>Calendário de provas</Link>
                </div>
                <div className="item">
                  <LuNotebookPen color='#fff'/>
                  <li>Notas e Frequências</li>
                </div>
                <div className="item">
                  <FaRegClock color='#fff'/>
                  <li>Horários</li>
                </div>
                <div className="item">
                  <FaFileCircleCheck color='#fff'/>
                  <li>Resultados</li>
                </div>
                <div className="item">
                  <MdOutlineEventNote color='#fff'/>
                  <li>Solicitação de matrícula</li>
                </div>
              </div>
                
            </ul>
        </div>
    </div>
  )
}

export default SideBar