import React from "react";

function Pics() {
  return (
    <div className="container2">
    <div>
      <h3 className="h3-service text-center">Our services</h3>

      <div className="row">
        <div className="col-8 ">
          <div className="back-pic">
            <h3 className="h3-text"> WEDDING HALL</h3>
          </div>
        </div>
        <div className="col-4 gx-0">
        <div className="back-pic2 ">
            <h3 className="h3-text"> FARM HOUSES</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 ">
        <div className="back-pic3">
            <h3 className="h3-text"> PARLOR</h3>
          </div>
        </div>
        <div className="col-8 gx-0">
        <div className="back-pic4 ">
            <h3 className="h3-text"> TOUR</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center">
    <button className="pic-btn">More</button>
    </div>
    </div>
  );
}

export default Pics;
