import React from "react";
import { CharState } from "../types";

type KeyProps = {
  onClick: () => void;
  state?: CharState;
  w?: number;
};

const Key: React.FC<KeyProps> = ({ children, onClick, w, state }) => {
  const wProps = `w-${w ?? 11}`;
  let color = "bg-default-key";
  if (state !== undefined) {
    switch (state.type) {
      case "correct": {
        color = "bg-correct";
        break;
      }
      case "present": {
        color = "bg-present";
        break;
      }
      case "absent": {
        color = "bg-absent";
        break;
      }
    }
  }
  console.log(wProps);
  return (
    <button
      className={`${color} ${wProps} h-14 py-auto px-4 min-h-max m-1 text-white rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Key;
