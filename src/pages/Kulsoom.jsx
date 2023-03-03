import React from 'react'
import Contact from '../components/Contact'
import { Link } from "react-router-dom";
function Kulsoom() {
  return (
    <>
    <div className='background-3'>
       <div className="nav justify-content-end">
            <ul className="d-flex ul-main ">
            <li className="li-main"> <Link to="/"> Home </Link> </li>
              <li className="li-main"> <Link to="/service">Services</Link> </li>
              <li className="li-main"> <Link to="/last"> About Us</Link></li>
              <li className="li-main3">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-main2">
            <h1 className="main-head3">
              KULSOOM
            </h1>
            <h3 className='h3-main3'>BANQUET</h3>
            </div>
            </div>
            <Contact/>
            
            </>
  )
}

export default Kulsoom