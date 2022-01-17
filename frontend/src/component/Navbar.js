import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () =>{
    return(
        <div>
            <div className='text-center mt-3 titulo-navbar'>
                <h1><Link to='/'>Sitema PITT</Link></h1>
            </div>
            <div className='container mt-3'>
                    <h3>Sucursal: #5</h3>
                    <h3>Direccion: Avenida Mitre 1759</h3>
                    <h3>Localidad: Quilmes</h3>
            </div>
        </div>
    )
}