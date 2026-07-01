import React from 'react'
import { DataGrid, gridClasses, renderActionsCell, GridActionsCell, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { DocenteHook } from '../../hooks/DocenteHook';

const PageDocentes = () => {

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
        
      const [docentes, setDocentes] = useState([])
      const {listar} = DocenteHook()
      const [loading, setLoading] = useState(false)

      useEffect(() => {
        async function getDocentes() {
        
        try {
          setLoading(true)
          const data = await listar(paginationModel.page, paginationModel.pageSize)
          setLoading(false)
          setDocentes(data.content)

        } catch (error) {
          alert(error)
        }
      }

      getDocentes()
        }, [paginationModel])

      const rows = [
        { id: 1, registroInterno: '423423423432443', cpf: '324324234324' , nome: "Paulo Guina", email: "paulo@oco@gmail.com", telefone: "9999-9999", dataNascimento: "2026-10-03", formação: "UEA - univerisade do amazonas", departamento: "1"},
        { id: 1, registroInterno: '423423423432443', cpf: '324324234324' , nome: "Paulo Guina", email: "paulo@oco@gmail.com", telefone: "9999-9999", dataNascimento: "2026-10-03", formação: "UEA - univerisade do amazonas", departamento: "1"}
      ];
      
        const columns = [
          { field: 'registroInterno', headerName: 'registro_interno', width: 138, renderActionsCell },
          { field: 'cpf', headerName: 'cpf', width: 138 },
          { field: 'nome', headerName: 'nome', width: 138 },
          { field: 'email', headerName: 'email', width: 138 },
          { field: 'telefone', headerName: 'telefone', width: 138 },
          { field: 'dataNascimento', headerName: 'data_nascimento', width: 138 },
          { field: 'formacao', headerName: 'formação', width: 138 },
          { field: 'salario', headerName: 'salário', width: 138 },
          { field: 'departamentoId', headerName: 'departamento', width: 138 },
          {field: "actions", headerName:"Actions", type: "actions", width: 138, getActions: (id) => {
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
            <h3>Docentes</h3>
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
                    rows={docentes} 
                    columns={columns} 
                    loading={loading}
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

export default PageDocentes