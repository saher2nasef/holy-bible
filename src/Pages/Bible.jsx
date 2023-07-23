/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import "./Main.style.css";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
const Bible = () => {
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let [Books, SetBooks] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    SetBooks(Bible);
  }, [Bible, Books]);
  const GoToReadBookById = (BookId) => {
    navigate(`/Book/${BookId}`);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
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
