import React from "react";
import Button from "../../module/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Input from "../../module/input";
import {loginProses} from '../../api/auth'

export default function Login() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false)
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setIsLoading(true);
        const response = await loginProses(payload);
        const data = response.data;
        Cookies.set("myapps_token", data?.token);
        return navigate("/user", { replace: true });
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
    console.log("running", payload);
  };
  return (
    <div className=" w-1/3 h-60 bg-gradient-to-r from-sky-500 to-blue-600 rounded-br-lg">
      <h1 className="mb-5 text-white h-10 py-auto font-bold text-2xl">Login Card</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          name="email" 
          placeholder="Email" 
          type="email" 
          onChange={handleChange} 
        />
        <Input 
          name="password" 
          placeholder="Password" 
          type="password" 
          onChange={handleChange} 
        />
        <div className="mt-5">
          <Button
            color="blue"
            title={isLoading ? 'Sign In' : 'Login'}
          />
        </div>
      </form>
    </div>
  );
}
