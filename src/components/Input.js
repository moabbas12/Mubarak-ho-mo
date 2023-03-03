import React from "react";
import Accordion from "react-bootstrap/Accordion";
import House from "./House";
function Input() {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="row">
              <button className="btn-acord col-lg-2 col-md-4">Wedding</button>
              <button className="btn-acord col-lg-2 col-md-4">Birthday</button>
              <button className="btn-acord col-lg-2 col-md-4">Corporate</button>
              <button className="btn-acord col-lg-2 col-md-4">Rent A car</button>
              <button className="btn-acord col-lg-2 col-md-4">Tour</button>
              <button className="btn-acord col-lg-2 col-md-4">Photographer</button>
            </div>
            <div className="row input-head2">
              <div className="col-3">
                <p className="input-text3">Location</p>
                <div className="input-style">
                  <span>
                    <img className="icon-input" src="Group538.png" alt="icon" />{" "}
                  </span>
                  <input
                    className="input-style2"
                    type="text"
                    name="name"
                    placeholder="Gulshan Iqbal Block 1"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <p className="input-text3">No.of people</p>
                <input
                  className="input-style"
                  type="text"
                  name="name"
                  placeholder="People:100-500"
                />
              </div>
              <div className="col-lg-2 col-md-3">
                <p className="input-text3">Price Range</p>
                <input
                  className="input-style"
                  type="text"
                  name="name"
                  placeholder="Price:150,000"
                />
              </div>
              <div className="col-lg-2 col-md-3">
                <p className="input-text3">Date</p>
                <input
                  className="input-style"
                  type="text"
                  name="name"
                  placeholder="Date:30 FEB 2023 "
                />
              </div>
              <div className="col-lg-3 col-md-12 text-center">
                <button className="btn-search"> Search</button>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-2 col-md-3 sidebar py-3 ">
                <div className="">
                  <h4 className="our-services"> Our Services</h4>
                  <h5 className="side-text">All In One</h5>
                  <h5 className="side-text">Wedding Hall</h5>
                  <h5 className="side-text">Wedding Makeup</h5>
                  <h5 className="side-text">Decoration</h5>
                  <h5 className="side-text">Saloon</h5>
                  <h5 className="side-text">Catering</h5>
                  <h5 className="side-text">Furniture</h5>
                </div>
              </div>
              <div className="col-10 col-md-9 py-4">
                <div className="row">
                  <div className="col-12 d-flex">
                    <input
                      className="input-style"
                      type="text"
                      name="name"
                      placeholder="gulshan-iqbal"
                    />
                    <input
                      className="input-style"
                      type="text"
                      name="name"
                      placeholder="gulshan-iqbal"
                    />
                    <input
                      className="input-style"
                      type="text"
                      name="name"
                      placeholder="gulshan-iqbal"
                    />
                    <input
                      className="input-style"
                      type="text"
                      name="name"
                      placeholder="gulshan-iqbal"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <House />
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <House />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                  <div className="row">
                      <div className="col-lg-6  col-md-12">
                        <House />
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <House />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Input;
