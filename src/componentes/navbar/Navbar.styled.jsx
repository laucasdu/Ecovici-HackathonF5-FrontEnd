import styled from "styled-components";

export const CtContainer = styled.div`
  background-color: #93AA5F;
  height: 80px;
  width: 100%;
  padding-top: 2%;
  
  @media screen and (max-width: 820px) {
  height: 250px;
  width: 100%;
  background-color: #072104;
  }

  @media screen and (max-width: 390px) {
    height: 150px;
    width: 100%;
  }
`;

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  justify-content: space-between;


  @media screen and (max-width: 820px) {
  height: 250px;
  width: 100%;
  background-color: #072104;
   
  }

  @media screen and (max-width: 390px) {
    height: 150px;
    width: 100%;
  }
`;

export const CtLogo = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 820px) {
    margin-left: 25%;
    margin-top: -3%;
  }

  @media screen and (max-width: 390px) {
  }
`;

export const TxtLogo = styled.button`
  font-size: 20px;
    margin: 5px;
    line-height: 30px;
    text-transform: uppercase ;
    width: max-content;

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px){
    display: none;

  }

`;

//Menú
export const CtInfo = styled.div`
     display: flex;
    list-style: none;

`;

export const TxtHome = styled.button`
  font-weight: 600;
  height: 13%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0.1vw;
  background-color: #98B5A4;
  color:#072104;  
  cursor: pointer;


  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px) {
    display: none;
  }

`;

export const BtBici = styled.button`
  font-size: 20px;
    margin: 5px;
    line-height: 30px;
    text-transform: uppercase ;
    width: max-content;


  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;


export const BtEquipamiento = styled.button`
   font-size: 20px;
    margin: 5px;
    line-height: 30px;
    text-transform: uppercase ;
    width: max-content;


  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;






