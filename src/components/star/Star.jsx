import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './star.css'
const Star = ({Stars}) => {
       const rating=Array.from({length:5}, (ele, index)=>{
let number=index+0.5;
return(
    <span key={index}>
        {Stars>=index+1?(<FaStar className="icon21"/> ) :(Stars>=number ?(<FaStarHalfAlt className="icon21"/>):(<AiOutlineStar className="icon21" />))}
    </span>
)

       })
  return (
    <>

    <span>
        <span>{rating}</span>
      
    </span>
    </>
  )
}

export default Star