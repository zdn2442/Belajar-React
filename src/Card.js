import React from "react";

export default function Card({count, setCount}) {
    const handleCount = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(count - 1)
    }
    
    return(
        <React.Fragment>
            <p>Ini Card</p>
            <h3>
                {
                    count <= 10 ? "Kurang dari Sepuluh" :  "Lebih dari Sepuluh"
                }
            </h3>
            {count}
            <button 
            onClick={handleCount}>Tambah</button>
            <button onClick={handleMinus}>Kurang</button>
        </React.Fragment>
    )
}