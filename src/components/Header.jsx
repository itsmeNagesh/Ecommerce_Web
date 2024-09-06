 
import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';
import SignIn from './Login/SignIn';
import Signup from './Login/Signup';
import './navxx.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const[showModal2,setShowModal2]=useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="md" className='ss transparent-navbar' expanded={expanded} onToggle={handleToggle}>
        <Navbar.Brand as={Link} to="/" className='d-flex justify-content-center align-items-center'>
          <img src="/images/logo2.png" alt="Brand Logo" className='logo2 img-fluid' /> 
            <Form inline className=" serchbox ml-auto my-2 my-lg-0 d-flex">
            <FormControl type="search" placeholder="Search....." className=" fw-bold sec mr-sm-2 rounded-0 serchbox border-0 " />
            <Button className="sec2  ms-2 px-2 bg-light text-dark rounded-0 serchbox border-0">Search</Button>
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='tog me-4' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  nav-mobile w-100 d-flex justify-content-md-center justify-content-start text-light">
            <Nav.Link as={Link} to="/" className="hh  active text-light fw-bold fs-4" onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={Link} to="/product" className='hh text-light fw-bold fs-4' onClick={handleSelect}>Products</Nav.Link>
            <Nav.Link as={Link} to="https://nageshwebcode.netlify.app/" className=' hh text-light fw-bold fs-4' target='_blank' onClick={handleSelect}>About</Nav.Link>
            <Nav.Link as={Link} to="#" className='hh text-light fw-bold fs-4' onClick={handleSelect}>Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='hh text-light fw-bold fs-4' onClick={handleSelect}>Contact</Nav.Link>
          </Nav>
          <Form inline className=" searchbtn ml-auto my-2 my-lg-0 d-flex">
            <FormControl type="search" placeholder="Search" className= "searchbtn mr-sm-2 ii rounded-0 border-0" />
            <Button variant="outline-success ms-2 bg-light text-dark rounded-0 border-0 searchbtn hh">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/" className='text-light fw-bold fs-4' onClick={handleSelect}>
          <button className='btn btn-danger rounded-0 border-0 login 'onClick={()=>setShowModal2(true)}>Login</button></Nav.Link>
          <NavLink to="/cart" className="navbar-link cart-trolley--link fs-1">
            <FiShoppingCart className="cart-trolley" />
            <span className="kkw cart-total--item ">10</span>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      {showModal && <Signup showModal={showModal} setShowModal={setShowModal}/>}

{showModal2 && <SignIn  showModal2={showModal2} setShowModal2={setShowModal2}/>}
    </>
  );
}

export default Header;
