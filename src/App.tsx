import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { EmptyTile, InputedTile } from "./components/Tile";
import useGameState from "./hooks/useGameState";
import TileBoard from "./components/TileBoard";
import Key from "./components/Key";
import KeyBoard from "./components/KeyBoard";
import { CharState } from "./types";
import useWords from "./hooks/useWords";
import useCharStates from "./hooks/useCharStates";
import ResultBoard from "./components/ResultBoard";

function App() {
  const [word, containedWordlist] = useWords();
  const [charStates, setCharStates] = useCharStates();
  const [tileStates, isGameEnd, deleteEvent, inputEvent, enterEvent] =
    useGameState(word, charStates, setCharStates, containedWordlist);
  console.log(word);
  return (
    <div className="flex flex-col min-h-screen justify-between bg-black">
      <Header />
      {isGameEnd ? <ResultBoard>{word}</ResultBoard> : null}
      <TileBoard tileStates={tileStates} />
      <KeyBoard
        deleteEvent={deleteEvent}
        inputEvent={inputEvent}
        enterEvent={enterEvent}
        charStates={charStates}
      />
    </div>
  );
}

export default App;
