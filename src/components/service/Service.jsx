import React from 'react'
import { TbTruck } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import  './service.css'
const Service = () => {
  return (
    <>
      <main>
        <div className="container p-0">
          <div className="row mb-5  start" >

            <div className="col-md-4 first-store">
              <div className="stor1 d-flex justify-content-center align-items-center rounded-3 ">
               
                <div><div>
                <div className="circle d-flex justify-content-center align-items-center ms-5">
                <TbTruck className=' icon' />
              </div>
                  
                  
                </div>
                  <small>Super Fast and Free Delevery</small></div>
              </div>
            </div>
            <div className="col-md-4 second-store d-flex justify-content-between flex-column" >
              <div className="stor21  d-flex justify-content-center align-items-center  rounded-3">
              <div className="circle d-flex justify-content-center align-items-center">
              <GiReceiveMoney className='icon me-2' />
              </div>
              

                <small> Money-Back Guranteed</small>
              </div>
              <div className="stor22 d-flex justify-content-center align-items-center  rounded-3">
                <div className="circle d-flex justify-content-center align-items-center">
              <MdSecurity className='icon me-2' />
              </div>
              <small> Non Contact Shipping</small>
              </div>

            </div>

            <div className="col-md-4 third-store "> 
              <div className="stor3 d-flex justify-content-center align-items-center  rounded-3" > 
                <div>
                
                <div> <div className="circle d-flex justify-content-center align-items-center ms-5">
                <RiSecurePaymentLine  className='icon '/>
              </div>
              
                 </div><small>Super Secure Payment System</small></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  
  )
}

export default Service