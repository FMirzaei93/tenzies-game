import styled from "styled-components";
import devices from "../../Helper/devices";

export const StopwatchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const ActiveBtnsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
`;
export const Button = styled.button`
  width: 30%;
  height: 85%;
  font-size: 1rem;
  background-color: rgb(218, 204, 255);
  border: 1px solid rgb(177, 177, 177);
  border-radius: 3px;
  cursor: pointer;
  color: #000;

  &:hover {
    filter: brightness(95%);
  }
`;
export const ButtonIcon = styled.i`
  margin-left: 3px;
  color: var(--button-dark-bg);
`;
