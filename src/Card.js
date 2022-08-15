import React from "react";
import "./style/style.css";

export default function Card({ count, setCount, warna, setWarna }) {
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: warna,
          width: 300,
          height: 300,
        }}
      >
        <p>{warna}</p>
      </div>
      <button
        onClick={() => {
          setWarna("red");
        }}
      >
        Merah
      </button>
      <button
        onClick={() => {
          setWarna("blue");
        }}
      >
        Biru
      </button>
      <button
        onClick={() => {
          setWarna("green");
        }}
      >
        Hijau
      </button>
      <p>Ini Card</p>
      <h3>{count <= 10 ? "Kurang dari Sepuluh" : "Lebih dari Sepuluh"}</h3>
      {count}
      <button onClick={handleCount}>Tambah</button>
      <button onClick={handleMinus} disabled={
        count < 1 && true 
      }>Kurang</button>
    </React.Fragment>
  );
}
