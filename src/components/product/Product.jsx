import React from "react";
import { NavLink } from "react-router-dom";
import './productCard.css';
import FormateNumber from '.././FormateNumber'
const Product = ({ id, name, img1, price, category }) => {
  return (<>
    <NavLink to={`/singleproduct/${id}`}>
      <div className=" card2 card  rounded-0 border-0  shadow">
        <figure>
          <img src={img1} alt={name} />
          <figcaption className="caption text-dark fw-bold">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex d-flex justify-content-between align-items-centerm p-0 m-0 ">
            <p className="fw-bold ">{name}</p>
            <p className="card-data--price fw-bold">{<FormateNumber price={price}/>}</p>
          </div>
        </div>
      </div>
      
    </NavLink>
   
     </>
  );
};

export default Product;
