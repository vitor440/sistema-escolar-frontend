import React from 'react'
import Info from '../../Info'
import ListaAvaliacoes from '../../aluno/PageExames/ListaAvaliacoes';
import ListaTarefas from '../../aluno/PageTarefas/ListaTarefas';
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
import { CursoHooks } from '../../hooks/CursoHooks';
import { DepartamentoHook } from '../../hooks/DepartamentoHook';
import { DocenteHook } from '../../hooks/DocenteHook';

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

  const {listar, cursosPorAlunos, areasPorCurso, countCursos} = CursoHooks()
  const {countDepartamentos}  = DepartamentoHook()
  const {countDocentes} = DocenteHook()
  const [loading, setLoading] = useState(false)

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  })
  const [cursos, setCursos] = useState([])
  const [barchartData, setBarchartData] = useState([])
  const [pieData, setPieData] = useState([])
  const [totalCursos, setTotalCursos] = useState(0)
  const [totalDepartamentos, setTotalDepartamentos] = useState(0)
  const [totalDocentes, setTotalDocentes] = useState(0)

  useEffect(() => {

      async function obterCursos() {
        const data = await listar(paginationModel.page, paginationModel.pageSize)
        setCursos(data.content)
      }

      

      obterCursos()
  }, [paginationModel])



  useEffect(() => {
    
    async function getBarChartData() {
      setLoading(true)
      const data = await cursosPorAlunos()
      setLoading(false)
      setBarchartData(data)
    }

    async function getPieData() {
      const data = await areasPorCurso()

      setPieData(data.map(d => {
        return {label: d[0], value: d[1]}
      }))
    }

    async function totalCursos() {
        const data = await countCursos()
        setTotalCursos(data)
        console.log(totalCursos)
      }

    async function totalDepartamentos() {
      const data = await countDepartamentos()
      setTotalDepartamentos(data)
    }

    async function totalDocentes() {
      const data = await countDocentes()
      setTotalDocentes(data)
    }

    setLoading(true)

    getBarChartData()
    getPieData()
    totalCursos()
    totalDepartamentos()
    totalDocentes()

    setLoading(false)
  }, [])

  const columns = [
    { field: 'nome', headerName: 'nome', width: 230 },
    { field: 'area', headerName: 'Área', width: 230 },
    { field: 'quantidadeAlunos', headerName: 'quantidade_alunos', width: 230 },
    { field: 'periodo', headerName: 'Turno', width: 230 },
    { field: 'quantidadePeriodos', headerName: 'Periodos', width: 230 },
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

  return (
    <div className="main">
      <h2 id='title'>Bem-Vindo Admin</h2>
        <div className="content">
            <Info Icone={FaBook} titulo="Departamentos" content={totalDepartamentos} cor = "#01460a"/>
            <Info Icone={LuNotebookText} titulo="Cursos" content={totalCursos} cor="#914202"/>
            <Info Icone={FaPencil} titulo="Docentes" content={totalDocentes} cor="#021791"/>
            {/* <Info Icone={FaPencil} titulo="Total Alunos" content="153" cor="#021791"/> */}
            {/* <Info Icone={FaPencil} titulo="Usuários" content="153" cor="#021791"/> */}
            {/* <Info Icone={FaPencil} titulo="Usuários" content="153" cor="#021791"/> */}
            
            <div id="barchart-container">
            <BarChart
            loading={loading}
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
             xAxis={[{data: barchartData.map(d => d[0])}]}
             series={[{data: barchartData.map(d => d[1])}]}/>

            </div>

            <div id="pie-chart-container">
              <h2>Proporção de Cursos por Área do Conhecimento</h2>
            <div id="pie-chart-div">

                <PieChart width={200} loading={loading} height={200} series={[
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
                    rows={cursos} 
                    columns={columns} 
                    style={{color:"#fff", margin:"0 auto", width:"1360px"}} 
                    autoHeight={true} 
                    disableRowSelectionOnClick
                    loading={loading}
                    pagination
                    pageSizeOptions={[10, 15, 20]}
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