import styled from "styled-components";

export const ReadyContainer = styled.div`
  background-color: var(--ready-section-bg);
  border: 0.5px solid var(--button-dark-bg);
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const ReadyText = styled.p`
  font-size: 25px;
  margin-top: 40px;
`;

export const ReadyButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ReadyButton = styled.button`
  height: 40px;
  min-width: 100px;
  border: none;
  border-radius: 6px;
  background-color: #5035ff;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 40px;
  padding: 2px;
  display: inline;
  padding: 0 10px;
`;
