/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext ,useEffect} from "react";

import { HashRouter, Route, Routes } from "react-router-dom";
import Bible from "../Pages/Bible";
import Book from "./../Pages/Book";
import Chapter from "../Pages/Chapter";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import Developers from "../Pages/Developers";
import PageNotFound from "../Pages/PageNotFound";
import Search from "./../Pages/Search";
import Header from '../Components/Header/Header';
import Settings from "../Pages/Settings.jsx"
const Router = () => {
  let {
    Data: { Mode },
  } = useContext(DataContext);
    useEffect(()=>{    
        const FontSize = JSON.parse(localStorage.getItem("FontSize"));
        if(FontSize != undefined){
            
        
    document.documentElement.style.setProperty("--FontSize", FontSize + "px");
      }
    },[])
  return (
    <section id={Mode} className="App">
      <HashRouter>        
        <Routes>
          <Route path="/" element={<Bible />}></Route>
          <Route path="/Book/:BookId" element={<Book />}></Route>
          <Route path="/Developers/" element={<Developers />}></Route>
          <Route path="/Search/" element={<Search />}></Route>
          <Route path="/Settings/" element={<Settings />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route
            path="/Chapter/:BookId/:ChapterId"
            element={<Chapter />}
          ></Route>
          <Route
            path="/Chapter/:BookId/:ChapterId/:VerseId"
            element={<Chapter />}
          ></Route>
        </Routes>
        <Header />
      </HashRouter>
    </section>
  );
};

export default Router;
