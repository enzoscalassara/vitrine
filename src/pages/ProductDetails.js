import React, { useContext } from 'react';
// import useParams
import {useParams} from 'react-router-dom'
// import product context
import {ProductContext} from '../contexts/ProductContext'


const ProductDetails = () => {
  // get the product id from the url
  const {id} = useParams();
  console.log(id)
  const {products} = useContext(ProductContext);

  // pega baseado no id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className='h-screen flex 
    justify-center items-center'>Carregando...</section>
  }

  console.log(product);

  // destructure product
  const {title, price, description, image} = product;
  return (
    <section className='pt-32 pb12 lg:py-32 h-screen 
    flex items-center'>
      <div className='container mx-auto'>
        {/* image e text wrapper */}
        <div className='flex flex-col lg:flex-row 
        items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center 
          items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' 
            src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 text-center 
          lg:text-left'>
            <h1 className='text-[26px] font-medium
            mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-x1 text-red-500 
            font-medium mb-6'>
              R$ {price}
            </div>
            <p className='mb-8'>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )

};

export default ProductDetails;
