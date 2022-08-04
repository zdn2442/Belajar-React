import React  from "react";
import Layout from './module/layout'
import "./style/style.css"
import Button from './module/button'
import Input from './module/input'


export default function App() {
  const [values, setValues] = React.useState(
      {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
      }
    );
    const handleChange = (event) => {
      console.log('jalan gk?');
      setValues(
        (values) => {
          return{
            ...values,
            [event.target.name] : event.target.value
          }
        }
      )
    }
  return(
    <React.Fragment>
      <div className="container">
        <div>
          <form>
            <Input
              name="username"
              value={values.username} 
              label={'Username'} 
              placeholder="Username"
              onChange = {
                (event) => {
                  event.preventDefault();
                  console.log('ok jalan');
                  console.log(event);
                  setValues(
                    (values) => {
                      return{
                        ...values,
                        username: event.target.value,
                      }
                    }
                  )
                }
              }
            />
            <Input
              name="email"
              value={values.email}
              label={'Email'}
              placeholder="Email"
              onChange={handleChange}
              
            />
            <Input
              name="password"
              value={values.password} 
              label={'Password'} 
              placeholder="Password"
              onChange={handleChange}
              
            />
            <Input
              name="confirmPassword"
              value={values.confirmPassword} 
              label={'Confirm Password'} 
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <Button title={'Save'} color='lightGreen'/>
          </form>
        </div>
        <div 
        style={
          {
            width:"40%",
            border:"1px solid black",
            height:"40vh",
          }
        }
        >
          <p>Username : {values?.username}</p>
          <p>Email : {values?.email}</p>
          <p>Password : {values?.password}</p>
          <p>Confirm Password : {values?.confirmPassword}</p>
        </div>
      </div>
      
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