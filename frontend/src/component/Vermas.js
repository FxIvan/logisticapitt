import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Vermas = () =>{

    const [vermas,setVermas] = useState([])
    const {codenvMAS} = useParams()

    useEffect(()=>{
        const getCodigo = async() =>{
            const datosCodigos = await axios.get(`http://localhost:27017/repartidor/mas/${codenvMAS}`)
            setVermas(datosCodigos.data)
        }
        getCodigo()
    },[vermas])

        const handleDelete = async(id) =>{
      await axios.delete('http://localhost:27017/datospaquetes/' + id)
      window.history.back()
    }

    const handleVolver = () =>{
        window.history.back()
    }

    return(
        <div>
            <div>
                <div className='text-center mt-4'>
                    <h2>Datos del USUARIO</h2>
                </div>
                <div className='container vermas-label'>
                    <div className='d-grid mt-4'>
                        <span>Codigo de Envio</span>
                        <label>{vermas.codenv}</label>
                    </div>
                    <div className='d-grid mt-4'>
                        <span>Direccion y Numero</span>
                        <label>{vermas.direccion}</label>
                    </div>
                    <div className='d-grid mt-4'>
                        <span>Localidad</span>
                        <label>{vermas.localidad}</label>
                    </div>
                    <div className='d-grid mt-4'>
                        <span>Telefono de Contacto</span>
                        <label>{vermas.telclient}</label>
                    </div>
                    <div className='d-grid mt-4'>
                        <span>Provincia</span>
                        <label>{vermas.provincia}</label>
                    </div>
                    <div className='d-grid mt-4'>
                        <span>Fecha de Emision</span>
                        <label>{vermas.emision}</label>
                    </div>
                    <div className='col-12 m-auto mb-5 text-center d-flex justify-content-around'>
                        <button type='button' className='btn btn-success text-center mt-4 col-4'  onClick={()=>handleDelete(vermas._id)}>Entregado</button>
                        <button type='button' className='btn btn-warning text-center mt-4 col-4' onClick={()=>handleVolver()} >Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}