import React from 'react'
import Info from './Info'
import ListaAvaliacoes from './ListaAvaliacoes';
import ListaTarefas from './ListaTarefas';
import { FaBook } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaPencil } from "react-icons/fa6";
import { DataGrid, gridClasses, renderActionsCell, GridActionsCell, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BarChart, axisClasses } from '@mui/x-charts';
import { useState, useEffect } from 'react';
import "./AdminMain.css"

const AdminMain = () => {

  const infoThemes = createTheme({
    palette: {
      DataGrid: {
        headerBg: "#000",
        color: "#fff",
        bg: "#181818"
      }
    }
  })

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  })
  const [departamentos, setDepartamentos] = useState([])

  useEffect(() => {

      async function getDepartamentos() {
        
        try {
          const response = await fetch(`http://localhost:8080/cursos?pagina=${paginationModel.page}&tamanho=10`, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("access_token")}` 
            },
            credentials: "include"
          })

          const data = await response.json()
          console.log(data.content)
          setDepartamentos(data.content)

        } catch (error) {
          alert(error)
        }
      }

      getDepartamentos()
  }, [paginationModel])

  const columns = [
    { field: 'nome', headerName: 'nome', width: 230, renderActionsCell },
    { field: 'area', headerName: 'Área', width: 230 },
    { field: 'quantidadeAlunos', headerName: 'quantidade_alunos', width: 230 },
    { field: 'turno', headerName: 'Turno', width: 230 },
    { field: 'periodos', headerName: 'Periodos', width: 230 },
    {field: "actions", headerName:"Actions", type: "actions", width: 200, getActions: (id) => {
      return [
        <GridActionsCellItem 
          icon={<CiEdit/>}
          label="edit"
          color='inherit'
          onClick={handleEditClick(id)}
        />
        ,<GridActionsCellItem 
          icon={<MdDeleteOutline/>}
          label="delete"
          color='inherit'
          onClick={handleDeleteClick(id)}
        />

      ]
    }}
  ];

  const handleEditClick = (id) => {
    //console.log(id);
  }

   const handleDeleteClick = (id) => {
    //console.log(id);
  }

  

  const pieData = [
    {
      label: "ciências exatas",
      value: 20
    },
    {
      label: "ciências humanas",
      value: 25
    },
    {
      label: "letras e linguistica",
      value: 18
    }

  ]

  return (
    <div className="main">
      <h2 id='title'>Bem-Vindo Admin</h2>
        <div className="content">
            <Info Icone={FaBook} titulo="Departamentos" content="12" cor = "#01460a"/>
            <Info Icone={LuNotebookText} titulo="Cursos" content="21" cor="#914202"/>
            <Info Icone={FaPencil} titulo="Total Docentes" content="43" cor="#021791"/>
            <Info Icone={FaPencil} titulo="Total Alunos" content="153" cor="#021791"/>
            <Info Icone={FaPencil} titulo="Usuários" content="153" cor="#021791"/>
            <Info Icone={FaPencil} titulo="Usuários" content="153" cor="#021791"/>
            {/* <ListaTarefas/> */}
            {/* <div id="grid-div">
              <h2>Lista</h2>
              <div id="grid-table">
                <ThemeProvider theme={infoThemes}>
                    <DataGrid  
                    rows={rows} 
                    columns={columns} 
                    style={{color:"#fff", margin:"0 auto", width:"860px"}} 
                    initialState={{pagination: {paginationModel: {pageSize: 3}}}} 
                    autoHeight={true} 
                    disableRowSelectionOnClick
                    />
                </ThemeProvider>

              </div>

            </div> */}
            
            <div id="barchart-container">
            <BarChart
             sx={(theme) => ({
              [`.${axisClasses.root}`]: {
                [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                  stroke: '#fff',
                  strokeWidth: 3,
                },
                [`.${axisClasses.tickLabel}`]: {
                  fill: '#fff',
                },
        }
             })}
             style={{color:"#fff", backgroundColor:"#181818"}}
             width={860} 
             height={300}
             xAxis={[{data: ["exatas", "humanas", "engenharias", "letras", "ciências biológicas"]}]}
             series={[{data: [20, 32, 19, 16, 18]}]}/>

            </div>

            <div id="pie-chart-container">
              <h2>Proporção de Cursos por Área do Conhecimento</h2>
            <div id="pie-chart-div">

                <PieChart width={200} height={200} series={[
                  {
                    data: pieData,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  }
                ]}/>
            </div>
            </div>
            
            
            <div id="grid-div">
              <h2>Lista de departamentos</h2>
              <div id="grid-table">
                <ThemeProvider theme={infoThemes}>
                    <DataGrid  
                    rows={departamentos} 
                    columns={columns} 
                    style={{color:"#fff", margin:"0 auto", width:"1360px"}} 
                    autoHeight={true} 
                    disableRowSelectionOnClick
                    paginationMode='server'
                    pagination
                    onPaginationModelChange={setPaginationModel}
                    />
                </ThemeProvider>

              </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default AdminMain