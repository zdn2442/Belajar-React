import React  from "react";
import Layout from './module/layout'
import "./style/style.css"
import Button from './module/button'




function App() {
  return(
    <div className="container">
      <h1>Latihan Props kedua</h1>
      <div className="content">
        <Layout title={"nomor 1"}>
        <h1>DUAR</h1>
      </Layout>
      <Layout title={"nomor 2"}>
        <h1>DUAR DUAR</h1>
      </Layout>
      <Layout title={"nomor 3"}>
        <h1>DA DA DA DA DA!!</h1>
      </Layout>
      </div>
      <center>
         <Button onClick={
          () => {
            console.log("Berhasil menyimpan draf");
          }
         } color="blue" title={"Save"}/>
      <Button 
      onClick={
        () => {
          console.log("Gagal menyimpan draf");
        }
       } 
       disabled={true}
       title={"Cancel"}/>
      <Button color="green" title={"Update"}/>
      </center>
       
      
      
      
    </div>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;