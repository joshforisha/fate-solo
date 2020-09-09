export enum AspectType {
  Aspect = "Aspect",
  Boost = "Boost",
}

export interface Aspect {
  freeInvokes: number;
  name: string;
  type: AspectType;
}
