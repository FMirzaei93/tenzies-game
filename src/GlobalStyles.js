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
    font-family: 'Times New Roman', Times, serif;
  }

  html{
   
  @media only screen and (${devices.mobileS}) {
    font-size: 7px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 8px;
  }
  @media only screen and (${devices.mobileL}) {
    font-size: 9px;
  }
  @media only screen and (${devices.tabletM}) {
    font-size: 10px;
  }
  @media only screen and (${devices.tabletL}) {
    font-size: 11px;
  }
  @media only screen and (${devices.laptop}) {
    font-size: 13px;
  }
  @media only screen and (${devices.desktop}) {
    font-size: 17px;
  }
  @media only screen and (${devices.bigScreen}) {
    font-size: 50px;
  }
 
  }

`;

/*----------- Main Container -----------*/
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/*----------- White Frame -----------*/

export const Frame = styled.main`
  width: 95vmin;
  height: 95vmin;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 4.5%;

  @media only screen and (${devices.mobiles}) {
    height: 70vmax;
  }
`;
/*----------- Inner Container -----------*/
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px 4px rgb(218, 204, 255);
`;

/*----------- Counter + Timer -----------*/
export const CounterTimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.5rem;
`;

/*----------- Title -----------*/

export const Title = styled.h1`
  font-size: 2.5rem;
`;

/*-----------Instruction -----------*/

export const Instruction = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0 5px;
`;
/*----------- Dice Container -----------*/
export const DiceContainer = styled.div`
  width: 85%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  grid-gap: 5% 3%;
  justify-items: center;
  margin-bottom: 5%;
`;
/*----------- Congrats -----------*/

export const Congrats = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
`;
/*----------- Button Container -----------*/

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;
/*----------- Button -----------*/

export const Button = styled.button`
  width: 35%;
  height: 80%;
  border: none;
  border-radius: 4px;
  background-color: #5035ff;
  color: white;
  font-size: 1.35rem;
  cursor: pointer;
  padding: 0 10px;

  @media only screen and (${devices.mobiles}) {
    width: 40%;
  }

  @media only screen and (${devices.longsL}) and (${devices.longsU}) {
    height: 65%;
  }
`;
/*----------- Stopwatch Container -----------*/

// In its container

/*----------- BestRecord -----------*/

export const BestRecordDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
`;

export default GlobalStyle;
