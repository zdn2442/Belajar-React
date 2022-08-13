import React from "react";

export default function ResetButton({ title,...props}) {
    const handleDelete = (e) => {
        e.preventDefault();
        // let filter = data.filter(
        //   (item) => {
        //     return item.id !== parseFloat(e.target.value);
        //   }
        // )
       
        // setData(() => {
        //   return filter;
        // })
    return (
      <React.Fragment>
        <button
        onClick={handleDelete}
         {...props}
          className="button "
        >
          {title}
        </button>
      </React.Fragment>
    );
  }
} 