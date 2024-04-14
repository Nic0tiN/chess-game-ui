import {Move} from "../domain/move";
import {Observable, throwError} from "rxjs";
import {Board} from "../domain/board";
import {HttpErrorResponse} from "@angular/common/http";

export abstract class AbstractChessApi {
  abstract start(player1: string, player2: string): Observable<Board>
  abstract move(move: Move): Observable<Board>

  protected handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message));
  }
}
