import React from "react";
import { TimerContainer } from "./Time.elements";
import { SplitTime } from "../../Helper/utils.module";

function Timer(props) {
  const minute = SplitTime(props.time).minute;
  const second = SplitTime(props.time).second;
  const centisecond = SplitTime(props.time).centisecond;

  return (
    <TimerContainer>
      <span>{minute}:</span>
      <span>{second}:</span>
      <span>{centisecond}</span>
    </TimerContainer>
  );
}

export default Timer;
