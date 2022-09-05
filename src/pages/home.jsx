import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const [msg, setMsg] = React.useState('belum login')
    const navigate = useNavigate()
    const handleLogin = () => {
        setMsg('proses login')
        return navigate('about', {replace:true})
    }
   return(
    <div>
        <p>ini adalah pages Home</p>
        <p>{msg}</p>
        <button onClick={handleLogin}>Login</button>
    </div>
   )
}