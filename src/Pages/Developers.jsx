import React from "react";
import Header from "../Components/Header/Header";

const Developers = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section id="Developers" className="text-center p-5">
              <p className="AboutDevelopers mb-1">هذه الصفحة مخصصة للمطوررين</p>
              <p className="AboutDevelopers mb-1">
                وهذا اللينك لكل المعلومات عن الكتاب المقدس في API
              </p>
              <a target="_blank" href={window.location.origin + "/Bible.json"}>
                Api Holy Bible
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
