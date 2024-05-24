import React from "react";
import "../../Pages/Main.style.css";
import FontController from "./FontController";
import { Link } from "react-router-dom";
import Theme from "./../Theme/Theme";
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  let Links = [
    { Path: "/", Text: <HomeIcon /> },
    { Path: "/Developers", Text: <CodeIcon /> },
    { Path: "/Search", Text: <SearchIcon /> },
    { Path: "/Settings", Text: <SettingsIcon /> },
  ];
    // <FontController></FontController>
  return (
    <header id="Header">
      
      <div className="text-center d-flex align-items-center justify-content-center mt-2">
        <ul className="links">
          {Links.map((link, i) => {
            return (
              <li key={i}>
                    <Link to={link.Path}>
                        <Button variant="contained" className="p-2 fs-2" color="primary">
                            {link.Text}
                        </Button>  
                    </Link>
              </li>
            );
          })}
        </ul>
        <Theme />
      </div>
    </header>
  );
    //<Theme></Theme>
};

export default Header;
