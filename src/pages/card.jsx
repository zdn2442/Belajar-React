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
            <div className='flex flex-end'>
                <div>{tempatTurun}</div>
                <div className='px-1'>-</div>
                <div>{arti}</div>
            </div>
            
        </div>
        </React.Fragment>
        
    )
}