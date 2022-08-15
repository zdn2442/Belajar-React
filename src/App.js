import React  from "react";
import Card from './Card';


function App() {
  const [count, setCount] = React.useState(0)

  return(
    <React.Fragment>
      <Card count={count} setCount={setCount}/>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;