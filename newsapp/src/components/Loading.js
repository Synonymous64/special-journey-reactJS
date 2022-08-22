import React from "react";
import { Spinner } from "react-bootstrap";
// import
const Loading = () => {
  return (
    <div className="text-center">
      <Spinner
        as="span"
        variant="warning"
        role="status"
        aria-hidden="true"
        animation="grow"
      />
    </div>
  );
};
export default Loading;
