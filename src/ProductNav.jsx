import React from 'react'
// import FeatureProduct from './components/FeatureProduct/FeatureProduct'
import {products} from './productcontext/productData'
import Products from './components/product/Product';
const ProductNav = () => {
  return (
    <div className="row   ">
   <div className='d-flex justify-content-center align-items-center'>
    <main className='container'>
      <section className='row'>
        <small className='mt-3'>CHEAK NOW</small>
        <h2 className='fw-bold'>Our Feature Services</h2>
        
        {products.map((curElem) => {
          return (
            <div className="col-4 ms-md-3 ps-md-5 mb-5" key={curElem.id}>
              <Products {...curElem} />
            </div>
          );
        })}   
          
      </section>
     
    </main>
    {/* <main main className="view  fs-3 d-flex justify-centent-center align-items-center">
      <NavLink to={'/product'}  className=''>View More....</NavLink> </main> */}
    </div>
  
</div>
  )
}

export default ProductNav