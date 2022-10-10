import React from "react";
import Input from "../../module/input";
import Button from "../../module/button";
import {useNavigate, Link} from 'react-router-dom'
import {createArtikel} from '../../api/artikel'
import Swal from 'sweetalert2';

export default function CreateArtikel() {
    let navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('')
  const [error, setError] = React.useState({})
  const [Art, setArt] = React.useState({
    judul:'',
    thumbnail:'',
    artikel:'',
    imagePreview:null
  });
  const handleChange = (e) => {
    setArt((Art) => {
      return {
        ...Art,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(Art);
    try {
        setIsLoading(true)
        const response = await createArtikel(Art)
        setIsLoading(false)
        // return navigate('/user')
    } catch (err) {
        console.log(err);
        setError(err?.response?.data?.errors)
        setIsLoading(false)
        setErrorMessage('Error Error Error')
    } 
  }
  console.log("error semua", error);
  return (
    <div>
      <h1>Tambah User</h1>
      {/* <p className="text-red-500">
        {errorMessage}
      </p> */}
      <form onSubmit={handleSubmit}>
      <p className="text-red-500">{error?.judul?.[0]}</p>
        <Input 
          value={Art.judul} 
          label={"judul"} 
          placeholder="judul" 
          name={"judul"}
          onChange={handleChange} 
        />
        <p className="text-red-500">{error?.thumbnail?.[0]}</p>
        <Input 
          value={Art?.file} 
          label={"thumbnail"} 
          placeholder="thumbnail" 
          type='file'
          name={"thumbnail"}
          onChange={(e) => {
            console.log(e.target.files[0]);
            let file = e.target.files[0]
            if (file.size > 20000000) {
              return Swal.fire(
                'Your file is to Powerfull!!',
                'warning'
              )
            } if (file.type === 'image/png' || 
                  file.type === 'image/jpg' ||
                  file.type === 'image/jpeg' ||
                  file.type === 'application/pdf'
                ) {
              let reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                setArt((Art) => {
                  return{
                    ...Art,
                    imagePreview : reader.result,
                    thumbnail : file
                  }
                })
              }
            } else {
              return Swal.fire(
                'File not an Image or PDF!!',
                'error'
              )
            }
          }} 
        />
        <p className="text-red-500">{error?.artikel?.[0]}</p>
        <Input 
          value={Art.artikel} 
          label={"artikel"} 
          placeholder="artikel" 
          name={"artikel"}
          onChange={handleChange} 
        />
        <img src={Art.imagePreview} alt="gambar" className="w-50 h-50"/>
        <Button title={isLoading ? 'Saving Data' : 'Save'} />
        <Link to={'/user'} className='ml-5'>
          <Button title={'Back to user'}/>
        </Link>
        <Link to={'/artikel'} className='ml-5'>
          <Button title={'Back to artikel'}/>
        </Link>
      </form>
    </div>
  );
}
