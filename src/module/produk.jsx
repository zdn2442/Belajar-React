import React from 'react';

export default function Produk({data}){
    return(
        <React.Fragment>
            <h1>Data Produk di Indonesia</h1>
            {data?.map(
                function (item, index) {
                    return(
                        <React.Fragment>
                             <div key={index}>
                                <h3>Jenis : {item.jenis}</h3>
                                <h3>Produk : {item.produk}</h3>
                            </div>
                            <h2>Tipe</h2>
                            <div>
                                {item?.brand?.map(
                                    (
                                        value,index2
                                    ) => {
                                        return(
                                            <div key={index2}>
                                                <p>{value.nama}</p>
                                                <p>{value.harga}</p>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </React.Fragment>
                    )
                }
            )}
        </React.Fragment>
    )
}