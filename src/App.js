import React  from "react";
import {Routes, Route, Link, NavLink, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Setting from './pages/setting';
import About from './pages/about';
import Detail from './pages/detail';
import Profile from "./pages/Profile";
import Phone from "./pages/Phone";
import Komputer from "./pages/komputer";
import Iphone from "./pages/setting/komputer/Iphone";
import Samsung from "./pages/setting/komputer/Samsung";
import Lenovo from './pages/setting/komputer/Lenovo';
import NotFound from './pages/notFound'

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
        <Route path="/setting" element={<Setting/>}>
          <Route path="/setting/komputer" element={<Komputer/>}>
            <Route path="lenovo" element={<Lenovo/>} />
            <Route path="iPhone" element={<Iphone/>} />
            <Route path="samsung" element={<Samsung/>} />
          </Route>
          <Route path="/setting/phone" element={<Phone/>}/>
          <Route path="/setting/profile" element={<Profile/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:id/:nama" element={<Detail/>}/>
        <Route path="/404" element={<NotFound/>}></Route>
        <Route path="*" element={<Navigate to="404" replace/>}></Route>
      </Routes>
    </React.Fragment>   
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;