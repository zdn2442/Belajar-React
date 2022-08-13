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
            <p>Id : {item?.id}</p>
            <p>Username : {item.username}</p>
            <p>Email : {item.email}</p>
            <p>Place of birth : {item.ttl}</p>
            <p>Date of birth : {item.date}</p>
            <p>Gender : {item.gender}</p>
            <p>Password : {item.password}</p>
            <p>Confirm Password : {item.confirmPassword}</p>
            <button className="button-delete" value={item?.id} onClick={handleDelete}>
              Delete
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
