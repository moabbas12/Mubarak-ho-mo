import React from 'react';
import House from '../components/House';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
function Home2() {
  return (
    <>
    <div className='background-2'>
       <div className="nav justify-content-end">
            <ul className="d-flex ul-main ">
            <li className=""> <Link className='li-main2' to="/"> Home </Link> </li>
              <li className=""> <Link  className='li-main2' to="/service">Services</Link> </li>
              <li className=""> <Link  className='li-main2' to="/last"> About Us</Link></li>
              <li className="li-main2">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-main2">
            <h1 className="main-head2">
              Services
            </h1>
            <h3 className='h3-main2'>Services for your wedding</h3>
            </div>
            </div>

            <div className="row">
              <div className="col-2 sidebar py-3 ">
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
              <div className="col-10 py-4">
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
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                    </div>
                  </div>
                  <div className="col-12">
                  <div className='row'>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                        <div className='col-lg-4 col-md-6'> <House /></div>
                        <div/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
    <Footer/>
    </>
  )
}

export default Home2