import React  from "react";
import RefTutor from './module/useRef'
import ReducerTutor from './module/useReducer'
import LayoutEff from './module/useLayoutEffect';
import Optimize from './optimize';


function App() {

  return(
    <React.Fragment>
      <h1></h1>
      {/* <RefTutor/> */}
      <Optimize/>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;