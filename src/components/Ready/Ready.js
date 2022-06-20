import React from "react";
import {
  ReadyContainer,
  ReadyText,
  ReadyButtonsContainer,
  ReadyButton,
} from "./Ready.elements";
import devices from "../../Helper/devices";
import { useMediaQuery } from "react-responsive";

function Ready(props) {
  const isLongMobiles = useMediaQuery({
    query: `(${devices.longsL}) and (${devices.longsU})`,
  });
  return (
    <ReadyContainer className={isLongMobiles ? "row-2" : "row-3"}>
      <ReadyText>Ready?</ReadyText>

      <ReadyButtonsContainer>
        <ReadyButton onClick={props.yesClickHandler}>Yes</ReadyButton>
        <ReadyButton onClick={props.cancelClickHandler}>Cancel</ReadyButton>
      </ReadyButtonsContainer>
    </ReadyContainer>
  );
}
export default Ready;
