import React from 'react'
import'./trust.css'
const Trusted = () => {
  return (
<>
<div className="container-fluid mt-4">
  <div className="row text-center p-3 ">
    <small>Trusted By 1000+Companies</small>
    <div className="col-md-5 one d-flex justify-content-center align-items-center">
             <div  >  <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands" 
              className='img-fluid imageS'
            /></div>
  
            <div >
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
               className=' img-fluid imageS'
            />
            </div>
    </div>
  
    <div className="col-md-5  d-flex justify-content-center align-items-center">
      <div>    <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
                className=' img-fluid imageS'
            />
          
            </div>
            <div className='imageS1'> <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
                className=' img-fluid imageS'
            /></div>
    </div>
    <div className="col-md-2">
      <div className='imageS1'> <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
             className=' img-fluid imageS'

            /></div>
    </div>


  </div>
</div>
</>
  )
}

export default Trusted