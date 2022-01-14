import React, { useState } from 'react'
import axios from 'axios'

export const Update = () =>{

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

    const [codenv,setCodenv] = useState(false)
    const [localidad,setLocalidad] = useState(false)
    const [repartidor,setRepartidor] = useState(false)

    const handleInput = (e) =>{

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setForm({
            ...form,
            [e.target.name]:value,
        })
    }

    const enviarDato = async() =>{

        if(form.codenv.search('#')){
            if(form.codenv.indexOf('#') === 1){
                setCodenv(true)
                return
            }
            setCodenv(true)
            return
        }
        if(form.localidad.length < 4){
            setLocalidad(true)
            return
        }
      
        if(form.repartidor.length != 10){
            setRepartidor(true)
            return
        }
        await axios.post('http://localhost:27017/datospaquetes', form)        
        console.log(form)
        window.location.href ='/update'
    }

    return(
        <div>
            <div className='text-center container mt-3'>
                <h2>Cargar DATO</h2>
            </div>
            <div className='container'>
                <label htmlFor='formControlInput' className="form-label">Fecha de emision</label>
                <input type="date" className="form-control" id="formControlInput" placeholder="dd/mm/yy" onChange={handleInput} name='emision'/>
                <label htmlfor="formControlInput" className="form-label">Codigo de Envio</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="#E1789" onChange={handleInput} name='codenv' required/>
                <p className='text-danger'>{codenv ? 'debe incluir # al principio o falta #' : 'obligatorio'}</p>
                <label htmlfor="formControlInput" className="form-label">Telefono contacto del cliente</label>
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
                <label htmlfor="formControlInput" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="Direccion y Numero" name='direccion' onChange={handleInput}/>
                <label htmlfor="formControlInput" className="form-label">Localidad</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="Localidad" name='localidad' onChange={handleInput}/>
                <p className='text-danger'>{localidad ? 'no debe incluir numero':'obligatorio'}</p>
                <label htmlfor="formControlInput" class="form-label">Provincia</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="Provincia" name='provincia' onChange={handleInput}/>    
            </div>
            <div className='container'>
                <label htmlfor="formControlInput" className="form-label">Repartidor a ASIGNAR</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="#D42727117C" name='repartidor' onChange={handleInput}/>
                <p className='text-danger'>{repartidor ? "debe contener 9 Digitos":'obligatorio'}</p>
                <p className='text-info'>Debe incluir la siguiente estructura <br/> D-DNI-EMPRESA</p>
            </div>
            <div className='container mb-4'>
                <div className='text-center mb-5'>
                    <button type='submit' className='btn btn-success' onClick={()=> enviarDato()}>Cargar DATO </button>
                </div>
            </div>
        </div>
    )
}