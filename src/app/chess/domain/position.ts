export default class Position {
  static HORIZONTAL: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  static VERTICAL: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  static toString(col: number, row: number): string {
    return Position.HORIZONTAL[col].concat(Position.VERTICAL[row])
  }
}
