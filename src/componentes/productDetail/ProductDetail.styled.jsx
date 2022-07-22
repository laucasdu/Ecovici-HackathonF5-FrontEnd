import styled from "styled-components";

export const Container = styled.div`
   display : flex;
    align-items: flex-end;
    justify-content: center;
    min-height : 600px;
    width: 100vw;
    padding-bottom: 55px;
    

  @media screen and (max-width: 820px) {
  flex-direction: column;
  align-items: center;
  height: 100vh;
  }
  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding-top: 25%;
    /* height: 100vh; */
  }
`;

export const CtProduct = styled.div`
  height : 450px;  
  display: flex;
  width: 1100px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  border-radius : 8px;
  justify-content: space-around;


  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    top: 23%;
    height: 60%;
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    height: 60vh;
    top: 22%;
  }
`;


export const CtImage = styled.div`
  width: 100%;
  display: flex;
  


  &:hover {
    opacity:0.8;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 29%;
  }

  @media (max-width: 450px) {
    width: 100%;

  }
`;

export const ImageUrl = styled.img`
width: 100%;
height: 300px;
margin-top: 90px;
  margin-left: 50px;
  border-radius: 0.2vw;
  display: flex;



  /* box-shadow: 0 0 8px grey; */
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;


export const CtTxt = styled.div`
  width: 50%;

  


  @media screen and (max-width: 820px) {
    margin-top: -2%;
    width: 100%;

  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }




`;

export const TxtTitle = styled.h3`
  display: flex;
  font-style: 16px;
  margin-bottom: 20%;
  flex-direction: column;
  width: 20%;
  border-radius : 8px;
  margin-bottom: 20%;


    @media screen and (max-width: 820px) {
    margin-top: 5%;
    width: 100%;

  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }

`;





export const CtDescription = styled.div`
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    

    @media screen and (max-width: 820px) {
    margin-top: 5%;
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }

  `;


export const TxtDescription = styled.div`
    margin-bottom: 2%;
    font-size: 22px;
    align-items: right;

    @media screen and (max-width: 820px) {
    margin-top: 5%;
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }

  `;



export const Button  = styled.button`
  color: #E8E3CE;
  background-color: #93AA5F;
  border: none;
  align-items: center;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

`;
