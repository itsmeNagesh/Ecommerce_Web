import React from 'react'
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
const Myimage = ({imgs}) => {
  return (
    <>
    <GlassMagnifier
  imageSrc={imgs}
  imageAlt="Example"
  allowOverflow="true"
  shape="circle"
  TOUCH_ACTIVATION="true"
  MOUSE_ACTIVATION="true"
  PictureInPictureMagnifier="true"
  magnifierSize="50%"
  className='shadow'
  // largeImageSrc="./large-image.jpg" // Optional
/>
    {/* <img src={imgs} alt='djcnd' height={300} width={500} className='img-fluid'/> */}
    </>
  )
}

export default Myimage