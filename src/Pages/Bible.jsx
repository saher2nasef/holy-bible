/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import "./Main.style.css";
import { useNavigate } from "react-router-dom";
const Bible = () => {
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let [Books, SetBooks] = useState([]);
  let [SearchText, SetSearchText] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    SetBooks(Bible);
  }, [Bible]);
  const WatchSearchText = (e) => {
    SetSearchText(e.target.value);
    let Search = [...Bible].filter((Book) => {
      if (Book.arabicName.includes(SearchText)) {
        return Book;
      }
    });
    if (SearchText.length > 0) {
      SetBooks(Search);
    } else {
      SetBooks(Bible);
    }
  };
  const GoToReadBookById = (BookId) => {
    navigate(`/Book/${BookId}`);
  };
  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="SearchBar">
              <input
                type="text"
                className="Search form-control"
                placeholder="اسم السفر"
                value={SearchText}
                onKeyDown={(e) => {
                  WatchSearchText(e);
                }}
                onKeyUp={(e) => {
                  WatchSearchText(e);
                }}
                onChange={(e) => {
                  WatchSearchText(e);
                }}
              />
            </div>
            <section id="ShowArea">
              <div className="Books">
                {Books.length > 0
                  ? Books.map((Book, i) => {
                      return (
                        <div
                          className="Book"
                          key={i}
                          onClick={() => {
                            GoToReadBookById(Book.id);
                          }}
                        >
                          <h4>{Book.arabicName}</h4>
                          <span>{i + 1}</span>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bible;
