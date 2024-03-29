import React from "react";
import "./App.css";
import Header from "./components/Header";
import useGameState from "./hooks/useGameState";
import TileBoard from "./components/TileBoard";
import KeyBoard from "./components/KeyBoard";
import useWords from "./hooks/useWords";
import useCharStates from "./hooks/useCharStates";
import ResultBoard from "./components/ResultBoard";
import useKeyDownEvent from "./hooks/useKeyDownEvent";

function App() {
  const [word, containedWordlist] = useWords();
  const [charStates, setCharStates] = useCharStates();
  const [tileStates, isGameEnd, deleteEvent, inputEvent, enterEvent] =
    useGameState(word, charStates, setCharStates, containedWordlist);
  useKeyDownEvent(deleteEvent, inputEvent, enterEvent);
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
