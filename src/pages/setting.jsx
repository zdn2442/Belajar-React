import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Setting() {
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname.split("/")[1];
    let cekPath = location.pathname.split("/")[2];
    console.log('lokasi -->' ,location);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <Link to={`/${path} /komputer`}>Komputer</Link>
        <Link to={`/${path} /profile`}>Profile</Link>
        <Link to={`/${path} /phone `}>Phone</Link>
      </div>
      <div className="mx-3">
        <Outlet />
      </div>
      <button 
      onClick={() => {
        return navigate(-1)
      }}
      >
        back
      </button>
    </div>
  );
}
