import styled from "styled-components";

export const ReadyContainer = styled.div`
  background-color: #e7e3ff;
  border: 0.5px solid #5035ff;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReadyText = styled.p`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
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
  font-size: 1.25rem;
`;
