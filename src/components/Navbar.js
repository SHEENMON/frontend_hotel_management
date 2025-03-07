import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaSearch, FaFilter, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-md bg-white py-2">
        <div className="container">

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <h4 className="mb-0">ABC PROPERTIES</h4>
            <div className="d-flex flex-column flex-md-row gap-3 ms-auto align-items-md-center">
              <a href="#" className="link">Buy</a>
              <a href="#" className="link">Rent</a>
              <a href="#" className="link">Navigator's Edge</a>
              <a href="#" className="link">Our Agents</a>
              <a href="#" className="link">Blogs & Insights</a>
              <a href="#" className="link">New Launches</a>
              <a href="#" className="link">About us</a>
              <a href="#" className="link">Help & Support</a>
              <button className="btn-pill rounded-pill px-4">Sell Property</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div className="container my-3 d-block d-md-none">
        
        <div className="">
          
          <div className="d-flex w-100">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars size={20} />
          </button>

            <span className="input-group-text bg-white border-0">
              <FaSearch color="#f97316" />
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search property"
            />
            <button className="btn btn-primary rounded-end">
              <FaFilter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Search Bar */}
      <div className="container my-3 d-none d-md-block">
        <div className="d-flex gap-2">
          <button className="btn btn-light">Buy</button>
          <button className="btn btn-primary">Rent</button>
          <input
            type="text"
            className="form-control"
            placeholder="Search property"
          />
          <select className="form-select">
            <option>Price</option>
          </select>
          <button className="btn" style={{backgroundColor:"#FF916E"}}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// {properties
//   .filter((p) => (filters.furnished ? p.furnished : true))
//   .map((property) => (
//     <div className="property-card" key={property.id}>