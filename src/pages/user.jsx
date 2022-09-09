import React from "react";
import axios from "axios";
import Card from './card'

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);

  const getUserHandle = async () => {
    try {
      const response = await axios.get("https://equran.id/api/surat");
      console.log("response => ", response.data);
      setUsers(response.data);
      setPage(response.data.nama);
      setPerPage(response.data.nama_latin);
    } catch (err) {}
  };

  console.log("user => ", users);
  console.log("page => ", page);
  console.log("per page => ", perPage);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1 className="">Daftar Surat</h1>
      <div className="grid grid-cols-3 gap-3 border-r-2 ">
        {users.map((user, index) => {
            return (
              <Card key={index} 
               nomor={index + 1}
               nama={user.nama}
               namaLatin={user.nama_latin}
               jumlahAyat= {user.jumlah_ayat}
               tempatTurun= {user.tempat_turun}
               arti= {user.arti}
              />
            );
          })}
      </div>
      
    </div>
  );
}
