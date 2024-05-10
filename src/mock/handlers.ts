import {http, HttpResponse} from "msw";
import {HTTPCommandMove} from "../app/chess/api/api.commands";

export const handlers = [
  http.post('http://localhost:8080/play', async ({ request }) => {
    const movementCommand = await request.json() as HTTPCommandMove
    const from = movementCommand.from
    const to = movementCommand.to

    if (from === "A2" && to == "A5") {
      throw new Error("This move is forbidden.")
    }

    return HttpResponse.json({
      board: [
        { position: "A1", figure: { type: "ROOK", color: "WHITE" } },
        { position: "B1", figure: { type: "KNIGHT", color: "WHITE" } },
        { position: "C1", figure: { type: "BISHOP", color: "WHITE" } },
        { position: "D1", figure: { type: "QUEEN", color: "WHITE" } },
        { position: "E1", figure: { type: "KING", color: "WHITE" } },
        { position: "F1", figure: { type: "BISHOP", color: "WHITE" } },
        { position: "G1", figure: { type: "KNIGHT", color: "WHITE" } },
        { position: "H1", figure: { type: "ROOK", color: "WHITE" } },

        { position: "A2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "B2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "C4", figure: { type: "PAWN", color: "WHITE" } },
        { position: "D2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "E2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "F2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "G2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "H2", figure: { type: "PAWN", color: "WHITE" } },

        { position: "A7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "B7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "C7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "D7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "E7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "F7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "G7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "H7", figure: { type: "PAWN", color: "BLACK" } },

        { position: "A8", figure: { type: "ROOK", color: "BLACK" } },
        { position: "B8", figure: { type: "KNIGHT", color: "BLACK" } },
        { position: "C8", figure: { type: "BISHOP", color: "BLACK" } },
        { position: "D8", figure: { type: "QUEEN", color: "BLACK" } },
        { position: "E8", figure: { type: "KING", color: "BLACK" } },
        { position: "F8", figure: { type: "BISHOP", color: "BLACK" } },
        { position: "G8", figure: { type: "KNIGHT", color: "BLACK" } },
        { position: "H8", figure: { type: "ROOK", color: "BLACK" } },
      ]
    })
  }),
  http.get('http://localhost:8080/start', () => {
    return HttpResponse.json({
      board: [
        { position: "A1", figure: { type: "ROOK", color: "WHITE" } },
        { position: "B1", figure: { type: "KNIGHT", color: "WHITE" } },
        { position: "C1", figure: { type: "BISHOP", color: "WHITE" } },
        { position: "D1", figure: { type: "QUEEN", color: "WHITE" } },
        { position: "E1", figure: { type: "KING", color: "WHITE" } },
        { position: "F1", figure: { type: "BISHOP", color: "WHITE" } },
        { position: "G1", figure: { type: "KNIGHT", color: "WHITE" } },
        { position: "H1", figure: { type: "ROOK", color: "WHITE" } },

        { position: "A2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "B2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "C2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "D2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "E2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "F2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "G2", figure: { type: "PAWN", color: "WHITE" } },
        { position: "H2", figure: { type: "PAWN", color: "WHITE" } },

        { position: "A7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "B7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "C7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "D7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "E7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "F7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "G7", figure: { type: "PAWN", color: "BLACK" } },
        { position: "H7", figure: { type: "PAWN", color: "BLACK" } },

        { position: "A8", figure: { type: "ROOK", color: "BLACK" } },
        { position: "B8", figure: { type: "KNIGHT", color: "BLACK" } },
        { position: "C8", figure: { type: "BISHOP", color: "BLACK" } },
        { position: "D8", figure: { type: "QUEEN", color: "BLACK" } },
        { position: "E8", figure: { type: "KING", color: "BLACK" } },
        { position: "F8", figure: { type: "BISHOP", color: "BLACK" } },
        { position: "G8", figure: { type: "KNIGHT", color: "BLACK" } },
        { position: "H8", figure: { type: "ROOK", color: "BLACK" } },
      ]
    })
  })
]
