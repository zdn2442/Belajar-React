import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Admin from './pages/admin'
import second from './pages/'

function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </React.Fragment>
  )
     
}

export default App;
