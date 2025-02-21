import React, { useEffect, useState } from "react";
import { useProductContext } from "../productcontext/AppProvider";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import "./singlePro.css";
import MyImage from "../components/myimage/Myimage";
import FormatPrice from "../components/FormateNumber";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/star/Star";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../styles/Button";

const SingleProduct = () => {
  const { product, updateCartbag } = useProductContext();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [item, setItem] = useState(0); // Default quantity to 1
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  // Fetch the product data based on the id from the context
  useEffect(() => {
    if (product.length > 0) {
      const filteredData = product.find((currentItem) => currentItem.id === id);
      setData(filteredData);
    }
  }, [id, product]);

  // Handle add to cart logic
  const handleAddToCart = () => {
    setItem(item+1)
    if (data) {
     
      updateCartbag(data.id, item); // Pass product id and quantity
      // alert(`Added ${item} ${data.name}(s) to the cart.`);
    }
  };

  return (
    <>
      <PageNavigation title={data ? data.name : "Loading..."} />
      <div className="container">
        <div className="row">
          {data && (
            <>
              {/* Product Images */}
              <div className="col-md-6">
                <div className="product_images">
                  <section className="pc subimg m-1">
                    <img
                      src={data.img1}
                      alt="Thumbnail"
                      className={`fram shadow ${currentImageIndex === 1 ? "active" : ""}`}
                      onClick={() => setCurrentImageIndex(1)}
                    />
                    <img
                      src={data.img2}
                      alt="Thumbnail"
                      className={`fram ${currentImageIndex === 2 ? "active" : ""}`}
                      onClick={() => setCurrentImageIndex(2)}
                    />
                    <img
                      src={data.img3}
                      alt="Thumbnail"
                      className={`fram ${currentImageIndex === 3 ? "active" : ""}`}
                      onClick={() => setCurrentImageIndex(3)}
                    />
                  </section>
                  <MyImage imgs={data[`img${currentImageIndex}`]} />
                </div>
              </div>

              {/* Product Details */}
              <div className="col-md-6">
                <section className="container">
                  <div className="product-data">
                    <span className="headname">{data.name}</span>
                    <Star Stars={data.star} />

                    <p className="product-data-price">
                      MRP:{" "}
                      <del>
                        <FormatPrice price={data.price + 250000} />
                      </del>
                    </p>
                    <p className="product-data-price product-data-real-price">
                      Deal of the Day: <FormatPrice price={data.price} />
                    </p>
                    <p>{data.description}</p>

                    <div className="product-data-warranty">
                      <div className="product-warranty-data">
                        <TbTruckDelivery className="warranty-icon" />
                        <p>Free Delivery</p>
                      </div>
                      <div className="product-warranty-data">
                        <TbReplace className="warranty-icon" />
                        <p>30 Days Replacement</p>
                      </div>
                      <div className="product-warranty-data">
                        <TbTruckDelivery className="warranty-icon" />
                        <p>Fast Delivery</p>
                      </div>
                      <div className="product-warranty-data">
                        <MdSecurity className="warranty-icon" />
                        <p>2 Year Warranty</p>
                      </div>
                    </div>

                    <div className="product-data-info">
                      <p>
                        Available:{" "}
                        <span>{data.stock > 0 ? "In Stock" : "Not Available"}</span>
                      </p>
                      <p>
                        ID: <span>{data.id}</span>
                      </p>
                      <p>
                        Brand: <span>{data.company}</span>
                      </p>
                      <div className="quantity-control">
                        <span
                          className="fs-1 m-3"
                          onClick={() => item > 1 && setItem(item - 1)}
                          style={{ cursor: "pointer" }}
                        >
                          <GrFormSubtract />
                        </span>
                        <span className="fs-2">{item}</span>
                        <span
                          className="fs-2 m-3"
                          onClick={() => setItem(item + 1)}
                          style={{ cursor: "pointer" }}
                        >
                          <IoMdAdd />
                        </span>
                      </div>
                      <Button onClick={handleAddToCart}>Add To Cart</Button>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
