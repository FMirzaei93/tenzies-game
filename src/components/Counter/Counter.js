import React from "react";
import { CounterContainer } from "./Counter.elements";

function Counter(props) {
  return (
    <CounterContainer>
      <span>{props.count} </span>
      <span>{props.count > 1 ? "Rolls" : "Roll"}</span>
    </CounterContainer>
  );
}

export default Counter;
