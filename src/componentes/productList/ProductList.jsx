import React, { useEffect, useState } from 'react'
import { productServices } from '../../services/productoServices';
import Product from '../product/Product';
import { CtProductList } from './ProductList.styled'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    getAllProducts();
  }, []);


  const getAllProducts = () => {
    productServices.getAllProducts().then((res) => {
      setProducts(res);
      // console.log(res)
      });
    };



  return (

    <>
    
      <CtProductList>
          {products.map((product, key)=> (
              <Product 
              key={key} 
              product={product}

              />
      
        ))}
        </CtProductList>
        </>

  )
}

export default ProductList