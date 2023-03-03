import React from "react";
import Bank from "./Bank";
import Footer from "./Footer";
import Comment from "./Comment";
function Contact() {
  return (
    <>
      <div className="container my-5">
        <div className=" py-2">
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
            <img className="vector-card" src="./Vector(2).png " alt="star" />
          </span>
          <span>
            <img className="vector-card" src="./Vector(3).png" alt="star" />
          </span>
          <span className="vector-text">4.0</span>
          {/* <span className="vector-text">(522)</span>
          <span className="vector-text">Banquet Hall</span> */}
        </div>
        <div className="row">
          <div className="col-8 hall-back">
            <img className="ban-img " src="Group525.png" alt="hall" />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <div className="back-color">
                  <p className="vendor-detail"> Vendor Contact Detail</p>
                  <div className="vendor d-flex">
                    <img className="ban-img" src="Ellipse26.png" alt="vendor" />
                    <div>
                      <p className="name-vend"> Hassan Khan</p>
                      <p className="member">Member Since Jan 2022</p>
                    </div>
                  </div>
                  <button className="vendor-contact">+92 334 0000000</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="back-color2">
                  <p className="vendor-detail"> Post input</p>
                  <p className="loc-text">
                    Rashid Minhas Rd, Block 1 Gulshan-e-Iqbal, Karachi, Sindh
                  </p>

                  <iframe
                  title="google-maps"
                    width="100%"
                    height="200"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>

                  <button className="vendor-contact">See Location</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container  my-5">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <div className="img-wrap">
                    <img
                      className="img-wedding2"
                      src="Group528.png"
                      alt="wedding"
                    />
                  </div>
                </div>
                <div className="col-4">
                  {" "}
                  <img
                    className="img-wedding"
                    src="Rectangle85.png"
                    alt="wedding"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-wedding"
                    src="Rectangle85.png"
                    alt="wedding"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="container my-5">
        <p className="des-head">Description</p>
        <p className="des-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <Bank />

      <Comment />

      <Footer />
    </>
  );
}

export default Contact;
