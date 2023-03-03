import React from "react";
import Focuscard from "./Focuscard";
function Focus() {
  return (
    <div id="focus">
      <div className="container ">
        <h3 className="h3-focus text-center ">
          Everything We Focus <br /> For Full Service
        </h3>
        <p className="text-focus text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br />{" "}
          diam nonummy nibh euismod tincidunt ut laoreet
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-12  px-5 my-3">
            <Focuscard />
          </div>
          <div className="col-lg-4 col-md-12 px-5 my-3">
            <Focuscard />
          </div>
          <div className="col-lg-4 col-md-12 px-5 my-3">
            <Focuscard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;
