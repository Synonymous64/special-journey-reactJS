import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
// import
export class Loading extends Component {
  render() {
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
  }
}
export default Loading;
