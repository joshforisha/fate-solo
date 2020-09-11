export enum ActionType {
  CreateEntity = "CREATE_ENTITY",
  StartEditing = "START_EDITING",
  StopEditing = "STOP_EDITING",
}

export interface Action {
  type: ActionType;
  [key: string]: any;
}

// Function helpers ----------------------------------------------------------

export function createEntity(name: string): Action {
  return { name, type: ActionType.CreateEntity };
}

export function startEditing(
  title: string,
  actions: Record<string, () => void>
): Action {
  return { actions, title, type: ActionType.StartEditing };
}

export function stopEditing(): Action {
  return { type: ActionType.StopEditing };
}
