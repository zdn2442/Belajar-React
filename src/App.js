// import logo from './logo.svg';
// import './App.css';
import "./style/style.css";
import React from "react";
import Identitas from "./module/siswa";
import Nilai from "./module/nilai";
import DataSiswa from "./module/dataSiswa";

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
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);
  const [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "kipli",
      kelas: "XI RPL",
      nilai: 95,
    },
    {
      nama: "jono",
      kelas: "XI RPL",
      nilai: 70,
    },
    {
      nama: "isep",
      kelas: "XI RPL",
      nilai: 65,
    },
    {
      nama: "arene",
      kelas: "XI RPL",
      nilai: 100,
    },
  ]);
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="section">
        <div className="bungkus">
          <Identitas nama={"Dudul"} kelas={"XII RPL"} nilai={100} />
          <Identitas />
        </div>
        <Nilai nama={"Dudul"} data={data} />
        <DataSiswa data={dataSiswa} />
      </section>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
