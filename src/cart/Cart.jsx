import React, { useEffect, useState } from 'react';
import { useProductContext } from "../productcontext/AppProvider";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import MyImage from '../components/myimage/Myimage';
import Star from '../components/star/Star';
import FormatPrice from "../components/FormateNumber";
import { Button } from "../styles/Button";
import { products } from '../productcontext/productData'; // Import the product data

const Cart = () => {
  const { NofProduct, removeItem } = useProductContext(); // Access context
  const [cartItems, setCartItems] = useState([]);

  // Match NofProduct IDs with products from the productData
  useEffect(() => {
    const matchedItems = NofProduct.map((cartItem) => {
      const productDetails = products.find((product) => product.id === cartItem.id);
     console.log(productDetails)
     setCartItems(productDetails);
      return productDetails
        ? { ...productDetails, quantity: cartItem.quantity }
        : null;
    }).filter((item) => item !== null); // Filter out null matches
    setCartItems(matchedItems);
  }, [NofProduct]);
  console.log("NofProduct:", NofProduct);
  console.log("Matched Items:", matchedItems);
  
  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="container" key={item.id}>
            <div className="row">
              <div className="col-md-6">
                <div className="product_images">
                  <section className="pc subimg m-1">
                    <img src={item.img1} alt={item.name} className="fram shadow" />
                    <img src={item.img2} alt={item.name} className="fram" />
                    <img src={item.img3} alt={item.name} className="fram" />
                  </section>
                  <MyImage imgs={item.img1} />
                </div>
              </div>
              <div className="col-md-6">
                <section className="container">
                  <div className="grid grid-two-column">
                    <div className="product-data">
                      <span className="headname">{item.name}</span>
                      <Star Stars={item.star} />
                      <p className="product-data-price">
                        MRP:
                        <del>
                          <FormatPrice price={item.price + 250000} />
                        </del>
                      </p>
                      <p className="product-data-price product-data-real-price">
                        Deal of the Day: <FormatPrice price={item.price} />
                      </p>
                      <p>{item.description}</p>
                      <p>
                        Available:
                        <span>
                          {item.stock > 0 ? "In Stock" : "Not Available"}
                        </span>
                      </p>
                      <p>ID: <span>{item.id}</span></p>
                      <p>Brand: <span>{item.company}</span></p>
                      <div>
                        <span
                          className="fs-1 m-3"
                          onClick={() => updateCartbag(item.id, Math.max(item.quantity - 1, 0))}
                          style={{ cursor: "pointer" }}
                        >
                          <GrFormSubtract />
                        </span>
                        <span className="fs-2">{item.quantity}</span>
                        <span
                          className="fs-2 m-3"
                          onClick={() => updateCartbag(item.id, item.quantity + 1)}
                          style={{ cursor: "pointer" }}
                        >
                          <IoMdAdd />
                        </span>
                      </div>
                      <Button
                        className="k"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete from Cart
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
};

export default Cart;
