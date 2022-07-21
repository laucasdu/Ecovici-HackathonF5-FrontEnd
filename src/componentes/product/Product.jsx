import React from 'react'
import { Link } from 'react-router-dom'
import { 
    CtCard, 
    CtIcons, 
    CtImage, 
    CtPunts, 
    CtTxt, 
    CtUser, 
    CtUserName, 
    Imatge, 
    Punts, 
    TxtTitle,
    User,
    UserName,
    UserPhoto, } from './Product.styled'

function Product({product}) {

  return (

    <CtCard>
    <CtUser>
      <User>
        <UserPhoto src={product.seller.userImg} alt={product.seller.userName}></UserPhoto>
      </User>
      <CtUserName>
        <UserName>{product.seller.userName}</UserName> 
      </CtUserName>
      <CtPunts>
        <Punts>...</Punts> 
      </CtPunts>
      </CtUser>
      <CtImage>
      <Link to = {`/products/${product.id}`}>
          <Imatge src={product.img}></Imatge>
          </Link>
      </CtImage>

        <CtIcons>
          {/* <BtFav><i className="fa-regular fa-thumbs-up fa-2x fa-lg"></i></BtFav> */}
        </CtIcons>

        <CtTxt>
          <TxtTitle>{product.price}</TxtTitle>
          <TxtTitle>{product.name}</TxtTitle>
        </CtTxt>

    </CtCard>
  )

}

export default Product