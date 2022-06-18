import React from "react";
import {
  ReadyContainer,
  ReadyText,
  ReadyButtonsContainer,
  ReadyButton,
} from "./Ready.elements";

function Ready(props) {
  return (
    <ReadyContainer className='row-3'>
      <ReadyText>Ready?</ReadyText>

      <ReadyButtonsContainer>
        <ReadyButton onClick={props.yesClickHandler}>Yes</ReadyButton>
        <ReadyButton onClick={props.cancelClickHandler}>Cancel</ReadyButton>
      </ReadyButtonsContainer>
    </ReadyContainer>
  );
}
export default Ready;
