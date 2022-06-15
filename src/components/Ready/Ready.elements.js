import styled from "styled-components";
import devices from "../../Helper/devices";

export const ReadyContainer = styled.div`
  background-color: #e7e3ff;
  border: 0.5px solid #5035ff;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReadyText = styled.p`
  /* font-size: 25px; */
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (${devices.mobileL}) {
    font-size: 20px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 18px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 16px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 30px;
  }
`;

export const ReadyButtonsContainer = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const ReadyButton = styled.button`
  height: 50%;
  width: 35%;
  border: none;
  border-radius: 6px;
  background-color: #5035ff;
  color: white;
  cursor: pointer;
  padding: 0 10px;

  @media only screen and (${devices.mobileL}) {
    font-size: 12px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 10px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 8px;
  }

  @media only screen and (${devices.desktop}) {
    font-size: 22px;
  }
`;
