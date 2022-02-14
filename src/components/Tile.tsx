import React from "react";
import { TileStateType, InputedTileStateType } from "../types";

type TileProps = {
  state: TileStateType;
};

const Tile: React.FC<TileProps> = ({ state }) => {
  return state.type === "empty" ? <EmptyTile /> : <InputedTile state={state} />;
};

export const EmptyTile = () => {
  return <div className="h-16 w-16 m-1 bg-black border border-gray-500"></div>;
};

type InputedTileProps = {
  state: InputedTileStateType;
};

export const InputedTile: React.FC<InputedTileProps> = ({ state }) => {
  let color;
  switch (state.type) {
    case "absent": {
      color = "bg-absent";
      break;
    }
    case "correct": {
      color = "bg-correct";
      break;
    }
    case "present": {
      color = "bg-present";
      break;
    }
  }
  return (
    <div className={`h-16 w-16 m-1 ${color} border border-gray-500`}>
      <div className=" text-white text-6xl text-center">{state.value}</div>
    </div>
  );
};

export default Tile;
