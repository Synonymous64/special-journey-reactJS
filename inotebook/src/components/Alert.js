import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div class="alert alert-info alert-dismissible fade show" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
