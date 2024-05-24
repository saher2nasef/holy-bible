/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import "./Main.style.css";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";


const Book = () => {
  let { BookId } = useParams();
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let [Book, SetBook] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    Bible.filter((Book) => {
      if (Book.id == BookId) {
        SetBook(Book);
      }
    });
  }, [BookId, Bible]);
  const GoToChapter = (ChapterId) => {
    navigate(`/Chapter/${BookId}/${ChapterId}`);
  };
  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section id="Book">
              <div className="HeaderBook">
                <h1 className="TitleBook">{Book.arabicName}</h1>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <span className="ms-2">الصفحة الرئيسية</span>
                  <ArrowBack></ArrowBack>
                </button>
              </div>
              <div className="Chapters">
                {Book.chapters != undefined
                  ? Book.chapters.map((Chapter, i) => {
                      return (
                        <div
                          className="Chapter"
                          key={i}
                          onClick={() => {
                            GoToChapter(Chapter.chapter);
                          }}
                        >
                          {i + 1}
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

export default Book;
