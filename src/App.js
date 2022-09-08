import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import User from './pages/user';
import UserDetail from './pages/userDetail';
import Error from './pages/error';

function App() {
  return(
    <React.Fragment>
      <h1 className="bg-red-500">API Training</h1>
      <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id/detail" element={<UserDetail/>}/>
        <Route path="*" element={<Error replace={true}/>}/>
      </Routes>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;