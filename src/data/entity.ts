import { Aspect } from "~/data/aspect";
import { Track } from "~/data/track";
import { v4 as uuid } from "uuid";

export interface Entity {
  aspects: Aspect[];
  fatePoints: number;
  id: string;
  name: string;
  tracks: Track[];
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
