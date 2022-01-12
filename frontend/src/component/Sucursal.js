import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

export const Sucursal = () => {
  const [listaPaquetes, setListaPaquetes] = useState([])
  
  useEffect(() => {
    const getLista = async () => {
      const res = await axios.get('http://localhost:27017/datospaquetes')
      setListaPaquetes(res.data)
    }
    getLista()
  }, [setListaPaquetes])

    const nameEnvio = (name) =>{
         console.log(name)
        return <p>{name}</p>
    }

    const GetTrue = (id) =>{ 
            return listaPaquetes.map(listas=>{
                if(listas._id === id){
                    const {correoargentino,andreani,pikit,nigrum} = listas
                    switch(true){
                        case correoargentino:
                            return nameEnvio('Correo Argentino')
                        case andreani:
                            return nameEnvio('Andreani')
                        case nigrum:
                            return nameEnvio('Nigrum')
                        case pikit:
                            return nameEnvio('Pikit')
                        default:
                            return nameEnvio('NO SELECCIONADO')
                    }

                }
            })
    
    }

    const handleDelete = async(id) =>{
      await axios.delete('http://localhost:27017/datospaquetes/' + id)
      window.location.href = '/sucursal'
    }


  return (
    <div className="container">
      <div>
        <h2>Envios a la Espera</h2>
        <h3>Pedidos emitidor en la Fecha: 16/01/2021 </h3>
      </div>
      <div className='mt-5'>
        {listaPaquetes.map((list) => (
          <div key={list._id} className='dato-mobile-sucursal'>
            <div className="mt-3 m-auto">
              <div className="col-12 row m-auto">
                <div className="col-6">
                  <h4>Codigo de Envio</h4>
                  <span>{list.codenv}</span>
                </div>
                <div className="col-6">
                  <h4>Contacto Cliente</h4>
                  <span>{list.telclient}</span>
                </div>
              </div>

              
                <div className="col-12 row m-auto">
                  <div className="col-6">
                    <h4>Hora</h4>
                    <span>{list.updatedAt.slice(11,-5)}</span>
                  </div>
                  <div className="col-6">
                    <h4>Envio</h4>
                    <span>{GetTrue(list._id)}</span>
                  </div>
                </div>
  

              <div className='text-center'>
                <div>
                    <h4>Repartidor ASIGNADO</h4>
                </div>
                <div>
                    <span>{list.repartidor}</span>
                </div>
              
              <div className='container d-flex justify-content-around mt-3 mb-3'>
                <Link to={`/edit/${list._id}`} className='btn btn-success' >Actualizar</Link>
                <button type='button' className='btn btn-danger'  onClick={()=>handleDelete(list._id)}>Eliminar</button>
              </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
  )
}
