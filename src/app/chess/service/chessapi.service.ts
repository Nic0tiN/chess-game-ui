import { Injectable } from '@angular/core';
import {Move} from "../domain/move";
import {AbstractChessApi} from "../api/AbstractChessApi";
import {Observable} from "rxjs";
import {Board} from "../domain/board";

@Injectable()
export class ChessApiService {
  private board$: Observable<Board> = new Observable<Board>()

  constructor(
    private backend: AbstractChessApi
  ) { }

  load () {
    this.board$ = this.backend.init()

    return this.board$
  }

  init(player1: string, player2: string) {
    this.board$ = this.backend.start(player1, player2)

    return this.board$
  }

  move(move: Move) {
    this.board$ = this.backend.move(move)

    return this.board$
  }
}
