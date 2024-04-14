import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Figure, FigureColor, FigureType} from "../../domain/figure";
import {
  faChessPawn as farChessPawn,
  faChessRook as farChessRook,
  faChessQueen as farChessQueen,
  faChessBishop as farChessBishop,
  faChessKnight as farChessKnight,
  faChessKing as farChessKing
} from "@fortawesome/free-regular-svg-icons";
import {
  faChessPawn as fasChessPawn,
  faChessRook as fasChessRook,
  faChessQueen as fasChessQueen,
  faChessBishop as fasChessBishop,
  faChessKnight as fasChessKnight,
  faChessKing as fasChessKing
} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [
    NgForOf,
    FaIconComponent,
    NgIf
  ],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  protected readonly FigureColor = FigureColor;
  protected readonly FigureType = FigureType;

  @Input() position!: string
  @Input() figure!: Figure|undefined
  @Input() selected: boolean = false;
  @Input() reversed: boolean = false;

  @Output() click = new EventEmitter<string>();

  constructor(private library: FaIconLibrary) {
    library.addIcons(
      farChessKnight,
      farChessPawn,
      farChessQueen,
      farChessKing,
      farChessRook,
      farChessBishop,
      fasChessKnight,
      fasChessPawn,
      fasChessQueen,
      fasChessKing,
      fasChessRook,
      fasChessBishop
    )
  }

  onClick(event: MouseEvent) {
    this.click.emit(this.position)
    event.stopPropagation()
  }
}
