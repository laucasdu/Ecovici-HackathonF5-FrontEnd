import styled from "styled-components";

export const CtForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: row;

  
@media only screen and (max-width:820px) {
}

@media only screen and (max-width:450px) {

} 

`;

export const Form = styled.form`
  width: 40%;
  /* height: 55vh; */
  flex-direction: column;
  /* filter: drop-shadow(2px 1px 6px #7a8188 ); */
  padding: 2%;
  border-radius: 0.2vw;
  position: fixed;
  top: 14%;
  /* background-color: white; */

  @media only screen and (max-width:820px) {
    top:32%;
    width: 90%;
    height: 42%;
    padding-top: 5%;
  }

@media only screen and (max-width:450px) {
    top:22%;
    width: 80%;
    height: 60%;
  } 

`;

export const Input = styled.input`
  width: 100%;
  background-color: #E8E3CE;
  padding: 12px 20px;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    font-size: 1.2em;
  }
`;

export const InputDescription = styled.textarea`
  resize: none;
  background-color: #E8E3CE;
  border-radius: 0.2vw;
  width: 100%;
  padding: 12px 20px;
  font-weight: 500;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    font-size: 1.2em;
  }
`;

export const BtEdit = styled.button`
  color:black;
  width: 100%;
  height: 40px;
  font-size: small;
  align-items: center;
  margin-top: 20px;
  background-color: #93AA5F;
  border: none;
  font-weight: 800;
  color:#E8E3CE;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 0.2vw;
  &:hover {
    color: #E8E3CE;
  }

  

  @media only screen and (max-width:820px) {
  font-size: 20px;
  width: 50%;
  font-size: 19px;
}


@media (max-width: 420px) {
   
  font-size: 20px;
  width: 45%;
  font-size: 19px;

  }

`;

export const BtCancel = styled.button`
  color:black;
  width: 50%;
  height: 40px;
  font-size: small;
  background-color: none;
  align-items: center;
  margin-top: 20px;
  background-color: #93AA5F;
  border: none;
  font-weight: 800;
  color:#072104;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 0.2vw;

  &:hover {
    color: #1D0B29;
  }


  @media only screen and (max-width:820px) {
    font-size: 20px;
  width: 50%;
  font-size: 19px;
}

  @media (max-width: 420px) {
    font-size: 20px;
    width: 45%;
  font-size: 19px;

  }
`;


export const CtButton = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;

 color:#072104;

  &:hover {
    color: #1D0B29;
  }

  @media (max-width: 450px) {
    position: absolute;
    top: 85%;
    margin-top: 3%;
  }
`;


export const CtTxt = styled.h1`
  color:black;
  font-size: small;
  background-color: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1%;

  @media only screen and (max-width:820px) {
  font-size: 20px;
  }

@media (max-width: 450px) {
  font-size: 12px;
  }

`;

export const CtTitlePrincipal = styled.div`
  display: flex;
  background-color: #93AA5F;
  border-radius: 0.2vw;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width:820px) {
  height: 20%;
}

@media only screen and (max-width:450px) {
  align-items: center;
  margin-right: 20%;

} 

`;

export const TxtPrincipal = styled.h1`
  color:#072104;
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  @media only screen and (max-width:820px) {
  height: 20%;
  font-size: 40px;

}

@media only screen and (max-width:450px) {
  align-items: center;
  margin-right: 2%;
  font-size: 30px;
} 

`;

export const Select = styled.select`
  width: 60%;
  padding: 12px 20px;
  margin-top: 10px;
  margin-left: 1%;
  border: 2px solid grey;
  box-sizing: border-box;
  display: flex;
  border-radius: 2vw;
  font-size: 1em;
  @media (max-width: 450px) {
    padding: 18px 30px;
    font-size: 1.5em;
  }
`;
export const DivSelects = styled.div`
  display: flex;
`;

export const TxtArea = styled.textarea`
  padding: 4%;
  margin-top: 2%;
  border-radius: 2vw;
  max-width: 350px;
  min-width: 350px;
  min-height: 80px;
  max-height: 80px;
`;
