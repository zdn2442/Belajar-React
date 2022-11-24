import React from "react";
import RefTutor from "./module/useRef";
import ReducerTutor from "./module/useReducer";
import LayoutEff from "./module/useLayoutEffect";
import Optimize from "./optimize";
import usePage from "./hook/usePage";
import useList from "./hook/useList";
import useJuzz from "./hook/useJuzz";

function App() {
  // const [page, setPage] = React.useState(10);
  // const [pageSize, setPageSize] = React.useState(1);

  const { page, setPage, pageSize, setPageSize } = usePage();
  const { alquran } = useList();
  const { alquran: dataAlQuran, juzz, setJuzz } = useJuzz(1);
  console.log("alQuran", alquran);

  const handlePage = (e) => {
    setPage(e.target.value);
  };
  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };
  return (
    <React.Fragment>
      <h1>Custom Hook Testing</h1>
      <h2 className="font-bold">{juzz}</h2>
      <button onClick={() => setJuzz((juzz) => juzz + 1)}>Change Juzz Number</button>

      {/* <div>
        <h1>Page Size : {pageSize}</h1>
        <h1>Page : {page}</h1>
      </div>
      <div>
        <select onChange={handlePageSize} value={pageSize}>
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={1}>
            1
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={2}>
            2
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={3}>
            3
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={4}>
            4
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={5}>
            5
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={6}>
            6
          </button>
          <button className="m-5 bg-black text-white w-10 h-12" onClick={handlePage} value={7}>
            7
          </button>
        </div>
      </div> */}
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
