import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { productServices } from '../../services/productoServices';
import { CtTxt, TxtDescription, TxtTitle } from '../product/Product.styled';
import { Button, Container, CtButton, CtDescription, CtImage, CtProduct, ImageUrl } from './ProductDetail.styled';

function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  
  useEffect(
    () => {
      getProductById(id);
    },
    [id]
  );


  // Funció que agafa un producte segons el seu id 
  const getProductById = (id) => {
    productServices.getProductById(id).then((res) => {
      if(res){
        setProduct(res);
      }
  });
      
  }

  return (

    <Container>

      <CtProduct>
        <CtImage>
          <ImageUrl src={product.img} alt="momentfoto" />
        </CtImage>
       
        <CtTxt>
          <TxtTitle>{product.name}</TxtTitle>
          <TxtDescription>Precio:{product.price}€</TxtDescription>
          <CtDescription>
          <TxtDescription>Bicicleta urbana de 6 velocidades 
            fabricada por Capri Bikes. 
            Esta bici es ideal para el uso e 
            ciudad y misxto. Rueda de 26 pulgadas.</TxtDescription>
          <Button>COMPRAR</Button>
          </CtDescription>

        </CtTxt>
        
        </CtProduct>


    </Container> 
  );
}

export default ProductDetail