import {AbstractChessApi} from "./AbstractChessApi";
import {Move} from "../domain/move";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Board} from "../domain/board";
import {HTTPBoard} from "./api.response";
import ChessApiParser from "./ChessApiParser";

export default class ChessApiBackend extends AbstractChessApi {
  private parser: ChessApiParser
  constructor(private http: HttpClient) {
    super();
    this.parser = new ChessApiParser()
  }

  move(move: Move): Observable<Board> {
    return this.http.post<HTTPBoard>(`http://localhost:8080/play`, {...move}, {responseType: 'json'})
      .pipe(catchError(this.handleError))
      .pipe(
        map(response => this.parser.toDomain(response))
      )
  }

  start(player1: string, player2: string): Observable<Board> {
    return this.http.get<HTTPBoard>(`http://localhost:8080/start?p1=${player1}&p2=${player2}`, {responseType: 'json'})
      .pipe(
        map(response => this.parser.toDomain(response))
      )
  }
}
