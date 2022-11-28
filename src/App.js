import React  from "react";
import Login from './module/login';
import {Routes, Route} from 'react-router-dom';


function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login/>}/>
       
      </Routes>
      
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;