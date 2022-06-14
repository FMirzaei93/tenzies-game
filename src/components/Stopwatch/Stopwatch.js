import React from "react";
import {
  StopwatchContainer,
  ActiveBtnsContainer,
  Button,
  ButtonIcon,
} from "./Stopwatch.elements";

function Stopwatch(props) {
  const StartButton = (
    <Button onClick={props.startHandler}>
      Start with timer
      <ButtonIcon className='fas fa-stopwatch'></ButtonIcon>
    </Button>
  );
  const ActiveButtons = (
    <ActiveBtnsContainer>
      <Button onClick={props.resetHandler}>Reset</Button>
      <Button onClick={props.pauseResumeHandler}>
        {props.isPaused ? "Resume" : "Pause"}
      </Button>
    </ActiveBtnsContainer>
  );

  return (
    <StopwatchContainer className='row-1'>
      {!props.readyBanner &&
        !props.isWon &&
        (props.isActive ? ActiveButtons : StartButton)}
    </StopwatchContainer>
  );
}

export default Stopwatch;
