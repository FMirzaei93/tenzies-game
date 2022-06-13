import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0b2434;
  }

`;
/*----------- White Frame -----------*/

export const Frame = styled.main`
  width: 70vh;
  height: 75vh;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 100px auto;
  padding: 30px;
`;
/*----------- Inner Container -----------*/
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 15px 4px rgb(218, 204, 255);

  @media only screen and (min-width: 200px) {
    background-color: #eee567;
  }
`;

/*----------- Dice Container -----------*/
export const DiceContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 10px;
  justify-items: center;
  margin-top: 30px;
`;
/*----------- Counter -----------*/
export const Counter = styled.div`
  font-size: 19px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  left: 10px;
`;
/*----------- Title and Instruction-----------*/

export const Title = styled.h1`
  margin-top: 40px;
`;
export const Instruction = styled.p`
  text-align: center;
  margin-top: 20px;
`;
/*----------- Congrats -----------*/

export const Congrats = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
/*----------- Button -----------*/

export const Button = styled.button`
  height: 45px;
  min-width: 140px;
  border: none;
  border-radius: 4px;
  background-color: #5035ff;
  color: white;
  font-size: 17px;
  cursor: pointer;
  padding: 0 10px;
`;
/*----------- BestRecord -----------*/

export const BestRecordDiv = styled.div`
  position: absolute;
  bottom: 10px;
`;

export default GlobalStyle;
