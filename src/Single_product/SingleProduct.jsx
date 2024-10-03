import React, { useEffect, useState } from 'react';
import { useProductContext } from '../productcontext/ProductContext';
import { useParams } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import './singlePro.css'
import MyImage from '../components/myimage/Myimage'
import FormatPrice from "../components/FormateNumber";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from '../components/star/Star'
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

import { Button } from "../styles/Button";
const SingleProduct = () => {
  const { getSingleproduct, product } = useProductContext();
  const { id } = useParams();
  const [idstate,setid]=useState(id);
  const [data, setData] = useState(null);

  // const API = "https://api.pujakaitem.com/api/products";

  // useEffect(() => {
  //   getSingleproduct(`${API}?id=${id}`);
  // }, [id, getSingleproduct]);

  useEffect(() => {
    if (product.length > 0) {
      const filteredData = product.find((currentItem) => currentItem.id === idstate);
      setData(filteredData);
    }
  }, [idstate]);
 const [digit,setdigit]=useState(1);
  console.log('dataafter',data)
    const [item,setItem]=useState(1);
   const  handleaddcart=()=>{
    setItem(item+1);
   }
  return (
    <>
      <PageNavigation title={data ? data.name : 'Loading...'} />
      <div className="container">
        <div className="row ">
         {data  &&  <div className="col-md-6">  <div className="product_images">
     <section className=' pc subimg  m-1'>
     <img src={data.img1} alt='dcd'  className='fram shadow' onClick={()=>setdigit(1)}/>
     <img src={data.img2} alt='dcd '  className='fram' onClick={()=>setdigit(2)}/>
     <img src={data.img3} alt='dcd'  className='fram' onClick={()=>setdigit(3)}/>
     </section>
            {/* <MyImage imgs={data.img1} /> */}
            <MyImage imgs={data[`img${digit}`]} />
          
          </div>
          <section className=' mobile mt-4 '>
     <img src={data.img1} alt='dcd'  className='fram shadow' onClick={()=>setdigit(1)}/>
     <img src={data.img2} alt='dcd '  className='fram' onClick={()=>setdigit(2)}/>
     <img src={data.img3} alt='dcd'  className='fram' onClick={()=>setdigit(3)}/>
     </section>
          </div>}
        
          <div className="col-md-6">
          {data && <section className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            {/* <MyImage imgs={data.image} /> */}
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <span className='headname'>{data.name}</span>
            <Star Stars={data.star}  />

            <p className="product-data-price">
              MRP:
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
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {data.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {data.id} </span>
              </p>
              <p>
                Brand :<span> {data.company} </span>
              </p>
              <div>
                <span className=' fs-1 m-3' onClick={()=>{if(item>0)setItem(item-1)}} style={{cursor:"pointer"}}><GrFormSubtract /></span>
                <span className='fs-2'>{item}</span>
                <span className='fs-2 m-3' onClick={()=>setItem(item+1)} style={{cursor:"pointer"}}><IoMdAdd />
                </span>
              </div>
              <Button className='' onClick={handleaddcart} >Add To Cart</Button>
            </div>
          </div>
        </div>
      </section>}
          </div>
        </div>
      </div>
   









    </>
  );
};

export default SingleProduct;
