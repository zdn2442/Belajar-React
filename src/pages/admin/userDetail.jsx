import {useParams} from 'react-router-dom'

export default function UserDetail() {
  let {nama, kelas} = useParams()
  return (
    <div>
      <h1>User Detail </h1>
      <div className="mt-5">Name : {nama}</div>
      <div>Class : {kelas}</div>
    </div>
  );
}
