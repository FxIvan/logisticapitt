import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import { Update } from './component/Update';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/update' element={ <Update/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

export default App;
