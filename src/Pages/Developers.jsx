/* eslint-disable react/jsx-no-target-blank */
import React from "react";


const Developers = () => {
  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section id="Developers" className="text-center p-2">
              <p className="AboutDevelopers mb-1">هذه الصفحة مخصصة للمطوررين</p>
              <p className="AboutDevelopers mb-1">
                وهذا اللينك لكل المعلومات عن الكتاب المقدس في API
              </p>
              <a
                target="_blank"
                href={window.location.origin + "/Data/Data.json"}
              >
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
