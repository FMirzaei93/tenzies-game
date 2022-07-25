import React from "react";
import Die from "./components/Die/Die";
import StopWatch from "./components/Stopwatch/Stopwatch";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import Ready from "./components/Ready/Ready";
import Confetti from "react-confetti";

import { isNewBestRecord, Time } from "./Helper/utils.module";
import ModalComponent from "./components/Modal/ModalComponent";
import GlobalStyle from "./GlobalStyles";
import { useMediaQuery } from "react-responsive";
import devices from "./Helper/devices";

import {
  Container,
  CounterTimerContainer,
  DiceContainer,
  Frame,
  InnerContainer,
  Title,
  Instruction,
  Congrats,
  ButtonContainer,
  Button,
  BestRecordDiv,
} from "./GlobalStyles";
import { useLocalStorage, useTimer } from "./Helper/hooks";
import { TimerStatuses } from "./Helper/hooks/useTimer";
import reducer, { initialState } from "./reducers";

const localStorageOptions = {
  serialise: JSON.stringify,
  deserialise: (str) => {
    const parsedValue = JSON.parse(str);

    if (typeof parsedValue === "number") return Time(parsedValue);
    if (typeof parsedValue === "object") return Time(parsedValue.value || 0);

    return null;
  },
};

export default function Home() {
  const isLongMobiles = useMediaQuery({
    query: `(${devices.longsL}) and (${devices.longsU}) and (${devices.mobiles})`,
  });

  const [bestRecord, setBestRecord] = useLocalStorage(
    "recordedTimeObj",
    null,
    localStorageOptions
  );
  const { pauseTimer, resetTimer, startTimer, time, timerStatus } = useTimer();
  const [{ count, dices, isWon, readyBanner, showDialog }, dispatch] =
    React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (isWon && time.value > 0 && isNewBestRecord(time, bestRecord)) {
      setBestRecord(time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWon]);

  React.useEffect(() => {
    const allHeld = dices.every((item) => item.isHeld);
    const firstValue = dices[0].value;
    const allEqualValue = dices.every((item) => item.value === firstValue);

    if (allHeld && allEqualValue) {
      pauseTimer();
      dispatch({ type: "game-over" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dices]);

  function startHandler() {
    startTimer();
    dispatch({ type: "reset" });
  }

  function resetHandler() {
    resetTimer();
    dispatch({ type: "reset" });
  }

  function pauseResumeHandler() {
    if (timerStatus === TimerStatuses.Paused) {
      startTimer();
    }

    if (timerStatus === TimerStatuses.Running) {
      pauseTimer();
    }
  }

  function rollNewDice() {
    if (isWon) {
      resetHandler();
    } else {
      if (timerStatus !== TimerStatuses.Paused) {
        return dispatch({ type: "shuffle" });
      } else {
        return dispatch({ type: "dialog", payload: true });
      }
    }
  }

  function dieClickHandler(id) {
    if (timerStatus !== TimerStatuses.Paused) {
      dispatch({ type: "hold", payload: id });
    } else {
      dispatch({ type: "dialog", payload: true });
    }
  }

  function tryAgain() {
    dispatch({ type: "banner", payload: true });
  }

  //------------------- Changing the showDialogbox State -------------------
  function closeDialogboxHandler() {
    dispatch({ type: "dialog", payload: false });
  }

  const diceElements = dices.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      clickHandler={() => dieClickHandler(item.id)}
    />
  ));

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Frame>
          <InnerContainer>
            <CounterTimerContainer className="row-1">

              <Counter count={count} />
              <Timer time={time} />
            </CounterTimerContainer>
            <Title className="row-1">Tenzies</Title>
            <Instruction className="row-1">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </Instruction>
            {readyBanner ? (
              <Ready
                yesClickHandler={startHandler}
                cancelClickHandler={resetHandler}
              />
            ) : (
              <DiceContainer className={isLongMobiles ? "row-2" : "row-3"}>
                {diceElements}
              </DiceContainer>
            )}
            {!readyBanner && isWon ? (
              <React.Fragment>
                <Congrats className="row-1">Congrats!🎉 You Won!</Congrats>
                <Confetti
                  height={window.innerHeight}
                  width={window.innerWidth}
                />
              </React.Fragment>
            ) : null}
            {!readyBanner && (
              <ButtonContainer className="row-1">
                <Button onClick={rollNewDice}>
                  {isWon ? "Back To Menu" : "Roll"}
                </Button>

                {isWon ? (
                  <Button onClick={tryAgain}>Try again with timer</Button>
                ) : null}
              </ButtonContainer>
            )}
            {!readyBanner && !isWon ? (
              <StopWatch
                pauseResumeHandler={pauseResumeHandler}
                resetHandler={resetHandler}
                startHandler={startHandler}
                timerStatus={timerStatus}
              />
            ) : null}
            <BestRecordDiv className="row-1">
              {bestRecord
                ? `Your Best Record: ${bestRecord.toString()}`
                : `No record achieved yet!`}
            </BestRecordDiv>
          </InnerContainer>
          <ModalComponent
            show={showDialog}
            closeDialogboxHandler={closeDialogboxHandler}
          />
        </Frame>
      </Container>
    </div>
  );
}
