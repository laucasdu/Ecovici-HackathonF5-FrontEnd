import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { productServices } from '../../services/productoServices';
import { CtTxt, TxtDescription, TxtTitle } from '../product/Product.styled';
import { Button, Container, CtButton, CtDescription, CtImage, CtInfo, CtProduct, ImageUrl, TxtPrice, TxtTitleDetail } from './ProductDetail.styled';

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
          <CtInfo>
          <TxtTitleDetail>{product.name}</TxtTitleDetail>
          <CtDescription>
          <TxtDescription>Bicicleta urbana de 6 velocidades 
            fabricada por Capri Bikes. Esta bici es ideal para el uso e 
            ciudad y mixto. Está equipada con un cambio interno y silencioso de 7 velocidades, 
            una tija con suspensión y horquilla de suspensión Forklight 3.0, y un buje Nexus Dynamo que alimenta la luz delantera incluida.Rueda de 26 pulgadas.</TxtDescription>
            </CtDescription>
          <TxtPrice>Precio:{product.price}€</TxtPrice>
          
          <Link to="/form">
          <Button><i className="fa-solid fa-cart-shopping fa-xl"></i> COMPRAR</Button></Link>
          </CtInfo>
          


        </CtTxt>
        
        </CtProduct>


    </Container> 
  );
}

export default ProductDetail