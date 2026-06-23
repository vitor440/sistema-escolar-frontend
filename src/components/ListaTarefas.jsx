import React from 'react'
import "./ListaTarefas.css"

const ListaTarefas = () => {
  return (
    <div className='lista-tarefas-container'>
        <h2>Tarefas Pendentes</h2>
            <div className="lista-tarefas">
            <ul>
              <div className="linha">
                <li>Disciplina</li>
                <li>Data</li>
                <li>Horário</li>
              </div>
              <div className="linha">
                <li>Redes de computadores</li>
                <li>24/10/2026</li>
                <li>08:00</li>
              </div>
              <div className="linha">
                <li>Disciplina</li>
                <li>Data</li>
                <li>Horário</li>
              </div>
            </ul>
          </div>        
    </div>
  )
}

export default ListaTarefas