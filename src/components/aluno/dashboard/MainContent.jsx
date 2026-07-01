import React from 'react'
import './MainContent.css'
import Info from '../../Info'
import ListaAvaliacoes from '../PageExames/ListaAvaliacoes';
import ListaTarefas from '../PageTarefas/ListaTarefas';
import { FaBook } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaPencil } from "react-icons/fa6";

const MainContent = () => {
  return (
    <div className="main">
      <h2 id='title'>Bem-Vindo Vitor Oliveira</h2>
        <div className="content">
            <Info Icone={FaBook} titulo="Disciplina" content="7" cor = "#01460a"/>
            <Info Icone={LuNotebookText} titulo="Tarefas" content="2" cor="#914202"/>
            <Info Icone={FaPencil} titulo="Avaliações" content="3" cor="#021791"/>
            <ListaAvaliacoes/>
            <ListaTarefas/>
        </div>
    </div>
  )
}

export default MainContent