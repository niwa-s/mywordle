import { useState } from "react";
import { CharState } from "../types";

const useCharStates = (): [
  {
    [key: string]: CharState;
  },
  React.Dispatch<
    React.SetStateAction<{
      [key: string]: CharState;
    }>
  >
] => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let dict: { [key: string]: CharState } = {};
  for (const alpha of alphabets) {
    dict[alpha] = {
      type: "empty",
    };
  }
  const [charStates, setCharStates] = useState(dict);
  return [charStates, setCharStates];
};
export default useCharStates;
