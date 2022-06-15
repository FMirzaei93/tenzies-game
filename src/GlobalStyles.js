import styled, { createGlobalStyle } from "styled-components";
import devices from "./Helper/devices";

const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0b2434;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

`;
/*----------- White Frame -----------*/

export const Frame = styled.main`
  width: 70vh;
  height: 75vh;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 30px;

  @media only screen and (${devices.mobileL}) {
    width: 95vw;
  }
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
`;

/*----------- Counter + Timer -----------*/
export const ConterTimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

/*----------- Title -----------*/

export const Title = styled.h1`
  @media only screen and (${devices.mobileL}) {
    font-size: 20px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 18px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 18px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 30px;
  }
`;

/*-----------Instruction -----------*/

export const Instruction = styled.p`
  text-align: center;

  @media only screen and (${devices.mobileL}) {
    font-size: 13px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 11px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 9px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 25px;
  }
`;
/*----------- Dice Container -----------*/
export const DiceContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  gap: 4%;
  justify-items: center;
`;
/*----------- Congrats -----------*/

export const Congrats = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;

  @media only screen and (${devices.mobileL}) {
    font-size: 16px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 14px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 12px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 26px;
  }
`;
/*----------- Button Container -----------*/

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;
/*----------- Button -----------*/

export const Button = styled.button`
  width: 30%;
  height: 70%;
  border: none;
  border-radius: 4px;
  background-color: #5035ff;
  color: white;
  font-size: 17px;
  cursor: pointer;
  padding: 0 10px;

  @media only screen and (${devices.mobileL}) {
    width: 40%;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 14px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 11px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 20px;
  }
`;
/*----------- Stopwatch Container -----------*/

// In its container

/*----------- BestRecord -----------*/

export const BestRecordDiv = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (${devices.mobileM}) {
    font-size: 14px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 11px;
  }
  @media only screen and (${devices.desktop}) {
    font-size: 19px;
  }
`;

export default GlobalStyle;
