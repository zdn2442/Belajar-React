import React from "react";

export default function Card({ data, setData }) {
  console.log("data adalah", data);
  const handleDelete = (e) => {
    e.preventDefault();
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter);
    setData(() => {
      return filter;
    });
    console.log("Data Deleted");
  };
  return (
    <React.Fragment>
      {data?.map((item, i) => {
        return (
          <div className="card-content">
            <h2>{item.email}</h2>
            <p>{item.textarea}</p>
            <button className="button-delete" value={item?.id} onClick={handleDelete}>
              Delete
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
