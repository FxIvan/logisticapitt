import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Actualizar = () =>{

    const [datosPack,setDatosPack] = useState([])
    const [form,setForm] = useState({
        emision:'',
        codenv:'',
        telclient:'',
        correoargentino:false,
        andreani:false,
        pikit:false,
        nigrum:false,
        direccion:'',
        localidad:'',
        provincia:'',
        repartidor:''
    })



    const {id} = useParams()

    useEffect(()=>{
        const getDato = async()=>{
            const datos = await axios.get(`http://localhost:27017/datospaquetes/${id}`)
            setDatosPack(datos)
        }
        getDato()
    },[])

    const handleInput = (e)=>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({
            ...form,
            [e.target.name]:value,
        })
    }
    
    const handleActualizar=async()=>{ 
        await axios.put(`http://localhost:27017/datospaquetes/${id}`, form) 
        window.location.href = '/sucursal'
    }

    return(
        <div>
        <div className='text-center container mt-3'>
            <h2>Actualizar Dato</h2>
        </div>
        <div className='container'>
            <label htmlFor='formControlInput' className="form-label mt-3">Fecha de emision</label>
            <input type="date" className="form-control" id="formControlInput" placeholder="dd/mm/yy" onChange={handleInput} name='emision'/>
            <label htmlfor="formControlInput" className="form-label mt-3">Codigo de Envio</label>
            <input type="text" className="form-control" id="formControlInput" placeholder="CE1789" onChange={handleInput} name='codenv'/>
            <label htmlfor="formControlInput" className="form-label mt-3">Telefono contacto del cliente</label>
            <input type="number" className="form-control" id="formControlInput" placeholder="Telefono Cliente" onChange={handleInput} name='telclient'/>
        </div>
        <div className='container mt-3'>
            <h3>Nombre de Logistica</h3>
            <div className='container'>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="formCheckChecked" name='corrreoargentino' onChange={handleInput} value={false}/>
                    <label className="form-check-label" htmlfor="formChecChecked">Correo Argentino</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="formCheckChecked" name='andreani' onChange={handleInput} value={false}/>
                    <label className="form-check-label" htmlfor="formCheckChecked">Andreani</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="formCheckChecked" name='pikit' onChange={handleInput} value={false}/>
                    <label className="form-check-label" htmlfor="formCheckChecked">Pikit</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="formCheckChecked" name='nigrum' onChange={handleInput} value={false}/>
                    <label className="form-check-label" htmlfor="formCheckChecked">NIGRUM</label>
                </div>
            </div>
        </div>
        <div className='container mt-3 mb-5'>
            <label htmlfor="formControlInput" className="form-label mt-3">Direccion</label>
            <input type="text" className="form-control" id="formControlInput" placeholder="Direccion y Numero" name='direccion' onChange={handleInput}/>
            <label htmlfor="formControlInput" className="form-label mt-3">Localidad</label>
            <input type="text" className="form-control" id="formControlInput" placeholder="Localidad" name='localidad' onChange={handleInput}/>
            <label htmlfor="formControlInput" class="form-label mt-3">Provincia</label>
            <input type="text" className="form-control" id="formControlInput" placeholder="Provincia" name='provincia' onChange={handleInput}/>    
        </div>
        <div className='container'>
            <label htmlfor="formControlInput" className="form-label mt-3">Repartidor a ASIGNAR</label>
            <input type="text" className="form-control" id="formControlInput" placeholder="#D42727117C" name='repartidor' onChange={handleInput}/>
            <p className='text-info'>Debe incluir la sigiente estructura <br/> #D-DNI-EMPRESA</p>
        </div>
        <div className='container mb-4'>
            <div className='text-center mb-5 d-flex justify-content-center'>
                <button type='submit' className='btn btn-success' onClick={()=> handleActualizar()}>Actualizar</button>
                <Link to='/sucursal' className='btn btn-warning mx-5' type='button'>Volver</Link>
            </div>
        </div>
    </div>
    )
}