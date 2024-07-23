import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link,NavLink } from 'react-router-dom';
import './navxx.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Header = () => {
  return (
 <>
   <Navbar  expand="md" className=' ss  '>
      <Navbar.Brand as={Link} to="/">
        <img src="/images/logo.png" alt="Brand Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-md-center justify-content-start text-light">
          <Nav.Link as={Link} to="/" className="nav-item active  text-light fw-bold fs-4">Home</Nav.Link>
          <Nav.Link as={Link} to="/product" className=' text-light fw-bold fs-4'>Products</Nav.Link>
          <Nav.Link as={Link} to="https://nageshwebcode.netlify.app/" className=' text-light fw-bold fs-4' target='-blank'>About</Nav.Link>
          <Nav.Link as={Link} to="#" className=' text-light fw-bold fs-4'>Services</Nav.Link>
          <Nav.Link as={Link} to="/contact" className=' text-light fw-bold fs-4'>Contact</Nav.Link>
        </Nav>
        <Form inline className="ml-auto my-2 my-lg-0 d-flex">
          <FormControl type="search" placeholder="Search" className="mr-sm-2 ii" />
          <Button variant="outline-success ms-2 bg-light text-dark">Search</Button>
        </Form>
        <NavLink to="/cart" className="  navbar-link cart-trolley--link m-5 fs-1">
              <FiShoppingCart className="cart-trolley " />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
      </Navbar.Collapse>
    </Navbar>
 </>
  )
}

export default Header