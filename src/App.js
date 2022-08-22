import React from "react";
import "./style/style.css";
import Button from "./module/button";
import Input from "./module/input";
import Card from "./module/card";
import InputLagi from "./module/input2";
import InputJuga from "./module/input3";
import ResetButton from "./module/resetButton";
import Textarea from './module/textarea';

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    ttl: "",
    gender: "",
    textarea:""
  });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [popError, setPopError] = React.useState({})

  const handleChange = (event) => {
    console.log("jalan gk?");
    setValues((values) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
    if (event.target.value !== "") {
      setErrors({
        ...errors,
        [event.target.value]: true,
      });
    }
    if (event.target.value !== "") {
      setPopError({
        ...popError,
        [event.target.value]: true,
      });
    }
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }
    if (e.target.value !== ""){
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
    
  };
  // if (e.target.value === "") {
  //   setPopError((popError) => {
  //     return {
  //       ...popError,
  //       [e.target.name]: true,
  //     };
  //   });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit");

    values.id = new Date().getTimezoneOffset();
    setData((data) => {
      return [...data, values];
    });
    setValues(() => {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        ttl: "",
        gender: "",
        textarea:""
      };
    });
  };

  console.log("error", errors);

  return (
    <React.Fragment>
      <div className="container">
        <div className="content satu">
          <form onSubmit={handleSubmit}>
            <p>{setPopError}</p>
            <h5>Buat Catatan</h5>
            <Input 
            isError={errors?.email} 
            textError={"Please fill this correctly"} 
            name="email" 
            value={values.email} 
            placeholder="Judul" 
            onChange={handleChange} 
            onBlur={handleBlur} 
            />
            <Textarea
            isError={errors?.textarea}
            textError={"Please fill this correctly"} 
            name="textarea"
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={values.textarea}
            />
            <Button title={"Save"} onSubmit={handleSubmit}/>
            
          </form>
          <div>
          <div>
            {/* <h2>Confirmation Data</h2> */}
            <Card data={data} setData={setData} />
          </div>
        </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}
