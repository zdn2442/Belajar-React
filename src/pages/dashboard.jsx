import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProduk } from "../api/produk";
import Card from "../module/card";
import ReactLoading from "react-loading";

export default function Dashboard() {
  // let [status, setStatus] = React.useState(false);
  const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);

  const getHandleProduk = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await getProduk(payload.kategori, payload.keyword, payload.hargaTerendah, payload.hargaTertinggi);
      console.log("response =>", response);
      console.log("product =>", response.data.data.rows);
      setListProduct(response.data.data.rows);
      // setPayload(response.data.data.rows)
    } catch (err) {
      console.log("err =>", err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getHandleProduk();
  }, []);

  // const GambarProduk = JSON.parse(listProduct)
  console.log("listProduct =>", listProduct);
  console.log("payload =>", payload);

  return (
    <React.Fragment>
      <div>
        <div className="w-screen h-20 bg-gradient-to-r from-[#D6ADDC] via-[#7DB4DD] to-[#2C5DD4] flex justify-between">
          <div className="h-14 w-36 ml-5 my-3 bg-slate-500 "></div>
          <div>
            <div className="h-14 w-14 rounded-full my-3 mr-5 bg-slate-400"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="m-10 grid grid-cols-4 space-y-3 space-x-4">
            {fetchProduct ? (
              <ReactLoading type={"spin"} color={"skyblue"} height={667} width={375} className="ml-48" />
            ) : (
              listProduct.map((item, index) => {
                return <Card key={index} namaProduk={item.namaProduk} gambar={item.gambarProduk.gambar1} />;
              })
            )}
            {/* <button onClick={getHandleProduk}>tombol</button> */}
          </div>
          <div className="w-[20%] border-4 border-[#9AB2DD] rounded-b-lg">
            <div className="w-28 h-10 bg-gradient-to-l from-[#D6ADDC] via-[#7DB4DD] to-[#2C5DD4] rounded-md mx-24 mt-10 text-center py-2">
              <p className="text-white font-bold text-md">Filter</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
