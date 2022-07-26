import styled from "styled-components";

export const CtContainer = styled.div`
  height: 80px;
  background-color: #93AA5F;
  width: 100%;
  padding-top: 2%;
  
  @media screen and (max-width: 820px) {
  height: 250px;
  width: 100%;
  background-color: #93AA5F;
  }

  @media screen and (max-width: 390px) {
    height: 150px;
    width: 100%;
  }
`;

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-content: space-between;


  @media screen and (max-width: 820px) {
  height: 250px;
  width: 100%;
  background-color: #93AA5F;
   
  }

  @media screen and (max-width: 390px) {
    height: 150px;
    width: 100%;
  }
`;

export const CtLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    margin-left: 25%;
    margin-top: -3%;
  }

  @media screen and (max-width: 390px) {
  }
`;

export const TxtLogo = styled.img`
    font-size: 20px;
    background-color: #93AA5F;
    margin-top: -2%;
    margin-left: 20%;
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
    margin-right: 4%;


    @media screen and (max-width: 820px) {
      display: none;


}


`;

export const TxtHome = styled.button`
  font-weight: 600;
  height: 13%;
  padding: 15px 32px;
  text-align: center;
  font-size: 17px;
  border-radius: 0.1vw;
  background-color: #E8E3CE;
  cursor: pointer;


  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px) {
    display: none;
  }

`;

export const BtBici = styled.button`
  color: #93AA5F;
  background-color: #E8E3CE;
  border: none;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 2%;



  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;


export const BtEquipamiento = styled.button`
  color: #93AA5F;
  background-color: #E8E3CE;
  border: none;
  font-weight: 800;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 25px 32px;
  margin-right: 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer; 

  



  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;






