import {HTTPBoard, HTTPCell} from "./api.responses";
import {Board} from "../domain/board";
import {Figure, FigureColor, FigureType} from "../domain/figure";

export default class ChessApiParser {
  toDomain(data: HTTPBoard): Board {
    return {
      cells: data.board.map((cell: HTTPCell) => {
        let figure: Figure | undefined = undefined
        if (cell.figure) {
          figure = {
            color: FigureColor.WHITE,
            type: FigureType.PAWN
          }
          switch (cell.figure.color) {
            case FigureColor.BLACK:
              figure.color = FigureColor.BLACK
              break;
            case FigureColor.WHITE:
              figure.color = FigureColor.WHITE
              break;
            default:
              figure.color = null
          }
          switch (cell.figure.type) {
            case FigureType.BISHOP:
              figure.type = FigureType.BISHOP
              break;
            case FigureType.KING:
              figure.type = FigureType.KING
              break;
            case FigureType.KNIGHT:
              figure.type = FigureType.KNIGHT
              break;
            case FigureType.ROOK:
              figure.type = FigureType.ROOK
              break;
            case FigureType.QUEEN:
              figure.type = FigureType.QUEEN
              break;
            case FigureType.PAWN:
              figure.type = FigureType.PAWN
              break;
            default:
              figure.type = null
          }
        }

        return {
          position: cell.position,
          figure: figure
        }
      })
    }
  }
}
