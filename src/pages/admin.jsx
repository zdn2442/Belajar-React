export default function Admin() {
  return (
    <div className="grid grid-cols-5 gap-5 h-screen w-screen">
      <div className="col-span-1 ">
        <nav className="flex flex-col items-start">
          <Link to={"/dashboard"} >Home</Link>
          <Link to={"/kelas"} >Setting</Link>
          <Link to={"/user"} >About</Link>
        </nav>
      </div>
      <div className="col-span-4 "></div>
    </div>
  );
}
