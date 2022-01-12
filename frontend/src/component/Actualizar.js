import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Actualizar = () =>{

    const [datosPack,setDatosPack] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        const getDato = async()=>{
            const datos = await axios.get(`http://localhost:27017/datospaquetes/${id}`)
            setDatosPack(datos)
        }
        getDato()
    },[])

    console.log(datosPack)

    return(
        <div>

        </div>
    )
}