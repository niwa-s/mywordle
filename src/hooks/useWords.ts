import { useState } from "react";
import { WORDS } from "../constants/wordlist";

const useWords = (): [string, (input: string) => boolean] => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const wordsLength = WORDS.length;
  const [wordIdx] = useState(getRandomInt(wordsLength));
  const [word] = useState(WORDS[wordIdx].toUpperCase());

  const containedWordlist = (input: string): boolean => {
    return WORDS.includes(input);
  };
  return [word, containedWordlist];
};

export default useWords;
