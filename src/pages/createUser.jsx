import React from "react";
import Input from "../module/input";
import Button from "../module/button";
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom'
import Select from './select'

export default function CreateUser() {
    let navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('')
  const [error, setError] = React.useState({})
  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(users);
    try {
        setIsLoading(true)
        const response = await axios.post('https://belajar-react.smkmadinatulquran.sch.id/api/users/create', users)
        setIsLoading(false)
        // return navigate('/user')
    } catch (err) {
        console.log(err);
        setError(err?.response?.data?.errors)
        setIsLoading(false)
        setErrorMessage('Error Error Error')
    } 
  }
  console.log("error semua", error);
  return (
    <div>
      <h1>Tambah User</h1>
      <p className="text-red-500">
        {errorMessage}
      </p>
      <form onSubmit={handleSubmit}>
        <Input 
          value={users.username} 
          label={"username"} 
          placeholder="username" 
          name={"username"} 
          onChange={handleChange} 
        />
        <p className="text-red-500">{error?.name?.[0]}</p>
        <Input 
          value={users.name} 
          label={"name"} 
          placeholder="name" 
          name={"name"} 
          onChange={handleChange} 
        />
        <p className="text-red-500">{error?.email?.[0]}</p>
        <Input 
          value={users.email} 
          label={"email"} 
          type="email" 
          placeholder="email" 
          name={"email"} 
          onChange={handleChange} 
        />
        <p className="text-red-500">{error?.username?.[0]}</p>
        <Select
          value={users.jenis_kelamin}
          label={'jenis_kelamin'}
          placeholder="jenis_kelamin"
          name={'jenis_kelamin'}
          onChange={handleChange}
        >
          <option>Pilih</option>
          <option value={'laki-laki'}>laki-laki</option>
          <option value={'perempuan'}>perempuan</option>
        </Select>
        <p className="text-red-500">{error?.username?.[0]}</p>
        <Input 
          value={users.password} 
          label={"password"} 
          placeholder="password" 
          name={'password'} 
          onChange={handleChange}
        />
        <p className="text-red-500">{error?.username?.[0]}</p>
        <Input 
          value={users.password_confirmation} 
          label={"confirm password"} 
          placeholder="confirm password" 
          name={'password_confirmation'} 
          onChange={handleChange}
        />
        <Button title={isLoading ? 'Saving Data' : 'Save'} />
        <Link to={'/user'} className='pl-5'>
          <Button title={'Back to user'}/>
        </Link>
        
      </form>
    </div>
  );
}
