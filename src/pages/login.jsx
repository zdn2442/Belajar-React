import Button from '../komponen/button';

export default function Login(){
    return (
        <div>
            <h1>Login Page</h1>
           <div className="flex">
           <Button title={'Register'}/>
           <Button title={'Login'}/>
           </div>
        </div>
    )
}