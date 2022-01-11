import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

  

  return (
    <div className="container mx-3">
      <div>
        <h2>Envios a la Espera</h2>
        <h3>Pedidos emitidor en la Fecha: 16/01/2021 </h3>
      </div>

      <div className="mt-5">
        {listaPaquetes.map((list) => (
          <div key={list._id}>
            <div className="mt-3">
              <div className="col-12 row">
                <div className="col-6">
                  <h4>Codigo de Envio</h4>
                  <span>{list.codenv}</span>
                </div>
                <div className="col-6">
                  <h4>Contacto Cliente</h4>
                  <span>{list.telclient}</span>
                </div>
              </div>

              <div className="col-12 row">
                <div className="col-12 row">
                  <div className="col-6">
                    <h4>Hora</h4>
                    <span>{list.updatedAt.slice(11,-5)}</span>
                  </div>
                  <div className="col-6">
                    <h4>Envio</h4>
                    <span>{GetTrue(list._id)}</span>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <div>
                    <h4>Repartidor ASIGNADO</h4>
                </div>
                <div>
                    <span>{list.repartidor}</span>
                </div>
              </div>
              <div className='container d-flex justify-content-around'>
                <button>Actualizar</button>
                <button>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
