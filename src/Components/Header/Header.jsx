import React from "react";
import "../../Pages/Main.style.css";
import FontController from "./FontController";
import { Link } from "react-router-dom";
import Theme from "./../Theme/Theme";

const Header = () => {
  let Links = [
    { Path: "/", Text: "Home" },
    { Path: "/Developers", Text: "Developers" },
    { Path: "/Search", Text: "Search" },
  ];
  return (
    <header id="Header">
      <FontController></FontController>
      <ul className="links">
        {Links.map((link, i) => {
          return (
            <li key={i}>
              <Link to={link.Path}>{link.Text}</Link>
            </li>
          );
        })}
      </ul>
      <Theme></Theme>
    </header>
  );
};

export default Header;
