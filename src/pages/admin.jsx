import {NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom'

export default function Admin() {
  let navigate = useNavigate()
  let location = useLocation()
  let path = location.pathname.split("/")[1];
  return (
    <div className="grid grid-cols-5 gap-5 h-screen w-screen">
      <div className="col-span-1 ">
      <nav className="flex flex-col items-start">
        <div className="">
          <NavLink className={'p-5'} to={"/admin/dashboard"} >Dashboard</NavLink>
          <NavLink className={'p-5'} to={"/admin/kelas"} >Kelas</NavLink>
          <NavLink className={'p-5'} to={"/admin/user"} >User</NavLink>
      </div>
      <div className="mx-3">
        <Outlet />
      </div>
      <button 
      className="bg-green-500 text-white px-3 py-1 rounded-lg"
      onClick={() => {
        return navigate('/', {replace:true})
      }}
      >
        Logout
      </button>
          
        </nav>
      </div>
      <div className="col-span-4 "></div>
    </div>
  );
}
