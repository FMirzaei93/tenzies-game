import styled from "styled-components";
import Modal from "styled-react-modal";

export const ModalContainer = Modal.styled`
   width: 30rem;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5035ff;
  padding: 0.25rem 1rem;
  height: 30%;
`;
export const ModalTitle = styled.span`
  font-size: 1.75rem;
  color: white;
`;
export const ModalButton = styled.button`
  font-size: 2rem;
  color: white;
  background-color: #5035ff;
  border: none;
`;
export const ModalText = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  font-size: 1.6rem;
  background-color: white;
  padding: 2rem 1rem;
`;
