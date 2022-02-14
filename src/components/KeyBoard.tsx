import React from "react";
import Key from "./Key";
import { Chars, CharState } from "../types";
import { BackspaceIcon } from "@heroicons/react/outline";

const topKeyboard: Chars[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleKeyboard: Chars[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomKeyboard: Chars[] = ["Z", "X", "C", "V", "B", "N", "M"];

type KeyBoardProps = {
  deleteEvent: () => void;
  inputEvent: (c: Chars) => void;
  enterEvent: () => void;
  charStates: { [key: string]: CharState };
};

const KeyBoard: React.FC<KeyBoardProps> = ({
  deleteEvent,
  inputEvent,
  enterEvent,
  charStates
}) => {
  return (
    <div className="flex flex-col  items-center">
      <div>
        {topKeyboard.map((c) => (
          <Key state={charStates[c]} key={c} onClick={() => inputEvent(c)}>
            {c}
          </Key>
        ))}
      </div>
      <div>
        {middleKeyboard.map((c) => (
          <Key state={charStates[c]} key={c} onClick={() => inputEvent(c)}>
            {c}
          </Key>
        ))}
      </div>
      <div className="flex">
        <Key key="enter" onClick={() => enterEvent()} w={20}>
          ENTER
        </Key>
        {bottomKeyboard.map((c) => (
          <Key state={charStates[c]} key={c} onClick={() => inputEvent(c)}>
            {c}
          </Key>
        ))}
        <Key key="delete" onClick={() => deleteEvent()} w={20}>
          <BackspaceIcon className="h-8 w-8 text-white" />
        </Key>
      </div>
    </div>
  );
};
export default KeyBoard;
