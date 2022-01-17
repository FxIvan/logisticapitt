import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Principal = () =>{

    const [datos,setDatos] = useState([])
    let repartidor = []

    useEffect(()=>{
        const getRepartidor = async()=>{
            const paquetes = await axios.get('http://localhost:27017/datospaquetes')
            setDatos(paquetes.data)
        }
        getRepartidor()
    },[])

    datos.map(rep=>{
        repartidor.push(rep.repartidor)
    })

    const valores = repartidor.filter((valor,indice)=>{
        return  repartidor.indexOf(valor) === indice
    })


    return(
        <div className='container text-center'>
            <div className='mb-5'>
                <h2>Cargar Dato</h2>
                <div className='mt-4 link-update'>
                    <Link to='/update' className=''>Cargar</Link>
                </div>
            </div>
            <div className='mb-5'>
                <h2>Sucursal</h2>
                <div className='link-sucursal mt-4'>
                    <Link to='/sucursal'>Paquetes</Link>
                </div>
            </div>
            <div className='text-center'>
                <h2>Repartidores</h2>
                <div>
                    {
                        valores.map(x=>(
                            <div className='text-center mt-4'>
                                <div className='link-principal'>
                                    <Link to={`/repartidor/${x}`} className='' >{x}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}