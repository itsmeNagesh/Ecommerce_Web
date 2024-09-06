import React from 'react'
import './foo.css'
import { Button } from "../../styles/Button";
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
  <>
  <main className='mt-5'>
   
    <footer>
        <div className="container-fluid startf">
        <div className="belt rounded-3 d-flex justify-content-between flex-start ">
     <small className='fs-6 mt-4 ms-4'>Ready to get Started?<br/>Talk to us Today</small>
    <NavLink to={'/contact'} className='btnbelt border-0 mt-4 me-4 text-light fw-bold  d-flex justify-content-center align-items-center'>GET STARTED</NavLink> 

    </div>
            <div className="ms-5 cont">
                <div className="row  row1  ms-4 ">
                    <div className="col-md-3 a d-flex flex-column text-light ">
                         <small className='fs-5 fw-bold'>Stored Item</small>
                         <small className='fs-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Inventore, necessitatibus.</small>
                    </div>
                    <div className="col-md-3 b d-flex flex-column text-light border-0">
                    <span className='fs-5 text-light fw-bold'>Subscribe to Get Important Updates</span>
                    <div className='inpu32 mt-2'> <input type='email' name='email' placeholder='Enter your email' /></div>
                    </div>
                       
                       
                    <div className="col-md-3 d-flex flex-column c">
                    <small className='fs-5 text-light  fw-bold'>Follow Us</small>
                    <div className='d-flex  mt-2 '>
                       <div className='circle2'>
                                    <div className=''>
                                <FaDiscord className="icon2" />
                                    </div>
                       </div>
                  
                    <div className='circle2 ms-3'>
                                <div>
                            <FaInstagram className="icon2" />
                            </div>
                </div>
                <div className='circle2 ms-3'>
                                <div>
                            <FaYoutube className="icon2" />
                            </div>
                </div>
                </div>
                </div>

                    <div className="col-md-3 d d-flex flex-column text-light">
                               <span className='fs-5 fw-bold'>Call Us </span>
                               <span>+91 9155548512</span>
                    </div>

                </div>
            </div>
            <hr className='text-light mt-3 '/>
            <div className='container '>
                <div className="row footr">
                    <div className="col-md-6 text-light">
                        <small className='text-light fs-5'>@{new Date().getFullYear()} Nagesh Kushwaha.All RightReserved</small>
                    </div>
                    <div className="col-md-6 d-flex flex-column text-light">
                        <small>PRIVACY POLICY</small>
                        <small>TEARM & CONDITIONS </small>
                    </div>

                </div>
            </div>
        </div>
       
    </footer>
  </main>
  </>
  )
}

export default Footer