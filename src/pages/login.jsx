import Button from '../komponen/button';
import {useNavigate} from 'react-router-dom';

export default function Login(){
    let navigate = useNavigate()
    const handleRegister = () =>{
            return navigate('/register', {replace:true})
    }
    const handleLogin = () =>{
        return navigate('', {replace:true})
}
    return (
        <div>
            <h1>Login Page</h1>
           <div className="flex">
           <button 
           className="bg-green-500 text-white px-3 py-1 rounded-lg"
           onClick={handleRegister}
           >Register</button>
           <button 
           className="bg-green-500 text-white px-3 py-1 rounded-lg"
           onClick={handleRegister}
           >Login</button>
           </div>
        </div>
    )
}