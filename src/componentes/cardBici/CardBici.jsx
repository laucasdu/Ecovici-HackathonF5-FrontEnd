import React from 'react'
import { 
    Anchor, 
    BtComment, 
    BtDelete, 
    BtEdit, 
    BtFav, 
    CtCard, 
    CtCardInfo, 
    CtIcons, 
    CtIconsModify, 
    CtImage, 
    CtTxt, 
    TxtDescription, 
    TxtTitle, } from './CardBici.styled'

function CardBici({bici}) {

  return (

    <>

    <CtCard>
      <CtImage>
          <Imatge/>
      </CtImage>
      <CtCardInfo>
        
        <CtIcons>

          <BtFav><i className="fa-regular fa-thumbs-up fa-2x fa-lg"></i></BtFav>

          <BtComment>

          <Anchor><span>
          <i className="fa-regular fa-comment-dots fa-2x fa-lg"></i></span></Anchor></BtComment>

        </CtIcons>
        <CtIconsModify>
         
         <BtEdit>
         <Anchor><span>
         <i className="fa-solid fa-pen-to-square"></i></span></Anchor></BtEdit>

          <BtDelete>
          <i className="fa-solid fa-trash-can"></i></BtDelete>
        </CtIconsModify>
        </CtCardInfo>
        <CtTxt>
          <TxtTitle></TxtTitle>
          <TxtDescription></TxtDescription>
        </CtTxt>
    </CtCard>

    </>
  )
}

export default CardBici