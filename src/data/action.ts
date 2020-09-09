export enum ActionType {
  CreateEntity = "CREATE_ENTITY",
}

export interface Action {
  type: ActionType;
  [key: string]: any;
}

// Function helpers ----------------------------------------------------------

export function createEntity(name: string): Action {
  return { name, type: ActionType.CreateEntity };
}
