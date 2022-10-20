import axios from './axios_base_2';

export async function getArtikel() {
    return axios.get(`/artikel`)
}
export async function createArtikel(payload) {
    console.log('payload will be send', payload);
    const formData = new FormData()
    formData.append('judul', payload.judul)
    formData.append('thumbnail', payload.thumbnail)
    formData.append('artikel', payload.artikel)
    return axios.post("/artikel", formData)
}
export async function updateArtikel(id, value) {
    console.log("jalan");
    const formData = new FormData();
    formData.append("judul", value.judul);
    formData.append("thumbnail", value.thumbnail);
    formData.append("artikel", value.artikel);
    return axios.post(`/artikel/update/${value?.id}`, formData);
  }
export async function detailArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}
export async function deleteArtikel(id) {
    return axios.post(`artikel/delete/${id}`);
  }