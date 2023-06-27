import React from "react";
import Register from "./components/register";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Success from "./components/Success";



function App() {

  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/register/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      )
}

export default App
