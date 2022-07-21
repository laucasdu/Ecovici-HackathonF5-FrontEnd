import styled from "styled-components";

//Navbar
export const CtNavbarMobil = styled.div`
  display: none;
  

  @media screen and (max-width: 820px) {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0 !important;
  height: 9rem;
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: #93AA5F; 
  }

  @media screen and (max-width: 415px) {
  height: 6rem;   
  }

`;


//Menú
export const CtIconos = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
    display: flex;
    justify-content: space-around;
    color: #E8E3CE;    
    align-items: center;
    width: 100vw;
    position: relative;


  }

  @media screen and (max-width: 415px) {


  }

`;

export const BtNavbar = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
  list-style-type: none;
  font-weight: 600;
  border: none;
  color: #E8E3CE;  
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 21px;

}

  @media screen and (max-width: 390px) {

list-style-type: none;
  font-weight: 600;
  border: none;
  color: #E8E3CE;  
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;

  }


`;

export const BtCreate = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
  list-style-type: none;
  border: none;
  color: #E8E3CE;  
  background-color: transparent;
  display: inline-block;
  font-size: 46px;
  }

  @media screen and (max-width: 390px) {
  list-style-type: none;
  font-weight: 600;
  font-size: 24px;
  border: none;
  color: #E8E3CE;  
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  }


`;


