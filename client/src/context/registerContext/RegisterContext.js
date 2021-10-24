import { createContext, useReducer } from "react";
import { registerReducer } from "./RegisterReducer";

const INITIAL_STATE = {
  message: null,
  isFetching: false,
  error: false,
};

export const RegisterContext = createContext(INITIAL_STATE);

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registerReducer, INITIAL_STATE);
  return (
    <RegisterContext.Provider
      value={{
        message: state.message,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
