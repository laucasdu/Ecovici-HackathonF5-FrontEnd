import React from 'react'
import { Container, CtImage, CtMoment, ImageUrl } from './ProductDetail.styled';

function ProductDetail() {


  return (

    <Container>
      <CtMoment>
      <CtImage>
          <ImageUrl src={ProductDetails.img} alt="momentfoto" />
        </CtImage>
       </CtMoment>

    </Container> 
  );
}

export default ProductDetail