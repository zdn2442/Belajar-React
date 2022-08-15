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
            {count}
            <h3>{
                count
                }</h3>
            <button onClick={handleCount}>Tambah</button>
            <button onClick={handleMinus}>Kurang</button>
        </React.Fragment>
    )
}