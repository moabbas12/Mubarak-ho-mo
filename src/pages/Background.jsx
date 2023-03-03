import React from "react";


import Input from "../components/Input";
import Pics from "../components/Pics";
import Focus from "../components/Focus";
import Test from "../components/Test";
import Latest from "../components/Latest";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



function Background() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="nav justify-content-end">
            <ul className="d-flex ul-main ">
              <li className="li-main"> <Link to="/"> Home </Link> </li>
              <li className="li-main"> <Link to="/service">Services</Link> </li>
              <li className="li-main"> <Link to="/last"> About Us</Link></li>
              <li className="li-main">
                <button className="btn-nav">Contact Us</button>
              </li>
            </ul>
          </div>
          <div className="text-main">
            <h1 className="main-head">
              Event
              <br /> Planer
            </h1>
            <p className="p-main">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet{" "}
            </p>
          </div>
        </div>
      </div>

      <Input/>
<Pics/>
<Focus/>
<Test/>
<Latest/>
<Footer/>
    </>
  );
}

export default Background;
