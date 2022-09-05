import Button from '../komponen/button';
import {useNavigate} from 'react-router-dom';

export default function Login(){
    let navigate = useNavigate()
    return (
        <div>
            <h1>Login Page</h1>
           <div className="flex">
           <Button title={'Register'} 
           onClick={() => {
                return navigate('/register', {replace:true})
            }}/>
           <Button title={'Login'}/>
           </div>
        </div>
    )
}