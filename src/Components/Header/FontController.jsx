import React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FontController = () => {
  const IncreaseFont = () => {
    const FontSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--FontSize");
    let FontSizeValue = Number(FontSize.slice(0, FontSize.length - 2));
    if (FontSizeValue < 60) {
      FontSizeValue++;
      SetFontSize(FontSizeValue);
    }
  };
  const Rest = () => {
    SetFontSize(18);
  };
  const DecreaseFont = () => {
    const FontSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--FontSize");
    let FontSizeValue = Number(FontSize.slice(0, FontSize.length - 2));
    if (FontSizeValue > 10) {
      FontSizeValue--;
      SetFontSize(FontSizeValue);
    }
  };
  const SetFontSize = (Size) => {
    document.documentElement.style.setProperty("--FontSize", Size + "px");
  };
  return (
    <div className="FontController">
      <button className="btn btn-primary mx-1 p-1" onClick={IncreaseFont}>
        <AddIcon></AddIcon>
      </button>

      <button className="btn btn-primary mx-1 p-1" onClick={Rest}>
        Rest
      </button>

      <button className="btn btn-primary mx-1 p-1" onClick={DecreaseFont}>
        <RemoveIcon></RemoveIcon>
      </button>
    </div>
  );
};

export default FontController;
