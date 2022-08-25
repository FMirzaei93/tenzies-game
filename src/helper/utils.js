import { nanoid } from "nanoid";

export const createRandomNum = () => {
  return Math.ceil(Math.random() * 6);
  // Math.random(x) :returns a pseudo-random number that 0=< x <1
  // Math.floor(x) : teturns the greates integer <=x
  // Math.ceil(x) : teturns the smallest integer > x
};

export const createDieObject = () => {
  return {
    id: nanoid(),
    value: createRandomNum(),
    isHeld: false,
  };
};

export const createObjsArray = () => {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(createDieObject());
  }
  return array;
};

// It does the same as the function above
// export const createObjsArray = () => {
//   return new Array(10).fill(0).map(() => createDieObject());
// };

export const isNewBestRecord = (newTime, bestRecord) => {
  if (bestRecord == null) return true;

  return newTime.toString() < bestRecord.toString();
};

export const Time = (val) => {
  const value = val;

  const centiSeconds = () => ("0" + (value % 100)).slice(-2);

  const seconds = () => ("0" + (Math.floor(value / 100) % 60)).slice(-2);

  const minutes = () => ("0" + (Math.floor(value / 6000) % 60)).slice(-2);

  const toJSON = () => value;

  const toString = () => `${minutes()}:${seconds()}:${centiSeconds()}`;

  return Object.freeze({
    centiSeconds,
    minutes,
    seconds,
    toJSON,
    toString,
    value,
  });
};
