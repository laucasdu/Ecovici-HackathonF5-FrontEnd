import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  height: 50%;


  &:hover {
    color: #98B5A4;
  }
`;

export const CtCard = styled.div`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(2px 1px 6px #7a8188 );
  position: relative;
  background-color: white;
  margin-top: 20%;
  transition: 0.4s;
  width: 100%;
  height: 76%;
  
  &:hover {
    transform: scale(0.96, 0.96);
    opacity: 0.8;
  }

  @media screen and (max-width: 820px) {
    width: 90%;
    
  }

  @media screen and (max-width: 390px) {
    width: 100%;

  }

`;

export const CtImage = styled.div`
    border-top: 5px solid #072104;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 53%;
    overflow: hidden;

`;

export const Imatge = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 90%;

  @media screen and (max-width: 820px) {
    
    
  }

  @media screen and (max-width: 390px) {

  }

`;



export const CtIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    border-radius: 0px 0px 8px 8px;
`;

export const BtFav = styled.button`
    font-size: 90%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 50%;
    height: 50%;
    transition-duration: 0.4s;
    cursor: pointer; 
    border: none;


  @media screen and (max-width: 820px) {
    font-size: 29px;
  }

  @media screen and (max-width: 390px) {
    font-size: 23px;
  }

`;


  export const BtEdit = styled.button`
    padding-top: 2%;
    color: #345226;
    padding-bottom: 2.2%;
    width: 50%;
    height: 50%;
    transition-duration: 0.4s;
    border: none;
    cursor: pointer;

  @media screen and (max-width: 820px) {
    font-size: 29px;
  }

  @media screen and (max-width: 390px) {
    font-size: 23px;
  }

`;



export const CtTxt = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const TxtTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 2%;
  color: black;

  @media screen and (max-width: 820px) {
    font-size: 29px;
  }

  @media screen and (max-width: 390px) {
    font-size: 23px;
  }

`;


export const TxtDescription = styled.p`
  font-size: 1.4em;
  margin-left: 2%;
  color: #345226;
  margin-top: -3%;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }

  @media screen and (max-width: 390px) {
    font-size: 22px;
  }
  
`;

export const CtUser = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  color: #345226;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
width: 50%;

@media screen and (max-width: 800px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    width: 60%;
  }


`;

export const UserPhoto = styled.img`
  width: 100%;
  object-fit: cover;

  



`;

export const CtUserName = styled.div`
width: 40%;
margin-right: 40%;

@media screen and (max-width: 820px) {
  width: 20%;
  }

  @media screen and (max-width: 390px) {
    width: 20%;

  }

`;



export const UserName = styled.h5`
width: 40%;
margin-left: 5%;


@media screen and (max-width: 800px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {

    
  }

`;

export const Num = styled.h2`
/* color: #072104; */
color: #D5E0DC;
top:69%;
left:26%;
position: fixed;
text-shadow: 1px 2px 4px #072104;
/* text-shadow: 1px 2px 4px #D5E0DC; */

@media screen and (max-width: 820px) {
  top:68%;
  left:28%;
  position: fixed;
}

@media screen and (max-width: 390px) {
  top:70%;
  left:24%;
  position: fixed;

}

`;

export const CtPunts = styled.div`
width: 30%;

@media screen and (max-width: 800px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    margin-right: 5%;
  }

`;

export const Punts = styled.p`
color: #345226;
font-size: 25px;

`;

