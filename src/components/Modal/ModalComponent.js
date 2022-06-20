import React from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalButton,
  ModalText,
} from "./Modal.elements";

export default function ModalComponent(props) {
  return (
    <div>
      <ModalContainer
        isOpen={true}
        onBackgroundClick={props.closeDialogboxHandler}
        onEscapeKeydown={props.closeDialogboxHandler}
      >
        <ModalHeader>
          <ModalTitle>Error!</ModalTitle>
          <ModalButton onClick={props.closeDialogboxHandler}>
            <i className='far fa-window-close'></i>
          </ModalButton>
        </ModalHeader>

        <ModalText>
          <p>Plese click the Resume button first😉</p>
        </ModalText>
      </ModalContainer>
    </div>
  );
}
