import React from 'react'
import "./PageHorarios.css"
import { EventCalendar } from '@mui/x-scheduler';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const PageHorarios = () => {
    
    const diasSemana = [
        "DOMINGO",
        "SEGUNDA",
        "TERCA",
        "QUARTA",
        "QUINTA",
        "SEXTA",
        "SABADO"
    ]
   

    const eventos = [
    {
    id: 1,
    title: 'Engenharia de Software 2',
    daysOfWeek: ['0', '1'],
    startTime: '08:00:00',
    endTime: '10:00:00'
  },
  {
    id: 2,
    title: 'Verificação e validação de software',
    daysOfWeek: ['2', '4'],
    startTime: "10:00:00",
    endTime: '12:00:00'
  }
    ]

    const [events, setEvents] = useState(eventos);

    const headerConfig = {
    center: "title"
        
    }

  return (
    <div id="main-container-calendar">
        <h2>Horários disciplinas</h2>
        <div id='calendario-div'>
            <FullCalendar id="calendario"plugins={[timeGridPlugin]} height="600px" initialView="timeGridWeek" events={eventos}/>
        </div>
    </div>
    
  )
}

export default PageHorarios