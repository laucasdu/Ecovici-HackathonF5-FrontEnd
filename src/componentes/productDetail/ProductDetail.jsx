import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { productServices } from '../../services/productoServices';
import { Container, CtImage, CtProduct, ImageUrl } from './ProductDetail.styled';

function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    getProductById ();
}, []);


  // Funció que agafa un moment segons el seu id 
  const getProductById = () => {
    productServices.getProductById(id).then((res) => {
      if(res){
        setProduct(res);
      }
      // console.log(r);
  });
      
  }


  const condicion = true;
  return (

    <Container>
      <CtProduct>
        <CtImage>
        <Link to = {`/products/${product.id}`}>
          <ImageUrl src={product.img} alt="momentfoto" />
          </Link>
        </CtImage>
       </CtProduct>      
    </Container> 
  );
}

export default ProductDetail