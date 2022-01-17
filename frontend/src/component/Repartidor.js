import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Repartidor = () =>{

    const [repartidor,setRepartidor] = useState([])
    const {repartidorurl} = useParams()

    useEffect(()=>{
        const getRepartidor = async() =>{
            const datosRepartidor = await axios.get(`http://localhost:27017/repartidor/${repartidorurl}`)
            setRepartidor(datosRepartidor.data)
        }
        getRepartidor()
    },[repartidor])
    
    return(
        <div>
            <div key={repartidor._id} className="mt-5">
                <div className="repartidor-codigo container mt-5 text-center">
                    <h2>REPARTIDOR</h2>
                    <h3>{repartidorurl}</h3>
                </div>
                <div className="container text-center mt-5">
                    <div>
                        <h2>Tus PEDIDOS:</h2>
                    </div>
                    <div>
                        {
                            repartidor.map(res=>(
                                <div className="" key={res._id}>
                                    <div className="row mt-5 repartidor-vermas container">
                                        <div className="col-6">
                                            <h3 className="">{res.codenv}</h3>
                                        </div>
                                        <div className="col-6">
                                            <Link to={`/repartidor/mas/${res.codenv}`} className='btn btn-warning'>Ver Mas</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}