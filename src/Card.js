import React from "react";

export default function Card({count, setCount}) {
    const handleCount = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(count - 1)
    }
    if (count <= 10) {
        <h1>Kurang dari Sepuluh</h1>
    } if (count >= 10) {
        <h1>Lebih dari Sepuluh</h1>
    }
    return(
        <React.Fragment>
            <p>Ini Card</p>
            {count}
            <button onClick={handleCount}>Tambah</button>
            <button onClick={handleMinus}>Kurang</button>
        </React.Fragment>
    )
}