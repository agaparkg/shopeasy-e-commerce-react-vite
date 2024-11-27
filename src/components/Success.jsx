import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4">Thank You!</h1>
      <p>
        Your form has been submitted successfully. We will contact you as soon
        as we can.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Success;
