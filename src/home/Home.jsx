import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import { useProductContext } from "../productcontext/AppProvider";
import Product from '../components/product/Product';  // Corrected import here
import './home.css';

function Home() {
  const myData = {
    name: "Buy4me Store"
  };

  const { searchdata, product } = useProductContext();
  const [spro, setspr] = useState([]);

  const filterdata = (value) => {
    const v = value.toLowerCase().trim();
    const dataf = product.filter((e) => {
      return e.name.toLowerCase().includes(v); // Filter products based on name
    });
    setspr(dataf); // Update filtered data
  };

  useEffect(() => {
    filterdata(searchdata); // Apply filter whenever searchdata changes
  }, [searchdata]);

  // console.log('pro', spro);
   const productStyle={
    display:"flex",
    justifyContent:"center",
    alignItem:'center',
    width:"500px"
   }
  // if(spro.length===0){
  //   setspr('');
  // }
  return (
    <Wrapper className='home'>
      {spro.length > 0 ? (
        spro.map((item) => (  // Map through the filtered data
        <div style={productStyle}> <Product 
        key={item.id} 
        id={item.id} 
        name={item.name} 
        img1={item.img1} 
        price={item.price} 
        category={item.category} 
      /></div> 
        ))
      ) : (
        <HeroSection myData={myData} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // Add custom styling here if needed
`;

export default Home;
