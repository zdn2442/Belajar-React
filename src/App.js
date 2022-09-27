import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import User from './pages/user';
import UserDetail from './pages/userDetail';
import Error from './pages/error';
import CreateUser from './pages/createUser'
import UpdateUser from './pages/updateUser'
import Home from './pages/home'
import Admin from './pages/admin'
import Dashboard from './pages/dashboard'
import About from './pages/about'
import Buku from './pages/buku'

function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/admin/:id/detail" element={<UserDetail/>}/>
        <Route path="/admin/create" element={<CreateUser/>}/>
        <Route path="/admin/update/:id" element={<UpdateUser/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/buku" element={<Buku/>}/>
        <Route path="/admin/about" element={<About/>}/>
        <Route path="/404" element={<Error replace={true}/>}/>
      </Routes>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;