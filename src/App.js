import React  from "react";
import "./style/style.css"
import Button from './module/button'
import Input from './module/input'
import Card from './module/card'


export default function App() {
  const [values, setValues] = React.useState(
      {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
      }
    );

      const [data, setData] = React.useState(
        []
      )
      const [errors, setErrors] = React.useState(
        {}
      )

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
      if (event.target.value !== ""){
        setErrors(
          {
            ...errors,
            [event.target.value] : true
          }
        )
      }
    }

    const handleBlur = (e) => {
      e.preventDefault();
      if (e.target.value === "") {
        setErrors(
        (errors) => {
          return{
            ...errors,
            [e.target.name] : true,
          }
        }
      )
      }
      
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form Submit');
      
      values.id = new Date().getTimezoneOffset()
      setData(
        (data) => {
          return [...data, values]
        } 
      )
      setValues(() => {
        return{
          username:"",
          email:"",
          password:"",
          confirmPassword:"",
        }
      });
    }

    console.log('error', errors);

  return(
    <React.Fragment>
      <div className="container">
        <div className="content satu">
          <form
          onSubmit={handleSubmit}
          >
            <Input
              isError={errors?.username}
              textError={'Please fill this correctly'}
              name="username"
              value={values.username} 
              label={'Username'} 
              placeholder="Username"
              onBlur={handleBlur}
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
              isError={errors?.email}
              textError={'Please fill this correctly'}
              name="email"
              value={values.email}
              label={'Email'}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={errors?.password}
              textError={'Please fill this correctly'}
              name="password"
              value={values.password} 
              label={'Password'} 
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              isError={errors?.confirmPassword}
              textError={'Please fill this correctly'}
              name="confirmPassword"
              value={values.confirmPassword} 
              label={'Confirm Password'} 
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
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
        } className='content dua'
        >
          <h2>Confirmation Data</h2>
          <Card data={data} setData={setData}/>
         
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