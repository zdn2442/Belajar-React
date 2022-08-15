import React  from "react";
import Card from './Card';


function App() {
  const [count, setCount] = React.useState(0)
  const [warna, setWarna] = React.useState("white")
  return(
    <React.Fragment>
      <Card count={count} setCount={setCount} warna={warna} setWarna={setWarna}/>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;