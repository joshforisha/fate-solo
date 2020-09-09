import { Aspect } from "~/data/aspect";
import { Track } from "~/data/track";

export interface Entity {
  aspects: Aspect[];
  name: string;
  tracks: Track[];
}

export const unnamedEntity: Omit<Entity, "name"> = {
  aspects: [],
  tracks: [],
};
