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
  position: relative;
  background-color: #F7F5EB;
  margin-top: 20%;
  transition: 0.4s;
  
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
    display: flex;
    border-radius: 20px;
    justify-content: center;
    height: 53%;
    border-radius: 2%;
    overflow: hidden;

`;

export const Imatge = styled.img`
  object-fit: cover;
  border-radius: 20px;
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
    position: absolute;
    background-color: #93AA5F;
    width: 2em;
    height: 2em;
    border: none;
    border-radius: 20%;
    color: white;
    top: 5%;
    right: 5%;
    font-size: 18px;
    cursor: pointer; 


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
  filter: drop-shadow(2px 1px 4px #7a8188 );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  border-radius: 0px 0px 25px 25px;

`;

export const TxtTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 2%;
  color: #93AA5F;

  @media screen and (max-width: 820px) {
    font-size: 29px;
  }

  @media screen and (max-width: 390px) {
    font-size: 23px;
  }

`;



export const TxtPrice = styled.h2`
  margin-top: 0;
  color: #93AA5F;


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
width: 15%;
margin-left: 2%;
margin-right: 5%;

@media screen and (max-width: 800px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    width: 60%;
  }

`;

export const UserPhoto = styled.img`
  width: 100%;
  border-radius: 80px;
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

export const CtButton  = styled.div`
color: #345226;
font-size: 25px;

`;

export const Button  = styled.button`
  color: #E8E3CE;
  background-color: #93AA5F;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

`;


