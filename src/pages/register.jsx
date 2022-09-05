import { useNavigate } from "react-router-dom";
import Button from "../komponen/button";

export default function Register() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Register Page</h1>
      <button className="bg-green-500 text-white px-3 py-1 rounded-lg" onClick={() => {
        return navigate('/',{replace:true} )
      }}>
        Kembali ke Login
      </button>
    </div>
  );
}
