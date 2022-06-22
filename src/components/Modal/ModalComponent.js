import React from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalButton,
  ModalText,
} from "./Modal.elements";
import { ModalProvider } from "styled-react-modal";

export default function ModalComponent({ closeDialogboxHandler, show }) {
  return show ? (
    <ModalProvider>
      <ModalContainer
        isOpen={true}
        onBackgroundClick={closeDialogboxHandler}
        onEscapeKeydown={closeDialogboxHandler}
      >
        <ModalHeader>
          <ModalTitle>Error!</ModalTitle>
          <ModalButton onClick={closeDialogboxHandler}>
            <i className="far fa-window-close"></i>
          </ModalButton>
        </ModalHeader>

        <ModalText>
          <p>Plese click the Resume button first😉</p>
        </ModalText>
      </ModalContainer>
    </ModalProvider>
  ) : null;
}
