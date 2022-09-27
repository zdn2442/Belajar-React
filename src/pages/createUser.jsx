import React from "react";
import Input from "../module/input";
import Button from "../module/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateUser() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [books, setBooks] = React.useState({
    kode_penulis: "",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: Number,
    tahun_terbit_buku: Number,
    sinopsis: "",
  });
  const handleChange = (e) => {
    setBooks((books) => {
      return {
        ...books,
        [e.target.name]: e.target.value,
      };
    });
    if (e.target.value !== "") {
      setErrors({
        ...errors,
        [e.target.value]: true,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(books);
    try {
      setIsLoading(true);
      const response = await axios.post("https://api-react-2.herokuapp.com/api/perpustakaan", books);
      setIsLoading(false);
      // return navigate('/user')
      alert("Berhasil Menyimpan");  
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert("Error!!");
    }
    setBooks(() => {
      return {
        kode_penulis: "",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: Number,
        tahun_terbit_buku: Number,
        sinopsis: "",
      };
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setBooks(() => {
      return {
        kode_penulis: "",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: Number,
        tahun_terbit_buku: Number,
        sinopsis: "",
      };
    });
  };
  return (
    <div>
      <h1>Tambah User</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          value={books.kode_penulis} 
          label={"Kode Penulis"} 
          placeholder="Kode Penulis" 
          name={"kode_penulis"} 
          onChange={handleChange}  
        />
        <Input 
          value={books.judul_buku} 
          label={"Judul"} 
          placeholder="Judul" 
          name={"judul_buku"} 
          onChange={handleChange} 
        />
        <Input value={books.nama_pengarang} label={"Nama Pengarang"} placeholder="Nama Pengarang" name={"nama_pengarang"} onChange={handleChange} isError={errors?.nama_pengarang} textError={"tolong diisi"} />
        <Input value={books.nama_penerbit_buku} label={"Nama Penerbit"} placeholder="Nama Penerbit" name={"nama_penerbit_buku"} onChange={handleChange} isError={errors?.nama_penerbit_buku} textError={"tolong diisi"} />
        <Input value={books.ketebalan_buku} label={"Ketebalan Buku"} placeholder="Ketebalan Buku" name={"ketebalan_buku"} onChange={handleChange} isError={errors?.ketebalan_buku} textError={"tolong diisi"} />
        <Input value={books.tahun_terbit_buku} label={"Tahun diterbitkannya Buku"} placeholder="tahun diterbitkannya Buku" name={"tahun_terbit_buku"} onChange={handleChange} isError={errors?.tahun_terbit_buku} textError={"tolong diisi"} />
        <Input value={books.sinopsis} label={"Sinopsis"} placeholder="Sinopsis" name={"sinopsis"} onChange={handleChange} isError={errors?.sinopsis} textError={"tolong diisi"} />
        <Button title={isLoading ? "Saving Data" : "Save"} />
        <Link to={"/admin/buku"} className="px-5">
          <Button title={"Back to user"} />
        </Link>
        <Button title={"Reset"} onClick={handleReset} />
      </form>
    </div>
  );
}
