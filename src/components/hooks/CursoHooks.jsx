import React from 'react'
import { useState, useEffect } from 'react'

export function CursoHooks() {

    async function listar(page, pageSize) {

        try {
        const response = await fetch(`http://localhost:8080/cursos?pagina=${page}&tamanho=${pageSize}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            },
            credentials: "include"
        })
        const data = await response.json()
    
        return data
            
        } catch (error) {
            alert(error)
        }
    }

    async function cursosPorAlunos() {

        try {
        const response = await fetch(`http://localhost:8080/cursos/alunos-curso`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            },
            credentials: "include"
        })
        const data = await response.json()
    
        return data
            
        } catch (error) {
            alert(error)
        }
    }
    
    async function areasPorCurso() {
        try {
        const response = await fetch(`http://localhost:8080/cursos/areas-count`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            },
            credentials: "include"
        })
        const data = await response.json()
    
        return data
            
        } catch (error) {
            alert(error)
        }
    }

    async function countCursos() {
        try {
            const response = await fetch(`http://localhost:8080/cursos/count`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                },
                credentials: "include"
            })

            const data = await response.json()
            return data

        } catch (error) {
            
        }
    }
    

    return {listar, cursosPorAlunos, areasPorCurso, countCursos};
}