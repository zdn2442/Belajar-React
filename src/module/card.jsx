import React from "react";

export default function Card({ data }) {
  console.log("data adalah", data);
  return (
    <React.Fragment>
        {data?.map((item) => {
          return (
            <div>
              <p>Username : {item.username}</p>
              <p>Email : {item.email}</p>
              <p>Password : {item.password}</p>
              <p>Confirm Password : {item.confirmPassword}</p>
            </div>
          );
        })}
    </React.Fragment>
  );
}
