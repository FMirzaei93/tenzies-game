import React from "react";
import { TimerContainer } from "./Timer.elements";

function Timer({ time }) {
  return (
    <TimerContainer>
      <span>{time.minutes()}:</span>
      <span>{time.seconds()}:</span>
      <span>{time.centiSeconds()}</span>
    </TimerContainer>
  );
}

export default Timer;
