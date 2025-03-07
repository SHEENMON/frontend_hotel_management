import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Accordion, Form } from 'react-bootstrap';

const properties = [
  {
    id: 1,
    title: "VILLA 370 MIRA OASIS 1",
    price: 250190,
    image: "https://s3-alpha-sig.figma.com/img/e9b5/d1ce/33e720652ba448a844a3cf463b2c2cc0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NMzx~4ICn-hoHd48h4u3sYXrGBhGcIjo9XyU1qNEPAr7lN95He6v8EbzTB2P7GYsCGQI8aLIVYRZT~CpKmf2vLHL6p1AwmlZqjzwR42BBkj~P1PBLrr-vPvRJAj~tnzuRZX7wVS9qJb0f8kCRTNe9Md5ppuCcZ0ipRmZmZZkKwI4XJNbkVfUbOsC0Q4Cg18hUj05qo3NFDUNKxAq~Ve5rPKz6xN0XVg-4ioqsUJDbSijP81AupkTu5GAQZK3iKEizW4yf7f1n9BmFfJEN8A9oO5gItqhRA0AxvlTnW-ql~9xs57Me1~JMv2SSg-SVzSVLsORO4BXOrE-tS713kc2TQ__",
    location: "118, Dubailand, Dubai, UAE",
    type: "For Rent",
    status: "Vacant now",
    bedrooms: 3,
    bathrooms: 2,
    size: "1800.00 square ft",
    furnished: false,
  },
  {
    id: 2,
    title: "VILLA 370 MIRA OASIS 1",
    image: "https://s3-alpha-sig.figma.com/img/e9b5/d1ce/33e720652ba448a844a3cf463b2c2cc0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NMzx~4ICn-hoHd48h4u3sYXrGBhGcIjo9XyU1qNEPAr7lN95He6v8EbzTB2P7GYsCGQI8aLIVYRZT~CpKmf2vLHL6p1AwmlZqjzwR42BBkj~P1PBLrr-vPvRJAj~tnzuRZX7wVS9qJb0f8kCRTNe9Md5ppuCcZ0ipRmZmZZkKwI4XJNbkVfUbOsC0Q4Cg18hUj05qo3NFDUNKxAq~Ve5rPKz6xN0XVg-4ioqsUJDbSijP81AupkTu5GAQZK3iKEizW4yf7f1n9BmFfJEN8A9oO5gItqhRA0AxvlTnW-ql~9xs57Me1~JMv2SSg-SVzSVLsORO4BXOrE-tS713kc2TQ__",
    price: 250190,
    location: "03B, Sharjah, Dubai, UAE",
    type: "For Rent",
    status: "Furnished | Security Cameras | Gas Pipeline",
    bedrooms: 1,
    bathrooms: 1,
    size: "1500.00 square ft",
    furnished: true,
  },
  {
    id: 3,
    title: "VILLA 370 MIRA OASIS 1",
    image: "https://s3-alpha-sig.figma.com/img/e9b5/d1ce/33e720652ba448a844a3cf463b2c2cc0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NMzx~4ICn-hoHd48h4u3sYXrGBhGcIjo9XyU1qNEPAr7lN95He6v8EbzTB2P7GYsCGQI8aLIVYRZT~CpKmf2vLHL6p1AwmlZqjzwR42BBkj~P1PBLrr-vPvRJAj~tnzuRZX7wVS9qJb0f8kCRTNe9Md5ppuCcZ0ipRmZmZZkKwI4XJNbkVfUbOsC0Q4Cg18hUj05qo3NFDUNKxAq~Ve5rPKz6xN0XVg-4ioqsUJDbSijP81AupkTu5GAQZK3iKEizW4yf7f1n9BmFfJEN8A9oO5gItqhRA0AxvlTnW-ql~9xs57Me1~JMv2SSg-SVzSVLsORO4BXOrE-tS713kc2TQ__",
    price: 250190,
    location: "03B, Sharjah, Dubai, UAE",
    type: "For Rent",
    status: "Furnished | Security Cameras | Gas Pipeline",
    bedrooms: 1,
    bathrooms: 1,
    size: "1500.00 square ft",
    furnished: true,
  },
  {
    id: 4,
    title: "VILLA 370 MIRA OASIS 1",
    image: "https://s3-alpha-sig.figma.com/img/e9b5/d1ce/33e720652ba448a844a3cf463b2c2cc0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NMzx~4ICn-hoHd48h4u3sYXrGBhGcIjo9XyU1qNEPAr7lN95He6v8EbzTB2P7GYsCGQI8aLIVYRZT~CpKmf2vLHL6p1AwmlZqjzwR42BBkj~P1PBLrr-vPvRJAj~tnzuRZX7wVS9qJb0f8kCRTNe9Md5ppuCcZ0ipRmZmZZkKwI4XJNbkVfUbOsC0Q4Cg18hUj05qo3NFDUNKxAq~Ve5rPKz6xN0XVg-4ioqsUJDbSijP81AupkTu5GAQZK3iKEizW4yf7f1n9BmFfJEN8A9oO5gItqhRA0AxvlTnW-ql~9xs57Me1~JMv2SSg-SVzSVLsORO4BXOrE-tS713kc2TQ__",
    price: 250190,
    location: "03B, Sharjah, Dubai, UAE",
    type: "For Rent",
    status: "Furnished | Security Cameras | Gas Pipeline",
    bedrooms: 1,
    bathrooms: 1,
    size: "1500.00 square ft",
    furnished: true,
  },
];

