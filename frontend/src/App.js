import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import { Update } from './component/Update';
import { Sucursal } from './component/Sucursal'
import { Actualizar } from './component/Actualizar';
import { Repartidor } from './component/Repartidor';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/update' element={ <Update/> } />
          <Route path='/sucursal' element={ <Sucursal/> } />
          <Route path='/edit/:id' element={ <Actualizar/> }/>
          <Route path='/repartidor/:repartidorurl' element={ <Repartidor/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

