import axios from "./base_url";

export async function getProduk(kategori, keyword, hargaTerendah, hargaTertinggi) {
    return axios.get( `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`)
}

export async function GetDetailProduct(uuid) {
    return axios.get(`/produk/detail/${uuid}`);
  }