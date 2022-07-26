import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  margin-left: 5%;
  height: 35em;
  display: flex;
  justify-content: center;
  
  @media (max-width: 450px) {
    height: auto;
  }
`;
    

export const CtProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* background-color: #ffffff; */
  margin-top: 2%;

  @media (max-width: 650px) {
    padding-top: 8%;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;


export const CtImage = styled.div`
  margin-top: 8%;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media (max-width: 450px) {
    width: 100%;
    height: 35%;
  }
`;
  

export const ImageUrl = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;
  /* border-radius: 2vw; */
`;


export const CtTxt = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

  
  @media (max-width: 450px) {
    width: 100%;
    height: 35%;
  }
`;


export const CtInfo  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;


`;



export const TxtTitleDetail = styled.h3`
    font-size: 25px;
    color: #93AA5F;
    margin-left: 1%;


   
  
  @media (max-width: 450px) {
    font-size: 1.6em;
    margin-left: 3%;
  }
`;


export const TxtPrice = styled.div`
    font-size: 1.2em;
    color: #93AA5F;
    margin-top: 1%;
    font-weight: 500;
    margin-left: 1%;

  
  @media (max-width: 450px) {
    font-size: 1.6em;
    margin-left: 3%;
  }
`;


export const CtDescription = styled.div`
    width: 60%;
    border-top: 3px solid #93AA5F;
    flex-direction: column;
    display: flex;
    padding-top: 4% ;

  @media (max-width: 450px) {
    font-size: 1.6em;
    margin-left: 3%;
  }
`;






export const Button  = styled.button`
  color: #E8E3CE;
  background-color: #93AA5F;
  border: none;
  width: 25%;
  margin-left: 1%;
  margin-top: 4%;
  align-items: center;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px 15px;
  font-size: 16px;

`;





