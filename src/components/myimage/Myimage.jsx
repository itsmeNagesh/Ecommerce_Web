import React from 'react'
// import {
//   Magnifier,
//   GlassMagnifier,
//   SideBySideMagnifier,
//   PictureInPictureMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION
// } from "react-image-magnifiers";
const Myimage = ({imgs}) => {
  return (
    <>
    {/* <GlassMagnifier
  imageSrc={imgs}
  imageAlt="Example"
  allowOverflow="true"
  shape="circle"
  magnifierSize="50%"
  className='shadow'
  // largeImageSrc="./large-image.jpg" // Optional
/> */}
    <img src={imgs} alt='djcnd' height={300} width={500} className='img-fluid shadow'/>
    </>
  )
}

export default Myimage