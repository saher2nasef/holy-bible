/* eslint-disable eqeqeq */
import React, { useContext, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DataContext } from "../../Bible_Data/Bible_Data_Context";
import Button from '@mui/material/Button';
const Theme = () => {
  let {
    Data: { Mode },
    SetMode,
  } = useContext(DataContext);
  useEffect(() => {
    if (localStorage.getItem("Mode") != null) {
      if (JSON.parse(localStorage.getItem("Mode")) == "Light") {
        SetMode("Light");
      } else {
        SetMode("Dark");
      }
    } else {
      localStorage.setItem("Mode", JSON.stringify("Light"));
    }
  });
  const ChangeMode = () => {
    if (Mode == "Light") {
      SetMode("Dark");
      localStorage.setItem("Mode", JSON.stringify("Dark"));
    } else {
      SetMode("Light");
      localStorage.setItem("Mode", JSON.stringify("Light"));
    }
  };
  return (
    <div>
      <Button variant="contained" className="py-2" color="primary" onClick={ChangeMode}>
        {Mode == "Light" ? (
          <DarkModeIcon></DarkModeIcon>
        ) : (
          <LightModeIcon></LightModeIcon>
        )}
      </Button>
    </div>
  );
};

export default Theme;