const PropertyList = () => {
  const [filters, setFilters] = useState({ furnished: false, minBedrooms: 0, maxPrice: 500000 });

  const filteredProperties = properties.filter(
    (p) =>
      (filters.furnished ? p.furnished : true) &&
      p.bedrooms >= filters.minBedrooms &&
      p.price <= filters.maxPrice
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Property Listings</h2>
      <div className="row">
        {/* Sidebar - Positioned to the Right */}
        <div className="col-md-4 order-md-last">
          <div className="p-3 h-100 bg-light">
            <h5>Filters</h5>
            <hr />
            <div className="form-check form-switch d-flex">
              <label className="form-check-label me-5" htmlFor="flexSwitchCheckDefault">
                Mark already seen
              </label>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
            <div className="form-check form-switch d-flex">
              <label className="form-check-label me-5" htmlFor="flexSwitchCheckDefault">
                Properties with photos
              </label>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>



            {/* Dropdown */}
            <Accordion alwaysOpen defaultActiveKey="0">

              {/* Completion Status */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>Completion Status</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex align-items-center">
                    <Form.Check type="radio" name="status" label="Ready" className="me-3" />
                    <Form.Check type="radio" name="status" label="Off-plan" className="me-3" />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Property Type */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Property Type</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" id="premium" label="Premium" className="mb-2" defaultChecked/>
                  <Form.Check type="checkbox" id="apartments" label="Apartments" className="mb-2" />
                  <Form.Check type="checkbox" id="ready" label="Ready to move" className="mb-2" />
                  <Form.Check type="checkbox" id="homes" label="Individual Homes" className="mb-2" />
                  <Form.Check type="checkbox" id="townhouse" label="Townhouse" className="mb-2" />
                  <Form.Check type="checkbox" id="penthouse" label="Penthouse" className="mb-2" />
                </Accordion.Body>
              </Accordion.Item>

              {/* Furnished Status */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>Furnished Status</Accordion.Header>
                <Accordion.Body>
                  <Form.Check className="form-check-input mb-2"
                    type="checkbox"
                    id="furnishedCheckbox"
                    checked={filters.furnished}
                    onChange={(e) => setFilters({ ...filters, furnished: e.target.checked })} label="Furnished" />
                  <Form.Check type="checkbox" id="semi-furnished" label="Semi-Furnished" className="mb-2" />
                  <Form.Check type="checkbox" id="un-furnished" label="Un-Furnished" className="mb-2" />
                </Accordion.Body>
              </Accordion.Item>

              {/* Amenities */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>Amenities</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" id="parking" label="Parking facility" className="mb-2" />
                  <Form.Check type="checkbox" id="security" label="Security" className="mb-2" />
                  <Form.Check type="checkbox" id="gas" label="Gas Pipeline" className="mb-2" />
                  <Form.Check type="checkbox" id="lift" label="Lift Facility" className="mb-2" />
                  <Form.Check type="checkbox" id="backup" label="Power backup" className="mb-2" />
                </Accordion.Body>
              </Accordion.Item>



              {/* Extra Accordion Items */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>BHK Facility</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="1BHK" className="mb-2" />
                  <Form.Check type="checkbox" label="2BHK" className="mb-2" />
                  <Form.Check type="checkbox" label="3BHK" className="mb-2" />
                  <Form.Check type="checkbox" label="4BHK" className="mb-2" />
                  <Form.Check type="checkbox" label="5BHK" className="mb-2" />
                  <Form.Check type="checkbox" label="Studio" className="mb-2" />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>Bathrooms</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="1" className="mb-2" defaultChecked />
                  <Form.Check type="checkbox" label="2" className="mb-2" />
                  <Form.Check type="checkbox" label="3+" className="mb-2" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
            </div>

        {/* Property Cards */}
        <div className="col-md-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="card mb-4">
                <div className="row">
                  <div className="col-md-5">
                    <div className="p-2 position-absolute btn-group">
                      <button className="btn btn-secondary  mb-1" style={{fontSize:"x-small"}}>
                        <i className="fa fa-clock-o"></i> Listed 5 Days ago
                      </button>
                      <button className="btn mb-1" style={{backgroundColor:"#FF916E",fontSize:"x-small"}}>
                        <i className="fa fa-check-circle"></i> Verified by Athirad
                      </button>
                      <button className="btn btn-warning mb-1"style={{fontSize:"x-small"}}>
                      <i class="fa fa-headphones" aria-hidden="true"></i>
                      </button>
                    </div>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-7 p-3">
                    <div className="row" >
                      <div className="col-md-6" >
                        <h4 className="fs-6" >{property.title}</h4>
                        <p className="fs-3 fw-bold" style={{ color: "#FF916E" }}>{property.price.toLocaleString()} <span className="fs-6" style={{ color: "FF916E" }} >AED Yearly</span></p>
                        <p className="text-muted">{property.location}</p>
                        <p className="text-secondary">{property.status}</p>

                      </div>
                      <div className="col-md-6" >
                        <div className="p-2">
                          <button className="btn btn-success btn-sm mb-1 me-1">
                            <i className="fa fa-whatsapp me-2 " aria-hidden="true"></i>what’s app
                          </button>
                          <button className="btn btn-warning btn-sm mb-1 me-1">
                            <i className="fa fa-volume-control-phone"></i>
                          </button>
                          <button className="btn btn-warning btn-sm mb-1 me-1">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                    <div className="row" >
                      <div className="col-md-12" >
                        <hr />
                        <div className="d-flex justify-content-between">
                          <p className="text-secondary mb-0 d-inline-block">
                            <i className="fa fa-check-circle me-2" style={{ color: "#FF916E" }}></i>
                            Ready to move
                          </p>
                          <p className=" mb-0 d-inline-block ms-2" style={{ color: "#12B2AF" }}>
                            <i className="fa fa-arrows-v me-2 p-2 rounded-3" aria-hidden="true" style={{
                              backgroundColor: "#12B2AF", color: "white", transform: "rotate(45deg)", width: "26px", height: "26"
                            }}></i>
                            {property.size}
                          </p>



                        </div>

                        <p className="text-secondary"><i className="fa fa-headphones me-2" aria-hidden="true" style={{ color: "#FF916E" }}></i>
                          Premium customer support</p>
                        <div className="d-flex justify-content-between">
                          <button className="btn btn-light btn-sm mb-1">
                            <i className="fa fa-bed me-2" aria-hidden="true"></i>{property.bedrooms} Bedrooms
                          </button>
                          <button className="btn btn-light btn-sm mb-1">
                            <i className="fa fa-bath me-2" aria-hidden="true"></i>
                            {property.bathrooms} Bathrooms
                          </button>
                          <button className="btn btn-light btn-sm mb-1">
                            <i className="fa fa-car me-2" aria-hidden="true"></i>
                            Parking Available
                          </button>
                          <button className="btn btn-light btn-sm mb-1">
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger">No properties match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
