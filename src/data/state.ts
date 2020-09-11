import { Action, ActionType } from "~/data/actions";
import { Entity, newEntity } from "~/data/entity";
import { newAspect, newBoost } from "~/data/aspect";

export interface State {
  editing: boolean;
  editingActions: Record<string, () => void>;
  editingTitle: string;
  entities: Entity[];
}

export const initialState: State = {
  editing: false,
  editingActions: {},
  editingTitle: "",
  entities: [],
};

function updateEntity(
  entities: Entity[],
  entityId: string,
  updateFn: (entity: Entity) => Entity
): Entity[] {
  return entities.map((entity) =>
    entity.id === entityId ? updateFn(entity) : entity
  );
}

export function update(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.CreateAspect:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          aspects: [...entity.aspects, newAspect(action.name)],
        })),
      };

    case ActionType.CreateBoost:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          aspects: [...entity.aspects, newBoost(action.name)],
        })),
      };

    case ActionType.CreateEntity:
      return {
        ...state,
        entities: [...state.entities, newEntity(action.name)],
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
