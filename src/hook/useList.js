import { useState, useEffect } from "react";
import axios from "axios";

function useList() {
  const [alquran, setAlquran] = useState([]);
  const getAlquran = async () => {
    try {
      const response = await axios.get("http://api.alquran.cloud/v1/quran/en.asad");
      setAlquran(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlquran();
  }, []);

  return { alquran };
}

export default useList;
