import { createDieObject, createObjsArray } from "../helper/utils";

export const initialState = {
  count: 0,
  isWon: false,
  readyBanner: false,
  showDialog: false,
  dice: createObjsArray(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        count: 0,
        isWon: false,
        dice: createObjsArray(),
        readyBanner: false,
        showDialog: false,
      };

    case "game-over":
      return {
        ...state,
        isWon: true,
      };

    case "shuffle":
      return {
        ...state,
        count: state.count + 1,
        dice: state.dice.map((item) =>
          item.isHeld ? item : createDieObject()
        ),
      };
    case "hold":
      return {
        ...state,
        dice: state.dice.map((item) => {
          return item.id === action.payload
            ? { ...item, isHeld: !item.isHeld }
            : item;
        }),
      };

    case "banner":
      return {
        ...state,
        readyBanner: action.payload,
      };

    case "dialog":
      return {
        ...state,
        showDialog: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
