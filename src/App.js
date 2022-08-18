import React  from "react";
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './pages/home';
import Setting from './pages/setting';
import About from './pages/about';
import Detail from './pages/detail';

function App() {
  return(
    <React.Fragment>
      <section className="space-x-5 border py-5">
        {/* <Link to={"/"} >Home</Link>
        <Link to={"/setting"} >Setting</Link>
        <Link to={"/about"} >About</Link> */}
        <NavLink 
          exact 
          to="/"
          style={({ isActive }) => 
            isActive 
              ? {
                  color: "red"
                } 
              : undefined
            }
          >
            Home
        </NavLink>
        <NavLink 
          exact 
          to="/setting"
          className={({isActive}) =>
              isActive ? 'text-white border p-2 bg-red-500' 
              : undefined
            }
          // style={({ isActive }) => 
          //   isActive 
          //     ? {
          //         color: "red"
          //       } 
          //     : undefined
          //   }
          >
            Settings
        </NavLink>
        <NavLink 
          exact 
          to="/about"
          style={({ isActive }) => 
            isActive 
              ? {
                  color: "red"
                } 
              : undefined
            }
          >
            About
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:id/:nama" element={<Detail/>}/>
      </Routes>
    </React.Fragment>   
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;