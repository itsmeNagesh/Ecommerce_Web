// import React from 'react'
// import {

//   SideBySideMagnifier,

//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION
// } from "react-image-magnifiers";
// const Myimage = ({imgs}) => {
//   return (
//     <>
//   <SideBySideMagnifier
//   imageSrc={imgs}
//   imageAlt="Example"
//   mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
//   touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
//   // largeImageSrc="./large-image.jpg"
// />
//     <img src={imgs} alt='djcnd' height={300} width={400} className=' m-5 img-fluid shadow '/>
//     </>
//   )
// }

// export default Myimage
import React from 'react';

const MyImage = ({ imgs }) => {
  return (
    <>
    
      <img 
        src={imgs} 
        alt="Example" 
        height={300} 
        width={400} 
        className="m-5 img-fluid shadow" 
      />
    </>
  );
};

export default MyImage;


// import React, { useState } from 'react';
// import {
//   SideBySideMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION
  
// } from "react-image-magnifiers";
// // Make sure to import your CSS file
// let k=1;
// let yes=true;
// // const[flag, setflag]=useState(true);
// const MyImage = ({ imgs }) => {
//   return (
//     <>
//       <SideBySideMagnifier
      
//         imageSrc={imgs}
//         imageAlt="Example"
//         mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK}
//         touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
//         overlayBoxColor="red"
//         overlayBoxOpacity={k}
//         alwaysInPlace={yes}
//         fillAvailableSpace={yes}
//         // overlayOpacity={k}
//         className="magnifier-small " // Apply the custom class
//       />
//     </>
//   );
// };

// export default MyImage;

