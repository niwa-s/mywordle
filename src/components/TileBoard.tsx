import React from "react";
import { TileStateType } from "../types";
import Tile from "./Tile";

type TileBoardProps = {
  tileStates: TileStateType[];
};

const TileBoard: React.FC<TileBoardProps> = ({ tileStates }) => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-row">
          <Tile state={tileStates[0]} />
          <Tile state={tileStates[1]} />
          <Tile state={tileStates[2]} />
          <Tile state={tileStates[3]} />
          <Tile state={tileStates[4]} />
        </div>
        <div className="flex flex-row">
          <Tile state={tileStates[5]} />
          <Tile state={tileStates[6]} />
          <Tile state={tileStates[7]} />
          <Tile state={tileStates[8]} />
          <Tile state={tileStates[9]} />
        </div>
        <div className="flex flex-row">
          <Tile state={tileStates[10]} />
          <Tile state={tileStates[11]} />
          <Tile state={tileStates[12]} />
          <Tile state={tileStates[13]} />
          <Tile state={tileStates[14]} />
        </div>
        <div className="flex flex-row">
          <Tile state={tileStates[15]} />
          <Tile state={tileStates[16]} />
          <Tile state={tileStates[17]} />
          <Tile state={tileStates[18]} />
          <Tile state={tileStates[19]} />
        </div>
        <div className="flex flex-row">
          <Tile state={tileStates[20]} />
          <Tile state={tileStates[21]} />
          <Tile state={tileStates[22]} />
          <Tile state={tileStates[23]} />
          <Tile state={tileStates[24]} />
        </div>
        <div className="flex flex-row">
          <Tile state={tileStates[25]} />
          <Tile state={tileStates[26]} />
          <Tile state={tileStates[27]} />
          <Tile state={tileStates[28]} />
          <Tile state={tileStates[29]} />
        </div>
      </div>
    </>
  );
};

export default TileBoard;
