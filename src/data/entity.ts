import { Aspect } from "~/data/aspect";
import { StressTrack } from "~/data/stress";
import { v4 as uuid } from "uuid";

export interface Entity {
  aspects: Aspect[];
  fatePoints: number;
  id: string;
  name: string;
  tracks: StressTrack[];
}

export function newEntity(name: string): Entity {
  return {
    aspects: [],
    fatePoints: 0,
    id: uuid(),
    name,
    tracks: [],
  };
}
