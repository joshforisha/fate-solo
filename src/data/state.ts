import { Action, ActionType } from "~/data/actions";
import { Entity, newEntity } from "~/data/entity";
import { newAspect, newBoost } from "~/data/aspect";
import { newStressTrack } from "~/data/stress";
import { ViewAction } from "~/data/view-action";

export interface State {
  editing: boolean;
  editingActions: ViewAction[];
  editingTitle: string;
  entities: Entity[];
}

export const initialState: State = {
  editing: false,
  editingActions: [],
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
    case ActionType.AddFatePoint:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          fatePoints: entity.fatePoints + 1,
        })),
      };

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

    case ActionType.CreateStressTrack:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          tracks: [
            ...entity.tracks,
            newStressTrack(action.name, action.ratings),
          ],
        })),
      };

    case ActionType.DeleteAspect:
      return {
        ...state,
        entities: state.entities.map((entity) => ({
          ...entity,
          aspects: entity.aspects.filter(({ id }) => id !== action.aspectId),
        })),
      };

    case ActionType.DeleteEntity:
      return {
        ...state,
        entities: state.entities.filter(({ id }) => id !== action.entityId),
      };

    case ActionType.DeleteStressTrack:
      return {
        ...state,
        entities: state.entities.map((entity) => ({
          ...entity,
          tracks: entity.tracks.filter(({ id }) => id !== action.stressTrackId),
        })),
      };

    case ActionType.RenameAspect:
      return {
        ...state,
        entities: state.entities.map((entity) => ({
          ...entity,
          aspects: entity.aspects.map((aspect) =>
            aspect.id === action.aspectId
              ? { ...aspect, name: action.name }
              : aspect
          ),
        })),
      };

    case ActionType.RenameEntity:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          name: action.name,
        })),
      };

    case ActionType.StartEditing:
      return {
        ...state,
        editing: true,
        editingActions: action.actions,
        editingTitle: action.title,
      };

    case ActionType.SubtractFatePoint:
      return {
        ...state,
        entities: updateEntity(state.entities, action.entityId, (entity) => ({
          ...entity,
          fatePoints: Math.max(0, entity.fatePoints - 1),
        })),
      };

    case ActionType.StopEditing:
      return {
        ...state,
        editing: false,
      };

    case ActionType.ToggleStressBox:
      return {
        ...state,
        entities: state.entities.map((entity) => ({
          ...entity,
          tracks: entity.tracks.map((track) => ({
            ...track,
            boxes: track.boxes.map((box) =>
              box.id === action.stressBoxId
                ? { ...box, checked: !box.checked }
                : box
            ),
          })),
        })),
      };

    default:
      console.warn(`No action for type "${action.type}"`);
      return state;
  }
}
