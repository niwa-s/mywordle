import { useState } from "react";
import { Chars, CharState, TileStateType } from "../types";

const useGameState = (
  answer: string,
  charStates: {
    [key: string]: CharState;
  },
  setCharStates: React.Dispatch<
    React.SetStateAction<{
      [key: string]: CharState;
    }>
  >,
  containedWordlist: (input: string) => boolean
): [TileStateType[], boolean, () => void, (c: Chars) => void, () => void] => {
  if (answer.length !== 5) {
    console.log(`Answer length must be 5 but ${answer.length}`);
  }
  let states: TileStateType[] = [];
  for (let i = 0; i < 30; i++) {
    states.push({ type: "empty" });
  }
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  console.log("rerendering!", x, y);
  const [tileStates, setTileStates] = useState<TileStateType[]>(states);

  const deleteEvent = () => {
    if (x === 0) {
      return;
    }
    const target = y * 5 + (x - 1);
    setTileStates(
      tileStates.map((tileState, idx) =>
        idx === target ? { type: "empty" } : tileState
      )
    );
    setX((x) => x - 1);
  };
  const inputEvent = (c: Chars) => {
    console.log("start inputEvent", x, y);
    if (x === 5) {
      return;
    }
    const target = y * 5 + x;
    setTileStates(
      tileStates.map((tileStates, idx) =>
        idx === target ? { type: "absent", value: c } : tileStates
      )
    );
    setX((x) => x + 1);
    console.log("finish inputEvent", x, y);
  };

  const includedInAnswer = (value: Chars) => {
    for (let c of answer) {
      if (c === value) return true;
    }
    return false;
  };

  const rowJudge = (
    tileState: TileStateType,
    idx: number,
    diff: { [key: string]: CharState }
  ): TileStateType => {
    console.log(tileState, idx, answer[idx]);
    if (tileState.type === "empty") {
      // TODO: ここには絶対到達しないけど、いい書き方がわからない
      console.log("unreach empty state!!", tileState);
      return { type: "empty" };
    } else {
      if (tileState.value === answer[idx]) {
        diff[tileState.value] = { type: "correct" };
        return {
          type: "correct",
          value: tileState.value,
        };
      } else if (includedInAnswer(tileState.value)) {
        const nowState = charStates[tileState.value];
        if (nowState.type !== "correct") {
          diff[tileState.value] = { type: "present" };
        }
        return {
          type: "present",
          value: tileState.value,
        };
      } else {
        const nowState = charStates[tileState.value];
        if (nowState.type === "empty") {
          diff[tileState.value] = { type: "absent" };
        }
        return {
          type: "absent",
          value: tileState.value,
        };
      }
    }
  };

  const enterEvent = () => {
    if (x !== 5) {
      return;
    }
    let inputWord = "";
    for (const tileState of tileStates.slice(y * 5, y * 5 + 5)) {
      if (tileState.type !== "empty") {
        inputWord += tileState.value;
      }
    }
    console.log(inputWord);
    if (!containedWordlist(inputWord.toLowerCase())) {
      return;
    }
    let diff: { [key: string]: CharState } = {};
    setTileStates(
      tileStates.map((tileStates, idx) =>
        y * 5 <= idx && idx < (y + 1) * 5
          ? rowJudge(tileStates, idx % 5, diff)
          : tileStates
      )
    );
    if (answer === inputWord || y + 1 === 6) {
      setIsGameEnd((_isGameEnd) => true);
    }
    setY((y) => y + 1);
    setX((_x) => 0);
    setCharStates({
      ...charStates,
      ...diff,
    });
  };

  return [tileStates, isGameEnd, deleteEvent, inputEvent, enterEvent];
};

export default useGameState;
