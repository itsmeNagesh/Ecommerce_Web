import { NavLink } from "react-router-dom";
import Service from './service/Service'
import FeatureProduct from './FeatureProduct/FeatureProduct'
import { Button } from "../styles/Button";
import './here.css'
import {useProductContext} from '../productcontext/ProductContext'
import Trusted from './trusted/Trusted'
import Footer from './footer/Footer'
const HeroSection = ({ myData }) => {
  const { name } = myData;
const {featureProducts}=useProductContext();
// console.log('zz',featureProducts)  
  return (
   <>
   <main>
    <div className="container">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                <p className="intro-data  m-0">Welcome to </p>
                <h1> {name} </h1>
                <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
                </div>
            </div>
            <div className="col-md-6 pt-5 imghero">
            <div className="hero-section-image  ">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-fluid"
              />
            </figure>
          </div>
            </div>
        </div>
        </div>
        <div className="row   ">
    <div className="feture" ><FeatureProduct/></div>
  
</div>
        <div className="row ">
            <div className="service" ><Service/></div>
          
        </div>
       
  
  
   </main> 
  
   <div className="row st2 mt-5">
          <div><Trusted/> </div>
        </div>
        
        <div className="foot">
          <Footer/>
        </div>
   </>
  );
};


export default HeroSection;