export interface Box {
  checked: boolean;
  rating: number;
}

export interface Track {
  boxes: Box[];
  name: string;
}
