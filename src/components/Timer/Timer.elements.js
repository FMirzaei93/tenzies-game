import styled from "styled-components";
import devices from "../../Helper/devices";

export const TimerContainer = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media only screen and (${devices.mobileL}) {
    font-size: 16px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 14px;
  }
  @media only screen and (${devices.mobileS}) {
    font-size: 12px;
  }
`;
