/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../Components/Header/Header";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import DataVerses from "../Asstes/DataVerses.json";
import { useNavigate } from "react-router-dom";
const Search = () => {
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let [Books, SetBooks] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    SetBooks(Bible);
    // let Verses = [];
    // Bible.filter((Book) => {
    //   Book.chapters.filter((chapter) => {
    //     Verses.push(
    //       chapter.verses.filter((verse) => {
    //         verse.text = normalize_text(verse.text);
    //         verse.ChapterId = chapter.chapter;
    //         verse.BookId = Book.id;
    //         verse.BookId = Book.id;
    //         verse.BookName = Book.arabicName;
    //         return verse;
    //       })
    //     );
    //   });
    // });
    // let NewVerses = [];
    // for (let i = 0; i < Verses.length; i++) {
    //   const element = Verses[i];
    //   for (let x = 0; x < element.length; x++) {
    //     const element2 = element[x];
    //     NewVerses.push(element2);
    //   }
    // }
    // console.log(NewVerses);
  }, [Bible, Books]);

  let SearchValue = useRef();
  let [Verses, SetVerses] = useState([]);
  const Search = () => {
    console.log(DataVerses.length);
    if (SearchValue.current.value.replace(/ /g, "").length > 0) {
      SetVerses(
        DataVerses.filter((Verse) =>
          Verse.text
            .replace(/ /g, "")
            .includes(
              normalize_text(SearchValue.current.value.replace(/ /g, ""))
            )
        )
      );
    }
  };
  const normalize_text = (text) => {
    text = text.replace(/(آ|إ|أ|ٱ)/g, "ا");
    text = text.replace(/(ة)/g, "ه");
    // text = text.replace(/(ئ|ؤ)/g, "ء");
    text = text.replace(/(ى)/g, "ي");

    //remove special characters
    text = text.replace(
      /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
      ""
    );

    //normalize Arabic

    //convert arabic numerals to english counterparts.
    var starter = 0x660;
    for (var i = 0; i < 10; i++) {
      text.replace(
        String.fromCharCode(starter + i),
        String.fromCharCode(48 + i)
      );
    }

    return text;
  };
  const GoToChapter = (BookId, ChapterId, VerseId) => {
    navigate(`/Chapter/${BookId}/${ChapterId}/${VerseId}`);
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section id="Search" className="text-center p-5">
              <div className="Input-Box">
                <input
                  type="text"
                  name="Search"
                  id="Search"
                  placeholder="ادخل جز من الايه"
                  ref={SearchValue}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={Search}>
                Search
              </button>
              <hr />

              {Verses.length > 0 ? <h2>نتائج البحث {Verses.length}</h2> : ""}

              {Verses.map((Verse, i) => {
                return (
                  <div
                    key={i}
                    className="p-2 bg-dark text-white mb-1 rounded-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      GoToChapter(Verse.BookId, Verse.ChapterId, Verse.verse);
                    }}
                  >
                    <h3>{Verse.text}</h3>
                    <h4>
                      {Verse.BookName +
                        " " +
                        Verse.verse +
                        ":" +
                        Verse.ChapterId}
                    </h4>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
