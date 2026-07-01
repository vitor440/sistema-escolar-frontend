import React from 'react'
import { useState, useEffect } from 'react'

export function DepartamentoHook() {

    async function countDepartamentos() {
        try {
            const response = await fetch(`http://localhost:8080/departamentos/count`, {
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

    async function listar(page, pageSize) {
        try {
            const response = await fetch(`http://localhost:8080/departamentos?pagina=${page}&tamanho=${pageSize}`, {
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

    return {countDepartamentos, listar}
}