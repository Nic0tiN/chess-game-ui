import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CellComponent} from "../cell/cell.component";
import {Figure} from "../../domain/figure";
import Position from "../../domain/position";
import {Move} from "../../domain/move";
import {Cell} from "../../domain/cell";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgForOf,
    CellComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  protected readonly Position = Position;

  @Input() player1!: string;
  @Input() player2!: string;
  @Input() cells: Cell[] = []
  @Output() move = new EventEmitter<Move>()

  size: Number = 8
  activeCells: Array<string> = []

  getFigure(position: string): Figure|undefined {
    return this.cells.find(c => c.position === position)?.figure
  }

  positionSelected(position: string) {
    return this.activeCells.findIndex(c => c === position) > -1
  }

  onCellClicked(position: string) {
    const index = this.activeCells.findIndex(p => p === position)
    if (index === -1) {
      if (this.activeCells.length === 2) {
        return
      }

      this.activeCells.push(position)
    } else {
      this.activeCells.splice(index, 1)
    }
  }

  moveFigures(fromPosition: string, toPosition: string) {
    this.move.emit({
      from: fromPosition,
      to: toPosition
    })
    this.activeCells = []
  }

  protected readonly Object = Object;
  protected readonly parseInt = parseInt;
}
