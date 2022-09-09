import React from 'react';

export default function Card({nomor, nama, namaLatin, jumlahAyat, tempatTurun, arti}) {
    return(
        <React.Fragment>
            <div className="">
            <div className='flex flex-start border'>
                <div className='pr-2'>{nomor}.</div>
            <div>{namaLatin}</div>
            <div className='ml-10'>{jumlahAyat}</div>
            </div>
            <div>{nama}</div>
            
            <div>{tempatTurun}</div>
            <div>{arti}</div>
        </div>
        </React.Fragment>
        
    )
}