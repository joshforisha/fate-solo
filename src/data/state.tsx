import * as React from "react";
import { Action, ActionType } from "~/data/action";
import { Entity, unnamedEntity } from "~/data/entity";

export interface State {
  entities: Entity[];
}

export const initialState: State = {
  entities: [],
};

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

export function update(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.CreateEntity:
      return {
        ...state,
        entities: [...state.entities, { ...unnamedEntity, name: action.name }],
      };

    default:
      console.warn(`No action for type "${action.type}"`);
      return state;
  }
}

export function useState(): [State, React.Dispatch<Action>] {
  console.log(StateContext);
  return React.useContext(StateContext);
}
