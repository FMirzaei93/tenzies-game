import React from "react";
import Die from "./components/Die/Die";
import StopWatch from "./components/Stopwatch/Stopwatch";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import Ready from "./components/Ready/Ready";
import Confetti from "react-confetti";

import {
  createDieObject,
  createObjsArray,
  isNewBestRecord,
} from "./Helper/utils.module";
import ModalComponent from "./components/Modal/ModalComponent";
import { ModalProvider } from "styled-react-modal";
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

export default function Home() {
  const isLongMobiles = useMediaQuery({
    query: `(${devices.longsL}) and (${devices.longsU}) and (${devices.mobiles})`,
  });

  const [isWon, setIsWon] = React.useState(false);
  const [readyBanner, setReadyBanner] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [showDialogbox, setShowDialogbox] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const [bestRecord, setBestRecord] = useLocalStorage("recordedTimeObj", null);
  const { pauseTimer, resetTimer, startTimer, time, timerStatus } = useTimer();

  React.useEffect(() => {
    if (isWon && time > 0 && isNewBestRecord(time, bestRecord)) {
      setBestRecord(bestRecord);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWon]);

  function startHandler() {
    startTimer();
    setCount(0);
    setIsActive(true);
    setIsWon(false);
    setDiceObjsArray(createObjsArray());
  }

  function pauseResumeHandler() {
    if (timerStatus === TimerStatuses.Paused) {
      startTimer();
    }

    if (timerStatus === TimerStatuses.Running) {
      pauseTimer();
    }
  }

  function resetHandler() {
    resetTimer();
    setCount(0);
    setIsActive(false);
    setIsWon(false);
    setDiceObjsArray(createObjsArray());
  }

  const [diceObjsArray, setDiceObjsArray] = React.useState(createObjsArray());
  const diceElements = diceObjsArray.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      clickHandler={() => dieClickHandler(item.id)}
    />
  ));

  React.useEffect(() => {
    const allHeld = diceObjsArray.every((item) => item.isHeld);
    const firstValue = diceObjsArray[0].value;
    const allEqualValue = diceObjsArray.every(
      (item) => item.value === firstValue
    );

    if (allHeld && allEqualValue) {
      pauseTimer();
      setIsWon(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, diceObjsArray);

  function rollNewDice() {
    if (isWon) {
      // The button text is: Back To Menu
      setIsWon(false);
      setDiceObjsArray(createObjsArray());
      resetHandler();
    } else {
      //The button text is: Roll

      if (timerStatus !== TimerStatuses.Paused) {
        setCount((prevCount) => prevCount + 1);
        setDiceObjsArray((prevArray) => {
          return prevArray.map((item) => {
            return item.isHeld ? item : createDieObject();
          });
        });
      } else setShowDialogbox(true);
    }
  }

  function tryAgain() {
    setReadyBanner(true);
  }

  function yes() {
    setReadyBanner(false);
    startHandler();
  }

  function cancel() {
    setReadyBanner(false);
    resetHandler();
  }

  function dieClickHandler(id) {
    if (timerStatus !== TimerStatuses.Paused) {
      setDiceObjsArray((prevArray) => {
        return prevArray.map((item) => {
          return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
        });
      });
    } else {
      setShowDialogbox(true);
    }
  }

  function closeDialogboxHandler() {
    setShowDialogbox(false);
  }

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
              <Ready yesClickHandler={yes} cancelClickHandler={cancel} />
            ) : (
              <DiceContainer className={isLongMobiles ? "row-2" : "row-3"}>
                {diceElements}
              </DiceContainer>
            )}
            {!readyBanner && isWon ? (
              <Congrats className="row-1">Congrats!🎉 You Won!</Congrats>
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
                isActive={isActive}
                isPaused={timerStatus === TimerStatuses.Paused}
                startHandler={startHandler}
                pauseResumeHandler={pauseResumeHandler}
                resetHandler={resetHandler}
                isWon={isWon}
                readyBanner={readyBanner}
              />
            ) : null}
            <BestRecordDiv className="row-1">
              {bestRecord
                ? `Your Best Record: ${bestRecord.minute}:${bestRecord.second}:${bestRecord.centisecond}`
                : `No record achieved yet!`}
            </BestRecordDiv>
          </InnerContainer>
          {!readyBanner && isWon ? (
            <Confetti height={window.innerHeight} width={window.innerWidth} />
          ) : null}

          {showDialogbox ? (
            <ModalProvider>
              <ModalComponent closeDialogboxHandler={closeDialogboxHandler} />
            </ModalProvider>
          ) : null}
        </Frame>
      </Container>
    </div>
  );
}
