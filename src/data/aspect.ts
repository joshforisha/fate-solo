import { v4 as uuid } from "uuid";

export enum AspectType {
  Aspect = "Aspect",
  Boost = "Boost",
}

export interface Aspect {
  freeInvokes: number;
  id: string;
  name: string;
  type: AspectType;
}

export function newAspect(name: string): Aspect {
  return {
    freeInvokes: 0,
    id: uuid(),
    name,
    type: AspectType.Aspect,
  };
}

export function newBoost(name: string): Aspect {
  return {
    freeInvokes: 1,
    id: uuid(),
    name,
    type: AspectType.Boost,
  };
}
