import { INITIAL_BG_COLOR, INITIAL_TEXT_COLOR } from "../constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case "SET_TEXT_COLOR":
      return {
        ...state,
        textColor: action.value,
      };
    case "SET_BG_COLOR":
      return {
        ...state,
        bgColor: action.value,
      };
    default:
      return state;
  }
};

export const initialState = {
  textColor: INITIAL_TEXT_COLOR,
  bgColor: INITIAL_BG_COLOR,
  sidebarOpen: false,
};
