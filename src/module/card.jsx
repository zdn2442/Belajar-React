import React from "react";

export default function Card({ data , setData}) {
  console.log("data adalah", data);
  const handleDelete = (e) => {
    e.preventDefault();
    let filter = data.filter(
      (item) => {
        return item.id !== parseFloat(e.target.value);
      }
    )
    console.log(filter);
    setData(() => {
      return filter;
    })
    console.log('Data Deleted');
  }
  return (
    <React.Fragment>
        {data?.map((item, i) => {
          return (
            <div>
              <p>Id : {item?.id}</p>
              <p>Username : {item.username}</p>
              <p>Email : {item.email}</p>
              <p>Password : {item.password}</p>
              <p>Confirm Password : {item.confirmPassword}</p>
              <button value={item?.id} onClick={handleDelete}>Delete</button>
            </div>
          );
        })}
    </React.Fragment>
  );
}
