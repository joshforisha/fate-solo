import { ViewAction } from "~/data/view-action";

export enum ActionType {
  AddFatePoint = "ADD_FATE_POINT",
  CreateAspect = "CREATE_ASPECT",
  CreateBoost = "CREATE_BOOST",
  CreateEntity = "CREATE_ENTITY",
  CreateStressTrack = "CREATE_STRESS_TRACK",
  DeleteAspect = "DELETE_ASPECT",
  DeleteEntity = "DELETE_ENTITY",
  DeleteStressTrack = "DELETE_STRESS_TRACK",
  RenameAspect = "RENAME_ASPECT",
  RenameEntity = "RENAME_ENTITY",
  RenameStressTrack = "RENAME_STRESS_TRACK",
  SubtractFatePoint = "SUBTRACT_FATE_POINT",
  StartEditing = "START_EDITING",
  StopEditing = "STOP_EDITING",
  ToggleStressBox = "TOGGLE_STRESS_BOX",
}

export interface Action {
  type: ActionType;
  [key: string]: any;
}

// Function helpers ----------------------------------------------------------

export function addFatePoint(entityId: string): Action {
  return { entityId, type: ActionType.AddFatePoint };
}

export function createAspect(entityId: string, name: string): Action {
  return { entityId, name, type: ActionType.CreateAspect };
}

export function createBoost(entityId: string, name: string): Action {
  return { entityId, name, type: ActionType.CreateBoost };
}

export function createEntity(name: string): Action {
  return { name, type: ActionType.CreateEntity };
}

export function createStressTrack(
  entityId: string,
  name: string,
  ratings: number[]
): Action {
  return { entityId, name, ratings, type: ActionType.CreateStressTrack };
}

export function deleteAspect(aspectId: string): Action {
  return { aspectId, type: ActionType.DeleteAspect };
}

export function deleteEntity(entityId: string): Action {
  return { entityId, type: ActionType.DeleteEntity };
}

export function deleteStressTrack(stressTrackId: string): Action {
  return { stressTrackId, type: ActionType.DeleteStressTrack };
}

export function renameAspect(aspectId: string, name: string): Action {
  return { aspectId, name, type: ActionType.RenameAspect };
}

export function renameEntity(entityId: string, name: string): Action {
  return { entityId, name, type: ActionType.RenameEntity };
}

export function subtractFatePoint(entityId: string): Action {
  return { entityId, type: ActionType.SubtractFatePoint };
}

export function startEditing(title: string, actions: ViewAction[]): Action {
  return { actions, title, type: ActionType.StartEditing };
}

export function stopEditing(): Action {
  return { type: ActionType.StopEditing };
}

export function toggleStressBox(stressBoxId: string): Action {
  return { stressBoxId, type: ActionType.ToggleStressBox };
}
