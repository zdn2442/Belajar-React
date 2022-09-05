import {useParams, useNavigate} from 'react-router-dom'
export default function Detail() {
    let {id, nama} = useParams()
    let navigate = useNavigate()
    return(
        <div>
            <p>ini adalah detail</p>
            <p>id file ini adalah {id}</p>
            <p>namanya {nama}</p>
            <button
            onClick={() => {
                return navigate('/', {replace:true})
            }}
            >
                Home
            </button>
        </div>
    )
}