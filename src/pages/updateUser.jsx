import React from "react";
import Input from "../module/input";
import Button from "../module/button";
import axios from "axios";
import {useNavigate, Link, useParams} from 'react-router-dom'
import Select from './select'

export default function UpdateUser() {
    let navigate = useNavigate()
    let {id} = useParams()
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async() => {
    console.log(users);
    try {
        setIsLoading(true)
        const response = await axios.put(`https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`, users)
        setIsLoading(false)
         return navigate('/user')
    } catch (err) {
        console.log(err);
        setIsLoading(false)
        alert('Error!!')
    }
  }
  const getDetailUser = async() => {
    try {
        const response  = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`)
        console.log( 'response => ',response.data);
        const dataUser = response.data.data
        console.log(dataUser);
        setUsers(() => {
            return{
                username: dataUser.username,
                email: dataUser.email,
                name: dataUser.name,
                jenis_kelamin: dataUser.jenis_kelamin,
            }
        })
    } catch (error) {
        
    }
  }
  React.useEffect(() => {
    getDetailUser(id)
  }, [])
  
  return (
    <div>
      <h1>Update User dengan id {id}</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          value={users.username} 
          label={"username"} 
          placeholder="username" 
          name={"username"} 
          onChange={handleChange} 
        />
        <Input 
          value={users.name} 
          label={"name"} 
          placeholder="name" 
          name={"name"} 
          onChange={handleChange} 
        />
        <Input 
          value={users.email} 
          label={"email"} 
          type="email" 
          placeholder="email" 
          name={"email"} 
          onChange={handleChange} 
        />
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
        <Button title={isLoading ? 'Updating Data' : 'Update'} />
        <Link to={'/user'} className='pl-5'>
          <Button title={'Back to user'}/>
        </Link>
        
      </form>
    </div>
  );
}
