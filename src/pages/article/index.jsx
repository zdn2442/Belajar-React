import React from "react";
import { getArtikel, deleteArtikel } from "../../api/artikel";
import Skeleton from "react-loading-skeleton";
import Button from "../../module/button";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Artikel() {
  let navigate = useNavigate();
  const [listArticle, setListArticle] = React.useState([]);
  const [isFetchArticle, setIsFetchArticle] = React.useState(false);
  // const [isDelete, setIsDelete] = useState(false)
  const getListArticleHandle = async () => {
    try {
      setIsFetchArticle(true);
      const response = await getArtikel();
      console.log(response.data);
      console.log("running");
      setListArticle(response.data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetchArticle(false);
    }
  };
  console.log(listArticle);
  React.useEffect(() => {
    getListArticleHandle();
  }, []);
  // const handleDelete = async () => {
  //   const response = await deleteArtikel(item.id);
  //   console.log("response", response);
  //   try {
  //     setIsDelete(true);
  //     if (response.data.status === "Fail") {
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-start",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener(
  //             "mouseenter",
  //             Swal.stopTimer
  //           );
  //           toast.addEventListener(
  //             "mouseleave",
  //             Swal.resumeTimer
  //           );
  //         },
  //       });

  //       Toast.fire({
  //         icon: "error",
  //         title: response.data.message,
  //       });
  //     } else {
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-start",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener(
  //             "mouseenter",
  //             Swal.stopTimer
  //           );
  //           toast.addEventListener(
  //             "mouseleave",
  //             Swal.resumeTimer
  //           );
  //         },
  //       });

  //       Toast.fire({
  //         icon: "success",
  //         title: "Success Deleting Article",
  //       });
  //       getUserHandle();
  //     }
  //   } catch (error) {
  //   } finally {
  //     setIsDelete(false);
  //   }
  // }
  return (
    <div>
      <Link to="/artikel/createArtikel" className="mr-5">
        <Button title={"Add Article"} />
      </Link>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Article</th>
            <th>Penulis</th>
            <th>Dibuat</th>
            <th>Diupdate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isFetchArticle ? (
            <tr>
              <td colspan={9}>
                <Skeleton count={5} />
              </td>
            </tr>
          ) : (
            listArticle.map((article, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{article?.judul}</td>
                  <td>
                    <img src={article?.thumbnail} alt="gambar" className="w-10 h-10" />
                  </td>
                  {/* <td className="-indent-8 text-eclipse ... break-all">{article?.artikel}</td> */}
                  <td>{article?.user?.name}</td>
                  <td>{article.created_at}</td>
                  <td>{article.updated_at}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/updateArtikel/${article.id}`);
                      }}
                      color="blue"
                      title={"Edit"}
                    />
                    <Button
                      onClick={() => {
                        console.log("deleted");
                       
                      }}
                      color="red"
                      title={"Delete"}
                    />
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/detailArtikel/${article.slug}`);
                      }}
                      color="skyblue"
                      title={"View"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
