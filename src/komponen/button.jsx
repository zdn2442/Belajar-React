import {useNavigate} from 'react-router-dom';
export default function Button({title, ...props}){
    let navigate = useNavigate()
    return (
        <button className="bg-green-500 text-white px-3 py-1 rounded-lg">{title}</button>
    )
}