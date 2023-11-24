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
  textColor: "#323232",
  bgColor: "#f2f3f7",
  sidebarOpen: false,
};
