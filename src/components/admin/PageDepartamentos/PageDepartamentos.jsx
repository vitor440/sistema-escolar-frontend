import React from 'react'
import "./PageDepartamentos.css"
import { DataGrid, gridClasses, renderActionsCell, GridActionsCell, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { DepartamentoHook } from '../../hooks/DepartamentoHook';

const PageDepartamentos = () => {

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
      const {listar} = DepartamentoHook()
      const [loading, setloading] = useState(false)

      useEffect(() => {

        async function getDepartamentos() {
        
        try {
          setloading(true)
          const data = await listar(paginationModel.page, paginationModel.pageSize)
          setloading(false)
          setDepartamentos(data.content)

        } catch (error) {
          alert(error)
        }
      }

      getDepartamentos()
      }, [paginationModel])
      
        const columns = [
          { field: 'nome', headerName: 'nome', width: 345, renderActionsCell },
          { field: 'bloco', headerName: 'Bloco', width: 345 },
          { field: 'sigla', headerName: 'Sigla', width: 345 },
          {field: "actions", headerName:"Actions", type: "actions", width: 345, getActions: (id) => {
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
        <h3>Departamentos</h3>
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

            <button>Add Departamento</button>
        </div>
        <div id="grid-div">
            <div id="grid-table">
            <ThemeProvider theme={infoThemes}>
                <DataGrid  
                loading={loading}
                rows={departamentos} 
                columns={columns} 
                style={{color:"#fff", margin:"0 auto", width:"1360px"}} 
                initialState={{pagination: {paginationModel: {pageSize: 3}}}} 
                autoHeight={true} 
                disableRowSelectionOnClick
                />
            </ThemeProvider>

            </div>

        </div>
    </div>
  )
}

export default PageDepartamentos