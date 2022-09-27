import React, { createContext, useContext, useReducer } from "react";
import actions from "./actions";

const MenuStateContext = createContext();
const MenuDispatchContext = createContext();

const MenuReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return { show: !state.show };
    case actions.CLOSE_MENU:
      return { show: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, { show: false });
  return (
    <MenuStateContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>{children}</MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  );
};

const useMenuState = () => {
  const context = useContext(MenuStateContext);
  if (context === undefined) {
    throw new Error("useMenuState must be used within a MenuProvider");
  }
  return context;
};

const useMenuDispatch = () => {
  const context = useContext(MenuDispatchContext);
  if (context === undefined) {
    throw new Error("useMenuDispatch must be used within a MenuProvider");
  }
  return context;
};

export { MenuProvider, useMenuState, useMenuDispatch };