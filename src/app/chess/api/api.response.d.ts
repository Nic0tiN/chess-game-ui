export type HTTPFigure = {
  type: string
  color: string
}

export type HTTPCell = {
  position: string
  figure?: HTTPFigure
}

export type HTTPBoard = {
  board: HTTPCell[]
}
