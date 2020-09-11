import * as React from "react";
import { Action } from "~/data/actions";
import { State, initialState, update } from "~/data/state";

const StateContext = React.createContext();

interface ProviderProps {
  children?: React.ReactNode;
}

export function StateProvider({ children }: ProviderProps): React.ReactElement {
  const value = React.useReducer(update, initialState);
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export function useState(): [State, React.Dispatch<Action>] {
  return React.useContext(StateContext);
}
