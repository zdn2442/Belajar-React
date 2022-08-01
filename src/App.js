// import logo from './logo.svg';
// import './App.css';
import Header from "./Component/header";
import React  from "react";
import { Input, Button } from "./Component/named";
import Produk from './module/produk'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="tulisan">
//           Loading...
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
       
//         <p className="tulisan 3">------------------------:v-------------------</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// function Contoh() {
//   return (
//     <div>
//       <h1>Hello Another World!</h1>
//     </div>
//   )
// }

// export default Contoh

function App() {
  let [produk, setProduk] = React.useState([
    {
      jenis: "Elektronik",
      produk: "Handphone",
      brand: [
        {
          nama: "Samsung",
          harga: "Rp. 1.200.000",
        },
        {
          nama: "Xiaomi",
          harga: "Rp. 1.100.000",
        },
      ],
    },
    {
      jenis: "Tranportasi",
      produk: "Mobil",
      brand: [
        {
          nama: "Toyota",
          harga: "Rp. 1.000.000.000",
        },
        {
          nama: "Honda",
          harga: "Rp. 150.000.000",
        },
      ],
    },
  ])
  return(
    <React.Fragment>
      <h1>Latihan 01</h1>
      <Produk produk={produk}/>
      
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;