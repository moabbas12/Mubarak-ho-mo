import React from "react";

function Footer() {
  return (
    <div id="foot-back">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src=" Group496.png" alt="logo" />
          </div>
          <div className="col-2">
            <p className="foot-text">Quick Link</p>
          </div>
          <div className="col-2">
            <p className="foot-text">Categories</p>
          </div>
          <div className="col-2">
            <p className="foot-text">Contact</p>
          </div>
          <div className="col-3">
            <p className="input-text">Newsletter</p>
            <div className="input-group">
              <input
                type="text"
                name="search"
                className="foot-input"
                placeholder="Your email"
              />
              <span>
                <button type="submit" className="search">
                  submit<i className="fa fa-search"></i>
                </button>
              </span>
            </div>
            <p className="input-text2">Follow Us</p>
            <div className="d-flex">
              <img className="social-icon" src="Group400.png" alt="social" />
              <img className="social-icon" src="Group401.png" alt="social" />
              <img className="social-icon" src="Group402.png" alt="social" />
              <img className="social-icon" src="Group403.png" alt="social" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
