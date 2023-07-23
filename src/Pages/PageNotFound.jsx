import React from "react";
import { Link } from "react-router-dom";
import "./Main.style.css";
const PageNotFound = () => {
  return (
    <section id="PageNotFound">
      <p>هذه الصفحة ليس موجودة</p>
      <button className="btn btn-primary">
        <Link to="/" className="text-white">
          الرجوع الي الصفحة الرئيسية
        </Link>
      </button>
    </section>
  );
};

export default PageNotFound;
