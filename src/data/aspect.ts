import { v4 as uuid } from "uuid";

export interface Aspect {
  boost: boolean;
  freeInvokes: number;
  id: string;
  name: string;
}

export function newAspect(name: string): Aspect {
  return {
    boost: false,
    freeInvokes: 0,
    id: uuid(),
    name,
  };
}

export function newBoost(name: string): Aspect {
  return {
    boost: true,
    freeInvokes: 1,
    id: uuid(),
    name,
  };
}
