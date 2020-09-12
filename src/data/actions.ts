import { ViewAction } from "~/data/view-action";

export enum ActionType {
  CreateAspect = "CREATE_ASPECT",
  CreateBoost = "CREATE_BOOST",
  CreateEntity = "CREATE_ENTITY",
  DeleteAspect = "DELETE_ASPECT",
  DeleteEntity = "DELETE_ENTITY",
  StartEditing = "START_EDITING",
  StopEditing = "STOP_EDITING",
}

export interface Action {
  type: ActionType;
  [key: string]: any;
}

// Function helpers ----------------------------------------------------------

export function createAspect(entityId: string, name: string): Action {
  return { entityId, name, type: ActionType.CreateAspect };
}

export function createBoost(entityId: string, name: string): Action {
  return { entityId, name, type: ActionType.CreateBoost };
}

export function createEntity(name: string): Action {
  return { name, type: ActionType.CreateEntity };
}

export function deleteAspect(aspectId: string): Action {
  return { aspectId, type: ActionType.DeleteAspect };
}

export function deleteEntity(entityId: string): Action {
  return { entityId, type: ActionType.DeleteEntity };
}

export function startEditing(title: string, actions: ViewAction[]): Action {
  return { actions, title, type: ActionType.StartEditing };
}

export function stopEditing(): Action {
  return { type: ActionType.StopEditing };
}
