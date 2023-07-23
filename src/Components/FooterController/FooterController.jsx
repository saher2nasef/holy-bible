/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useContext, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { DataContext } from "../../Bible_Data/Bible_Data_Context";
import { useNavigate } from "react-router-dom";
const FooterController = ({ BookId, ChapterId }) => {
  let {
    Data: { Bible },
  } = useContext(DataContext);
  let navigate = useNavigate();
  useEffect(() => {}, [BookId, ChapterId]);
  const LastChapter = () => {
    Bible.filter((Book, IndexBook) => {
      if (Book.id == BookId) {
        Book.chapters.filter((Chapter, IndexChapter) => {
          if (Chapter.chapter == ChapterId) {
            if (
              !(
                Bible[0].id == BookId &&
                Bible[0].chapters[0].chapter == ChapterId
              )
            ) {
              if (Book.chapters[IndexChapter - 1] != undefined) {
                navigate(`/Chapter/${BookId}/${IndexChapter}`);
              } else {
                navigate(
                  `/Chapter/${Bible[IndexBook - 1].id}/${
                    Bible[IndexBook - 1].chapters.length
                  }`
                );
              }
            }
          }
        });
      }
    });
  };
  const NextChapter = () => {
    Bible.filter((Book, IndexBook) => {
      if (Book.id == BookId) {
        Book.chapters.filter((Chapter, IndexChapter) => {
          if (Chapter.chapter == ChapterId) {
            if (
              !(
                Bible[Bible.length - 1].id == BookId &&
                Bible[Bible.length - 1].chapters[
                  Bible[Bible.length - 1].chapters.length - 1
                ].chapter == ChapterId
              )
            ) {
              if (Book.chapters[IndexChapter + 1] != undefined) {
                navigate(`/Chapter/${BookId}/${IndexChapter + 2}`);
              } else {
                navigate(`/Chapter/${Bible[IndexBook + 1].id}/1`);
              }
            }
          }
        });
      }
    });
  };
  return (
    <div className="buttons px-1 mt-3 d-flex justify-content-between align-items-center">
      <button className="btn btn-primary" onClick={LastChapter}>
        <ArrowRight></ArrowRight>
      </button>
      <button className="btn btn-primary" onClick={NextChapter}>
        <ArrowLeft></ArrowLeft>
      </button>
    </div>
  );
};

export default FooterController;
