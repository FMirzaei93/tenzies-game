import React from "react";
import {
  StopwatchContainer as SwContainer,
  StopwatchButtonsContainer as SwButtonsContainer,
  StopwatchButton as SwButton,
  StopwatchButtonIcon as SwButtonIcon,
} from "./Stopwatch.elements";

function Stopwatch(props) {
  const StartButton = (
    <SwButton onClick={props.startHandler}>
      Start with timer
      <SwButtonIcon className='fas fa-stopwatch'></SwButtonIcon>
    </SwButton>
  );
  const ActiveButtons = (
    <SwButtonsContainer>
      <SwButton onClick={props.resetHandler}>Reset</SwButton>
      <SwButton onClick={props.pauseResumeHandler}>
        {props.isPaused ? "Resume" : "Pause"}
      </SwButton>
    </SwButtonsContainer>
  );

  return (
    <SwContainer>
      {!props.readyBanner &&
        !props.isWon &&
        (props.isActive ? ActiveButtons : StartButton)}
    </SwContainer>
  );
}

export default Stopwatch;
