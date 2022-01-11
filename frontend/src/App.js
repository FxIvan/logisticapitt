import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import { Update } from './component/Update';
import { Sucursal } from './component/Sucursal'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/update' element={ <Update/> } />
          <Route path='/sucursal' element={ <Sucursal/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

