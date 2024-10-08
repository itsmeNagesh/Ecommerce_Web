import React from "react";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import About from './about/About'
import Home from './home/Home'
import Contact from './contact/Contact'
import Cart from './cart/Cart'
import Product from './ProductNav'
import SingleProduct from './Single_product/SingleProduct'
import Errorpage from './Errorpage'
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from './components/Header'
import Footer from "./components/footer/Footer";
const App = () => {
   const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgba(97, 84, 243, 0.607)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router> 
      <GlobalStyle/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
    </>
  )
};

export default App;
