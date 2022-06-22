import React from "react";
import { TimerContainer } from "./Timer.elements";
import { splitTime } from "../../Helper/utils.module";

function Timer(props) {
  const minute = splitTime(props.time).minute;
  const second = splitTime(props.time).second;
  const centisecond = splitTime(props.time).centisecond;

  return (
    <TimerContainer>
      <span>{minute}:</span>
      <span>{second}:</span>
      <span>{centisecond}</span>
    </TimerContainer>
  );
}

export default Timer;
