import React, { createContext, useState } from "react";
import BibleData from "../Asstes/Data.json";
let DataContext = createContext();
const BibleDataContext = ({ children }) => {
  let [mode, setMode] = useState("Light");
  let [Data, SetData] = useState({
    Bible: BibleData,
    FontSize: "30px",
    Mode: mode,
  });
  const SetMode = (Mode) => {
    Data.Mode = Mode;
    setMode(Mode);
    SetData(Data);
  };
  let Props = { Data, SetMode };
  return <DataContext.Provider value={Props}>{children}</DataContext.Provider>;
};

export { BibleDataContext, DataContext };
