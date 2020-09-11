import { Action, ActionType } from "~/data/actions";
import { Entity, unnamedEntity } from "~/data/entity";

export interface State {
  editing: boolean;
  editingTitle: string;
  editingActions: Record<string, () => void>;
  entities: Entity[];
}

export const initialState: State = {
  editing: false,
  editingTitle: "",
  editingActions: {},
  entities: [],
};

export function update(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.CreateEntity:
      return {
        ...state,
        entities: [...state.entities, { ...unnamedEntity, name: action.name }],
      };

    case ActionType.StartEditing:
      return {
        ...state,
        editing: true,
        editingActions: action.actions,
        editingTitle: action.title,
      };

    case ActionType.StopEditing:
      return {
        ...state,
        editing: false,
      };

    default:
      console.warn(`No action for type "${action.type}"`);
      return state;
  }
}
