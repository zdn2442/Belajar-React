import React  from "react";
import Layout from './module/layout'
import "./style/style.css"
import Button from './module/button'


export default function App() {
  let [name, setName]=React.useState('')
  let [rmail, setEmail]=React.useState('')
  let [password, setPassword]=React.useState('')
  let [confirmPassword, setConfirmPassword]=React.useState('')
  return(
    <React.Fragment>
      <form>
        tes
      </form>
    </React.Fragment>
  )
}




// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1)
//   }
//   const handleKurang = () => {
//     setCount(count - 1)
//   }
//   const handleReset = () => {
//     setCount(0)
//   }
//   return(
//     <React.Fragment>
//       <h1>Counting from {count}</h1>
//       <Button onClick={handleTambah} title={"Tambah"} color="blue"/>
//       <Button 
//         onClick={handleKurang} 
//         title={"Kurang"}
//         disabled={count <=0 ? true : false} />
//       <Button 
//         onClick={handleReset}
//         title={"Reset"} 
//         color="white"/>
//     </React.Fragment>
//   )
// }

// //JSX harus dibungkus dalam satu element parent

// export default App;