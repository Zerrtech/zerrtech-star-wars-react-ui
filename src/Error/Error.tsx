import * as React from "react";
import "./Error.css";

const Error = ({ error }: any) => {
  return (
    <div className="error-container row">
      <div className="col-12">
        <h4>{error.name}</h4>
        <div>{error.message}</div>
      </div>
    </div>
  );
};

export default Error;
