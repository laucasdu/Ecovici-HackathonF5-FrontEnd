import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Button,
    CtCard, 
    CtIcons, 
    CtImage, 
    CtTxt, 
    CtUser, 
    CtUserName, 
    Imatge, 
    TxtTitle,
    User,
    UserName,
    CtButton,
    UserPhoto,
    TxtPrice,
    BtFav, } from './Product.styled'

function Product({product}) {

  return (

    <CtCard>
    <CtUser>
      <User>
        <UserPhoto src={product.seller.userImg} alt={product.seller.userName}></UserPhoto>
      </User>
      <CtUserName>
        <UserName>{product.seller.userName}</UserName> 
        <BtFav><i className="fa-solid fa-heart"></i></BtFav>

      </CtUserName>
      </CtUser>
      <CtImage>
      <Link to = {`/products/${product.id}`}>
          <Imatge src={product.img}></Imatge>
          </Link>
      </CtImage>

        <CtIcons>
        </CtIcons>

        <CtTxt>
          <TxtTitle>{product.name}</TxtTitle>
          <TxtPrice>Precio: {product.price}€</TxtPrice>
          <CtButton>
          <Button>COMPRAR</Button>
          </CtButton>
        </CtTxt>

    </CtCard>
  )

}

export default Product