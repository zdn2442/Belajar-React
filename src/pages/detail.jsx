import {useParams} from 'react-router-dom'
export default function Detail() {
    let {id, nama} = useParams()
    return(
        <div>
            <p>ini adalah detail</p>
            <p>id file ini adalah {id}</p>
            <p>namanya {nama}</p>
        </div>
    )
}