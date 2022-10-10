import React from "react";
import { detailArtikel } from "../../api/artikel";
import { useParams,Link } from "react-router-dom";
import Button from '../../module/button';

export default function DetailArtikel() {
  let { slug } = useParams();
  const [Art, setArt] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const getDetailArticle = async () => {
    try {
      const response = await detailArtikel(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setArt(() => {
        return {
          judul: dataArtikel.judul,
          thumbnail: dataArtikel.thumbnail,
          artikel: dataArtikel.artikel,
          imagePreview: null,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div>
          <img src={Art.thumbnail} alt="gambar" className="w-50 h-50" />
        </div>
        <div>
          <h1 className="font-bold">Judul</h1>
          <h3>{Art.judul}</h3>
          <h1 className="mt-10 font-bold">Artikel</h1>
          <p className="mb-10">{Art.artikel}</p>
          <Link to={'/artikel'}>
            <Button title={'Back'}/>
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
