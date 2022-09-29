import React from "react";
import Button from "../module/button";
import { Outlet, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Admin() {
  let navigate = useNavigate();
  let {id} = useParams()
  const handleDashboard = () => {
    return navigate("/admin/dashboard");
  };
  const handleBuku = () => {
    return navigate("/admin/buku");
  };
  const handleAbout = () => {
    return navigate("/admin/about");
  };
  const [books, setBook] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const getBookHandle = async () => {
    try {
      const response = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=55555`);
      setBook(response.data.data.data);
      setPage(response.data.page);
      const dataUser = response.data.data
    //   console.log(response.data);
      setBook(() => {
        return{
            id: dataUser?.id,
            kode_penulis: dataUser?.kode_penulis,
            judul_buku: dataUser?.judul_buku,
            nama_pengarang: dataUser?.nama_pengarang,
            nama_penerbit_buku: dataUser?.nama_penerbit_buku,
            ketebalan_buku: dataUser?.ketebalan_buku,
            tahun_terbit_buku: dataUser?.tahun_terbit_buku,
            sinopsis: dataUser?.sinopsis
        }
    })
    } catch (err) {}
  };
  React.useEffect(() => {
    getBookHandle();
  }, [page]);
  return (
    <React.Fragment>
      <div className="flex flex-row">
        <div className="basis-1/5 flex flex-col">
          <Button title={"Dashboard"} onClick={handleDashboard} />
          <Button title={"Buku"} onClick={handleBuku} />
          <Button title={"About"} onClick={handleAbout} />
        </div>
        <div className="basis-3/4">
          <h1 className="text-center">DETAIL BUKU</h1>
          <div className="w-1/2">
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Kode penulis : {books?.kode_penulis}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Judul : {books?.judul_buku}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Pengarang : {books?.nama_pengarang}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Penerbit : {books?.nama_penerbit_buku}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Ketebalan Buku : {books?.ketebalan_buku}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Diterbitkan pada tahun {books?.tahun_terbit_buku}</p>
            <p className="my-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500">Sinopsis : {books?.sinopsis}</p>
          </div>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
