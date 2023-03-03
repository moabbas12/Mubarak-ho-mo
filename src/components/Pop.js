import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pop() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>    
    <Button variant="primary" onClick={handleShow}>
      Pricing
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body> <div className="row input-head2">
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
            </div></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default Pop