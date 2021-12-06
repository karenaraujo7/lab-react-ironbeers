import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home'


function App() {
  return (
    <div>
      <Navbar/>

      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
