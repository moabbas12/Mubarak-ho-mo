import React from "react";

function House() {
  return (
    <>
    <div className="card">
      <img className="image-card" src="./image2.png" alt="house" />
      <div>
        <span className="vector-text">4.0</span>
        <span>
          <img className="vector-card" src="./Vector(2).png " alt="star" />
        </span>
        <span>
          <img className="vector-card" src="./Vector(2).png " alt="star" />
        </span>
        <span>
          <img className="vector-card" src="./Vector(2).png " alt="star" />
        </span>
        <span>
          <img className="vector-card" src="./Vector(3).png" alt="star" />
        </span>
        <span className="vector-text">(522)</span>
        <span className="vector-text">Banquet Hall</span>
      </div>
      <div>
        <p className="vector-text">
          Address: W3GR+H52, Rashid Minhas Rd, Block 1 Gulshan-e-Iqbal, Karachi,
          Karachi City, Sindh
        </p>
      </div>
      
    </div>
    <div className="d-flex justify-content-center">
    <button className="btn-card">Select</button>
  </div>
  </>
  );
}

export default House;
