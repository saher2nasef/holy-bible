/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DataContext } from "../../Bible_Data/Bible_Data_Context";

const Theme = () => {
  let {
    Data: { Mode },
    SetMode,
  } = useContext(DataContext);
  const ChangeMode = () => {
    if (Mode == "Light") {
      SetMode("Dark");
    } else {
      SetMode("Light");
    }
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={ChangeMode}>
        {Mode == "Light" ? (
          <DarkModeIcon></DarkModeIcon>
        ) : (
          <LightModeIcon></LightModeIcon>
        )}
      </button>
    </div>
  );
};

export default Theme;
