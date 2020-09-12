import { v4 as uuid } from "uuid";

export interface StressBox {
  checked: boolean;
  id: string;
  rating: number;
}

export interface StressTrack {
  boxes: StressBox[];
  id: string;
  name: string;
}

export function newStressBox(rating: number): StressBox {
  return {
    checked: false,
    id: uuid(),
    rating,
  };
}

export function newStressTrack(name: string, ratings: number[]): StressTrack {
  return {
    boxes: ratings.map(newStressBox),
    id: uuid(),
    name,
  };
}
