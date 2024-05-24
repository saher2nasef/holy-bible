/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
let DataContext = createContext();

const SaveData = ({ Key, Data }, position) => {
  position.setItem(Key, JSON.stringify(Data));
  return true;
};
const GetData = ({ Key }, position) => {
  if (position?.getItem(Key) == null) {
    return [];
  } else {
    return JSON.parse(position.getItem(Key));
  }
};

const BibleDataContext = ({ children }) => {
  let [mode, setMode] = useState("Light");
  let [Id, setId] = useState("12121");
  let [Data, SetData] = useState({
    Bible: [],
    FontSize: "30px",
    Mode: mode,
    Id: Id,
    BibleVerses: [],
  });
  useEffect(() => {
    if (localStorage.BibleData == undefined) {
      axios.get("/Data/Data.json").then((result) => {
        let result1 = [...result.data].filter((Book) => {
          delete Book.abbrev;
          delete Book.name;
          return Book.chapters.filter((Chapter) => {
            delete Chapter.name;
            delete Chapter.chapter;
            return Chapter.verses.filter((Verse) => {
              delete Verse.name;
              delete Verse.chapter;
              delete Verse.verse;
              return Verse;
            });
          });
        });
        localStorage.clear();
        localStorage.setItem("BibleData", JSON.stringify(result1));
        SetBible(MakeBible(localStorage.BibleData));
      });
    } else {
      SetBible(MakeBible(localStorage.BibleData));
    }
  }, []);
  const MakeBible = (Bible) => {
    let Data = JSON.parse(Bible);
    let result = Data.filter((Book) => {
      return Book.chapters.filter((Chapter, i) => {
        Chapter.chapter = i + 1;
        Chapter.name = `${Book.arabicName}: ${i + 1}`;
        return Chapter.verses.filter((Verse, x) => {
          Verse.name = `${Book.arabicName} ${i + 1}:${x + 1}`;
          Verse.chapter = i + 1;
          Verse.verse = x + 1;
          return Verse;
        });
      });
    });
    return result;
  };
  const SetMode = (Mode) => {
    Data.Mode = Mode;
    setMode(Mode);
    SetData(Data);
  };
  const SetBible = (Bible) => {
    Data.Bible = Bible;
    setMode(new Date().getMilliseconds() * Math.random());
    SetData(Data);
  };
  const SetBibleVerses = (BibleVerses) => {
    Data.BibleVerses = BibleVerses;
    setMode(new Date().getMilliseconds() * Math.random());
    SetData(Data);
  };
  let Props = { Data, SetMode, SetBible };
  return <DataContext.Provider value={Props}>{children}</DataContext.Provider>;
};

export { BibleDataContext, DataContext };
