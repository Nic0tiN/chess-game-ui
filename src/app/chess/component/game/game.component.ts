import {Component, ViewChild} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {Move} from "../../domain/move";
import {ChessApiService} from "../../service/chessapi.service";
import {Board} from "../../domain/board";
import {ErrorComponent} from "../../../common/component/error/error.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    BoardComponent,
    FormsModule,
    JsonPipe,
    ErrorComponent
  ],
  providers: [ChessApiService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  constructor(private service: ChessApiService) {}

  board: Board = { cells: [] }
  errorMessage: String = ""

  @ViewChild('itemForm', { static: false }) form!: NgForm;

  onSubmit(itemForm: NgForm) {
    this.service.init(itemForm.value.player1, itemForm.value.player2).subscribe(board => this.board = board)
  }

  onMove(move: Move) {
    this.errorMessage = ""
    this.service.move(move).subscribe({
      next: board => this.board = board,
      error: err => this.errorMessage = err.message
    })
  }
}
