export interface Figure {
  color: FigureColor|null
  type: FigureType|null
}

export enum FigureType {
  ROOK = 'ROOK',
  PAWN = 'PAWN',
  QUEEN = 'QUEEN',
  KING = 'KING',
  BISHOP = 'BISHOP',
  KNIGHT = 'KNIGHT'
}

export enum FigureColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}
