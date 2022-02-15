import { useCallback, useEffect } from "react";
import { useKeyPress } from "react-use";
import { topKeyboard, middleKeyboard, bottomKeyboard } from "../constants/keys";
import { Chars } from "../types";

const useKeyDownEvent = (
  deleteEvent: () => void,
  inputEvent: (c: Chars) => void,
  enterEvent: () => void
) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key;
    console.log(key)
    if (key === "Enter") {
      enterEvent()
    } else if (key === "Backspace") {
      deleteEvent()
    } else if ('a' <= key && key <= 'z') {
      inputEvent(key.toUpperCase() as Chars)
    }
  }, [deleteEvent, enterEvent, inputEvent]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};
export default useKeyDownEvent;
