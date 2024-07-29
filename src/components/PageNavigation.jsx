import React from 'react'
import { NavLink } from 'react-router-dom'
const PageNavigation = ({title}) => {
  return (
    <>
    <div className='title1  m-3 fs-5 '> <NavLink to={'/'} className="title ">Home</NavLink> / { title}</div>
   
    </>
  )
}

export default PageNavigation