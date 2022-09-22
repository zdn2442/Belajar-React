import React from "react";
import Input from "../module/input";
import Button from "../module/button";
import axios from "axios";
import {useNavigate, Link, useParams} from 'react-router-dom'
import Select from './select'

export default function UpdateUser() {
    let navigate = useNavigate()
    let {id} = useParams()
  const [isLoading, setIsLoading] = React.useState(false);
  const [books, setbooks] = React.useState({
    kode_penulis: "55555",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: Number,
    tahun_terbit_buku: Number,
    sinopsis: ""
  });
  const handleChange = (e) => {
    setbooks((books) => {
      return {
        ...books,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(books);
    try {
        setIsLoading(true)
        const response = await axios.put(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=55555`, books)
        setIsLoading(false)
        //  return navigate('/admin/buku')
        alert('Berhasil Memperbarui')
    } catch (err) {
        console.log(err);
        setIsLoading(false)
        alert('Error!!')
    }
    
  }
  const getDetailUser = async() => {
    try {
        const response  = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=55555`)
        console.log( 'response => ',response.data);
        const dataUser = response.data.data
        console.log(dataUser);
        setbooks(() => {
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
    } catch (error) {
        
    }
  }
  React.useEffect(() => {
    getDetailUser(id)
  }, [])
  
  return (
    <div>
      <h1>Update Buku dengan id {id}</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          value={books.judul_buku} 
          label={"Perbarui Judul"} 
          placeholder="Perbarui Judul" 
          name={"judul_buku"} 
          onChange={handleChange} 
        />
        <Input 
          value={books.nama_pengarang} 
          label={"Perbarui Nama Pengarang"} 
          placeholder="Perbarui Nama Pengarang" 
          name={"nama_pengarang"} 
          onChange={handleChange} 
        />
        <Input 
          value={books.nama_penerbit_buku} 
          label={"Perbarui Nama Penerbit"} 
          placeholder="Perbarui Nama Penerbit" 
          name={"nama_penerbit_buku"} 
          onChange={handleChange} 
        />
        <Input 
          value={books.ketebalan_buku} 
          label={"Perbarui Ketebalan Buku"} 
          placeholder="Perbarui Ketebalan Buku" 
          name={"ketebalan_buku"} 
          onChange={handleChange} 
        />
        <Input 
          value={books.tahun_terbit_buku} 
          label={"Perbarui Tahun diterbitkannya Buku"} 
          placeholder="Perbarui Tahun diterbitkannya Buku" 
          name={"tahun_terbit_buku"} 
          onChange={handleChange} 
        />
        <Input 
          value={books.sinopsis} 
          label={"Perbarui Sinopsis"} 
          placeholder="Perbarui Sinopsis" 
          name={"sinopsis"} 
          onChange={handleChange} 
        />
        <Button title={isLoading ? 'Updating Data' : 'Update'} />
        <Link to={'/admin/buku'} className='pl-5'>
          <Button title={'Back to user'}/>
        </Link>
        
      </form>
    </div>
  );
}
