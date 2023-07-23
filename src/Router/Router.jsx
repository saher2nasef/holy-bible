/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react";

import { HashRouter, Route, Routes } from "react-router-dom";
import Bible from "../Pages/Bible";
import Book from "./../Pages/Book";
import Chapter from "../Pages/Chapter";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import Developers from "../Pages/Developers";
import PageNotFound from "../Pages/PageNotFound";
import Search from "./../Pages/Search";
const Router = () => {
  let {
    Data: { Mode },
  } = useContext(DataContext);
  return (
    <section id={Mode} className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Bible />}></Route>
          <Route path="/Book/:BookId" element={<Book />}></Route>
          <Route path="/Developers/" element={<Developers />}></Route>
          <Route path="/Search/" element={<Search />}></Route>
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
      </HashRouter>
    </section>
  );
};

export default Router;
