import React from "react";

export default function ResetButton({ title }) {
  return (
    <React.Fragment>
      <input type="button" className="button-reset" />
      {title}
    </React.Fragment>
  );
}
