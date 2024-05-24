/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../Bible_Data/Bible_Data_Context";
import { ArrowBack } from "@mui/icons-material";
import "./Main.style.css";
import FooterController from "../Components/FooterController/FooterController";


const Chapter = () => {
  let { BookId, ChapterId, VerseId } = useParams();
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let [Book, SetBook] = useState({});
  let navigate = useNavigate();
  let [VerseIdUpDate, SetVerseId] = useState("");
  useEffect(() => {
    if (VerseId != undefined) {
      SetVerseId(VerseId);
      Bible.filter((Book) => {
        if (Book.id == BookId) {
          SetBook(Book);
        }
      });
    } else {
      SetVerseId("");
      Bible.filter((Book) => {
        if (Book.id == BookId) {
          SetBook(Book);
        }
      });
    }
  }, [BookId, Bible, ChapterId, VerseId]);

  return (
    <>      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section id="Chapter">
              <div className="HeaderChapter">
                <h1 className="TitleChapter">
                  {Book.arabicName + ` اصحاح ${Number(ChapterId)}`}
                </h1>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(`/Book/${BookId}`);
                  }}
                >
                  <span className="ms-2">{Book.arabicName}</span>
                  <ArrowBack></ArrowBack>
                </button>
              </div>
              <FooterController
                ChapterId={ChapterId}
                BookId={BookId}
              ></FooterController>
              <div className="Verses">
                {Book.chapters
                  ? Book.chapters.map((Chapter) => {
                      if (Chapter.chapter == ChapterId) {
                        return Chapter.verses.map((Verse, i) => {
                          if (VerseIdUpDate == Verse.verse) {
                            return (
                              <div
                                className="Verse Active"
                                id={"Verse" + Verse.verse}
                                key={i}
                              >
                                <p className="m-0">
                                  <span> {i + 1}</span> {Verse.text}
                                </p>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="Verse"
                                id={"Verse" + Verse.verse}
                                key={i}
                              >
                                <p className="m-0">
                                  <span> {i + 1}</span> {Verse.text}
                                </p>
                              </div>
                            );
                          }
                        });
                      }
                    })
                  : ""}
              </div>
              <FooterController
                ChapterId={ChapterId}
                BookId={BookId}
              ></FooterController>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter;
