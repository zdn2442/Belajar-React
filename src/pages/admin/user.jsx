import React from "react";
import {Link, useNavigate} from 'react-router-dom'

export default function User() {
  let navigate = useNavigate()
  const [user, setUser] = React.useState([
    {
      name: "akbar",
      kelas: "XI RPL",
    },
    {
      name: "bayu",
      kelas: "XI RPL",
    },
    {
      name: "hilmi",
      kelas: "XI RPL",
    },
    {
      name: "nabil",
      kelas: "XI RPL",
    },
    {
      name: "rauza",
      kelas: "XI TKJ",
    },
  ]);

const handleDetail = () => {
  setUser(
    () => {
      return navigate('/user/name/kelas', {replace:true})
    }
  )
}

  return (
    <div>
      <h1>User Page</h1>
      <div className="flex flex-col">
       <Link to="/user/akbar/XI RPL">akbar</Link>
       <Link to="/user/bayu/XI RPL">bayu</Link>
       <Link to="/user/hilmi/XI RPL">hilmi</Link>
       <Link to="/user/nabil/XI RPL">nabil</Link>
       <Link to="/user/rauza/XI TKJ">rauza</Link>
      </div>
    </div>
  );
}
