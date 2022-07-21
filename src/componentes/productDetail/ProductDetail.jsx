import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { productServices } from '../../services/productoServices';
import { Container, CtImage, CtProduct, ImageUrl } from './ProductDetail.styled';

function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  
  useEffect(
    () => {
      getProductById(id);
    },
    [id]
  );


  // Funció que agafa un moment segons el seu id 
  const getProductById = (id) => {
    productServices.getProductById(id).then((res) => {
      if(res){
        setProduct(res);
      }
      // console.log(r);
  });
      
  }

  return (

    <Container>
      <CtProduct>
        <CtImage>
          <ImageUrl src={product.img} alt="momentfoto" />
        </CtImage>
       </CtProduct>      
    </Container> 
  );
}

export default ProductDetail