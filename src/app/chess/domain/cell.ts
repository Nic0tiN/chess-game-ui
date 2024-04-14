import {Figure} from "./figure";

export interface Cell {
  position: string,
  figure: Figure | undefined
}
