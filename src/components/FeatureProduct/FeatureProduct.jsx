import React from 'react';
import './ProductService.css';
import Product from '../../components/product/Product';
import { useProductContext } from '../../productcontext/ProductContext';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className='fw-bold text-center fs-5 '>...Loading</div>;
  }

  return (
    <main className='container'>
      <section className='row'>
        <small className='mt-3'>CHEAK NOW</small>
        <h2 className='fw-bold'>Our Feature Services</h2>
        {featureProducts.map((curElem) => {
          return (
            <div className="col-4 ms-md-3 ps-md-5 mb-5" key={curElem.id}>
              <Product {...curElem} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default FeatureProduct;
