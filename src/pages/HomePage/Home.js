import React from "react";
import Die from "../../components/Die/Die";
import StopWatch from "../../components/Stopwatch/Stopwatch";
import Counter from "../../components/Counter/Counter";
import Timer from "../../components/Timer/Timer";
import Ready from "../../components/Ready/Ready";
import Dialogbox from "../../components/Dialogbox/Dialogbox";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import { SplitTime } from "../../Helper/utils.module";
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
} from "../../GlobalStyles";

export default function Home() {
  const [isWon, setIsWon] = React.useState(false);
  const [readyBanner, setReadyBanner] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const [bestRecord, setBestRecord] = React.useState(
    // In cases: If it's the first time user uses the app OR when the user refreshes the page
    localStorage.getItem("recordedTimeObj") !== null
      ? {
          // localStorage.getItem("recordedTimeObj"): a string object of string members ("{minute:'00', second:'11', centisecond:'48'}")
          minute: JSON.parse(localStorage.getItem("recordedTimeObj")).minute,
          second: JSON.parse(localStorage.getItem("recordedTimeObj")).second,
          centisecond: JSON.parse(localStorage.getItem("recordedTimeObj"))
            .centisecond,
        }
      : {}
  );

  //------------------------ Stopwatch Part ----------------------

  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && !isWon) {
      interval = setInterval(
        () => {
          setTime((prevTime) => prevTime + 1);
        },
        10
        // It says: do the function every 10/1000 = 1/100 seconds
        //For showing centiseconds, we need to devide 1 second to 100 parts, so every second is composed of 100*(1/100 second),
      );
    } else {
      if (isWon && time !== 0) {
        // If the player is won and they have played with timer:
        CheckForTheNewRecord();
      }

      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      // To avoid memory leak
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isPaused, isWon]);

  function startHandler() {
    setTime(0);
    setCount(0);
    setIsActive(true);
    setIsPaused(false);
    setIsWon(false);
    setDiceObjsArray(createObjsArray());
  }

  function pauseResumeHandler() {
    setIsPaused(!isPaused);
  }

  function resetHandler() {
    setTime(0);
    setCount(0);
    setIsPaused(false);
    setIsActive(false);
    setIsWon(false);
    setDiceObjsArray(createObjsArray());
  }

  //----------------------- Main Part -------------------------
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

    allHeld && allEqualValue && setIsWon(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, diceObjsArray);

  function createRandomNum() {
    return Math.ceil(Math.random() * 6);
    // Math.random(x) :returns a pseudo-random number that 0=< x <1
    // Math.floor(x) : teturns the greates integer <=x
    // Math.ceil(x) : teturns the smallest integer > x
  }

  function createDieObject() {
    return {
      id: nanoid(),
      value: createRandomNum(),
      isHeld: false,
    };
  }

  function createObjsArray() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(createDieObject());
    }
    return array;
  }

  function rollNewDice() {
    if (isWon) {
      // The button text is: Back To Menu
      setIsWon(false);
      setDiceObjsArray(createObjsArray());
      resetHandler();
    } else {
      //The button text is: Roll

      if (!isPaused) {
        setCount((prevCount) => prevCount + 1);
        setDiceObjsArray((prevArray) => {
          return prevArray.map((item) => {
            return item.isHeld ? item : createDieObject();
          });
        });
      } else setIsOpen(true);
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
    if (!isPaused) {
      setDiceObjsArray((prevArray) => {
        return prevArray.map((item) => {
          return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
        });
      });
    } else {
      setIsOpen(true);
    }
  }

  //------------------- Saving Best Record in Local Storage --------------------

  function CheckForTheNewRecord() {
    const minute = SplitTime(time).minute;
    const second = SplitTime(time).second;
    const centisecond = SplitTime(time).centisecond;

    const currentTimeObject = {
      minute: minute,
      second: second,
      centisecond: centisecond,
    };

    const recordedTimeObj = localStorage.getItem("recordedTimeObj");

    if (recordedTimeObj !== null) {
      // It means that it's not the first time the player is playing with timer and saving records process
      const savedObj = JSON.parse(recordedTimeObj);

      // Comparison between current time and the user's record
      if (parseInt(currentTimeObject.minute) < parseInt(savedObj.minute)) {
        saveNewRecord();
      } else {
        if (parseInt(currentTimeObject.minute) === parseInt(savedObj.minute)) {
          if (parseInt(currentTimeObject.second) < parseInt(savedObj.second)) {
            saveNewRecord();
          } else {
            if (
              parseInt(currentTimeObject.second) === parseInt(savedObj.second)
            ) {
              if (
                parseInt(currentTimeObject.centisecond) <
                parseInt(savedObj.centisecond)
              ) {
                saveNewRecord();
              }
            }
          }
        }
      }
    } else {
      // If it's the first time the player played with timer
      localStorage.setItem(
        "recordedTimeObj",
        JSON.stringify(currentTimeObject)
      );
      setBestRecord(currentTimeObject);
    }

    function saveNewRecord() {
      localStorage.setItem(
        "recordedTimeObj",
        JSON.stringify(currentTimeObject)
      );
      setBestRecord(currentTimeObject);
    }
  }

  //------------------- Change isOpen State -------------------
  function closeDialogboxHandler() {
    setIsOpen(false);
  }

  // ----------------- Return ------------------
  return (
    <Container>
      <Frame>
        <InnerContainer>
          <CounterTimerContainer className='row-1'>
            {/*-------------- Counter /*--------------*/}

            <Counter count={count} />
            {/*-------------- Timer --------------*/}

            <Timer time={time} />
          </CounterTimerContainer>

          {/*---------- Title ---------*/}
          <Title className='row-1'>Tenzies</Title>

          {/*---------- Instraction ---------*/}

          <Instruction className='row-1'>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </Instruction>

          {/*---------- Ready And Dice Container ---------*/}

          {readyBanner ? (
            <Ready yesClickHandler={yes} cancelClickHandler={cancel} />
          ) : (
            <DiceContainer>{diceElements}</DiceContainer>
          )}

          {readyBanner && <div className='row-2'></div>}

          {/*---------- Congrats  ---------*/}

          {!readyBanner && isWon && (
            <Congrats className='row-1'>Congrats!🎉 You Won!</Congrats>
          )}

          {/*---------- Roll, Back To Menu, Try again Buttons  ---------*/}

          {!readyBanner && (
            <ButtonContainer className='row-1'>
              {
                <Button onClick={rollNewDice}>
                  {isWon ? "Back To Menu" : "Roll"}
                </Button>
              }

              {isWon && (
                <Button onClick={tryAgain}>Try again with timer</Button>
              )}
            </ButtonContainer>
          )}

          {/*---------- Stopwatch Container Call ---------*/}

          {!readyBanner && !isWon && (
            <StopWatch
              isActive={isActive}
              isPaused={isPaused}
              startHandler={startHandler}
              pauseResumeHandler={pauseResumeHandler}
              resetHandler={resetHandler}
              isWon={isWon}
              readyBanner={readyBanner}
            />
          )}

          {/*---------- Best Record Section ---------*/}

          <BestRecordDiv className='row-1'>
            {bestRecord.minute && bestRecord.second && bestRecord.centisecond
              ? `Your Best Record: ${bestRecord.minute}:${bestRecord.second}:${bestRecord.centisecond}`
              : `No record achieved yet!`}
          </BestRecordDiv>
        </InnerContainer>
        {/*---------- Confetti Lib ---------*/}
        {!readyBanner && isWon && (
          <Confetti height={window.innerHeight} width={window.innerWidth} />
        )}
        {/*---------- Dialog Box ----------*/}

        {isOpen && (
          <Dialogbox
            closeBox={closeDialogboxHandler}
            modalWidth='350px'
            headerBackgroundColor='#5035ff'
            headerTextColor='white'
            headerHeight='45px'
            headerText='Error!'
            headerFontSize='20px'
            closeButtonColor='white'
            bodyBackgroundColor='white'
            bodyTextColor='black'
            bodyFontSize='20px'
            bodyText='Please click the Resume button first😉'
          />
        )}
      </Frame>
    </Container>
  );
}
