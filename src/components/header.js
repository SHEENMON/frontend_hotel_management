import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WarningBanner = () => {
  return (
    <div className="container-fluid bg-orange text-white p-2 d-flex justify-content-center align-items-center">
      <p className="mb-0 me-3">
        Usage of Illegal Property Images to upload content showing area in non-standard/Illegal units is prohibited
      </p><button className="btn-head btn-light text-dark fw-bold ">
        Learn More
      </button>
    </div>
  );
};

export default WarningBanner;
