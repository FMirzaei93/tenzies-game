import React from "react";
import { TimerStatuses } from "../../helper/hooks/useTimer";
import {
  StopwatchContainer,
  ActiveBtnsContainer,
  Button,
  ButtonIcon,
} from "./Stopwatch.elements";

function Stopwatch({
  pauseResumeHandler,
  resetHandler,
  startHandler,
  timerStatus,
}) {
  const isPaused = timerStatus === TimerStatuses.Paused;
  const isIdle = timerStatus === TimerStatuses.Idle;

  const StartButton = (
    <Button onClick={startHandler}>
      Start with timer
      <ButtonIcon className='fas fa-stopwatch'></ButtonIcon>
    </Button>
  );
  const ActiveButtons = (
    <ActiveBtnsContainer>
      <Button onClick={resetHandler}>Reset</Button>
      <Button onClick={pauseResumeHandler}>
        {isPaused ? "Resume" : "Pause"}
      </Button>
    </ActiveBtnsContainer>
  );

  return (
    <StopwatchContainer className='row-1'>
      {isIdle ? StartButton : ActiveButtons}
    </StopwatchContainer>
  );
}

export default Stopwatch;
