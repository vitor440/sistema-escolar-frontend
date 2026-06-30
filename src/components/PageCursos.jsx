import React from 'react'
import { DataGrid, gridClasses, renderActionsCell, GridActionsCell, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from 'react';

const PageCursos = () => {

    const infoThemes = createTheme({
        palette: {
          DataGrid: {
            headerBg: "#000",
            color: "#fff",
            bg: "#181818"
          }
        }
      })

    const [loading, setloading] = useState(false)
    const [paginationModel, setPaginationModel] = useState({
              page: 0,
              pageSize: 10
            })
            
    const [cursos, setCursos] = useState([])

    const params = new URLSearchParams()
    params.set("pagina", `${paginationModel.page}`)
    params.set("tamanho", `${paginationModel.pageSize}`)
    
      useEffect(() => {
        async function getCursos() {
        
        try {
          setloading(true)
          const response = await fetch(`http://localhost:8080/cursos?${params.toString()}`, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("access_token")}` 
            },
            credentials: "include",
          })

          

          const data = await response.json()
          setloading(false)
          setCursos(data.content)

        } catch (error) {
          alert(error)
        }
      }
    
          getCursos()
            }, [paginationModel])

      const rows = [
        { id: 1, nome: 'Ciências da computação', area: 'EXATAS' , quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8"},
        { id: 2, nome: 'Engenharia de software', area: 'EXATAS', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 3, nome: 'Física', area: 'EXATAS', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 4, nome: 'Matemática', area: 'EXATAS', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 5, nome: 'Biologia', area: '09/04/2026', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 6, nome: 'Engenharia civil', area: 'ENGENHARIAS', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 7, nome: 'Medicina', area: 'SAUDE', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" },
        { id: 8, nome: 'Relações públicas', area: 'NAO SEI', quantidadeAlunos: "10", turno: "INTEGRAL", periodos: "8" }
      ];
      
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
          console.log(id);
        }
      
         const handleDeleteClick = (id) => {
          console.log(id);
        }
  return (
    <div id='list-container'>
            <h3>Cursos</h3>
            <div id="search-container">
                <div id="input">
                    <label htmlFor="search">Pesquisar:</label>
                    <input type="text" name="search" id="search" />
                    <button>Pesquisar</button>
                </div>
                <div id="filter">
                    <label htmlFor="area">Área:</label>
                    <select name="area" id="area">
                        <option value="tipo">EXATAS</option>
                        <option value="tipo">HUMANAS</option>
                        <option value="tipo">CIẼNCIAS BIOLOGICAS</option>
                        <option value="tipo">ENGENHARIAS</option>
                        <option value="tipo">CIÊNCIAS AGRÁRIAS</option>
                    </select>
                </div>
                <div id="filter">
                    <label htmlFor="periodo">Periodos:</label>
                    <select name="periodo" id="periodo">
                        <option value="tipo">6</option>
                        <option value="tipo">8</option>
                        <option value="tipo">10</option>
                    </select>
                </div>
    
                <button>Add Curso</button>
            </div>
            <div id="grid-div">
                <div id="grid-table">
                <ThemeProvider theme={infoThemes}>
                    <DataGrid  
                    rows={cursos} 
                    columns={columns} 
                    style={{color:"#fff", margin:"0 auto", width:"1360px"}} 
                    initialState={{pagination: {paginationModel: {pageSize: `${paginationModel.pageSize}`}}}} 
                    autoHeight={true} 
                    disableRowSelectionOnClick
                    onPaginationModelChange={setPaginationModel}
                    loading={loading}
                    />
                </ThemeProvider>
    
                </div>
    
            </div>
        </div>
  )
}

export default PageCursos