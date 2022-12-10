import React from 'react';

export default function Card({gambar, namaProduk}) {
    return (
        <React.Fragment>
            <div>
                <div className='w-56 h-52 border-4 rounded-t-md border-[#9AB2DD] shadow-inherit'>
                    <img src={gambar} alt="gambar produk" />
                </div>
                <div className='w-56 h-28 shadow-xl z-10 rounded-b-md'>
                    <div className='flex justify-between'>
                    <p className='ml-2'>{namaProduk}tes</p>
                    <p>{}</p>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    )
}