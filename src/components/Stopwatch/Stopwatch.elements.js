import styled from "styled-components";

export const StopwatchContainer = styled.div`
  margin-top: 10px;
`;
export const StopwatchButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const StopwatchButton = styled.button`
  min-width: 140px;
  height: 45px;
  font-size: 15px;
  background-color: rgb(218, 204, 255);
  border: 1px solid rgb(177, 177, 177);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;
export const StopwatchButtonIcon = styled.i`
  margin-left: 3px;
  color: var(--button-dark-bg);
`;
