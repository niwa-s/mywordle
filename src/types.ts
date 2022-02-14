export type TileStateType =
  | {
      type: "empty";
    }
  | { type: "absent"; value: Chars }
  | { type: "present"; value: Chars }
  | { type: "correct"; value: Chars };
export type InputedTileStateType =
  | { type: "absent"; value: Chars }
  | { type: "present"; value: Chars }
  | { type: "correct"; value: Chars };
export type CharState =
  | {
      type: "empty";
    }
  | { type: "absent" }
  | { type: "present" }
  | { type: "correct" };
export type Chars =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
