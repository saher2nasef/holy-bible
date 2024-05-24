import React from "react";
import Button from '@mui/material/Button';
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
      localStorage.setItem("FontSize",Size);
  };
  return (
    <div className="FontController">
            <Button variant="contained" className="py-3" color="primary" onClick={IncreaseFont}>
                <AddIcon></AddIcon>
            </Button>
            <Button variant="contained" className="py-3" color="primary"  onClick={Rest}>
                Rest
            </Button>
            <Button variant="contained" className="py-3" color="primary"  onClick={DecreaseFont}>
                 <RemoveIcon></RemoveIcon>
            </Button>
    </div>
  );
};

export default FontController;
