import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Admin from './pages/admin'

function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Link to={"/dashboard"} >Home</Link>
          <Link to={"/kelas"} >Setting</Link>
          <Link to={"/user"} >About</Link>
        </Route>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </React.Fragment>
  )
     
}

export default App;
