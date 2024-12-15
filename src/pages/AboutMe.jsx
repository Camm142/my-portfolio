import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SwitchButton from "../components/SwitchButton";
import data from "../data/aboutme_text.json";
import "../styles/pages/aboutme.css";

export default function AboutMe() {
  const [language, setLanguage] = useState("english"); // Default language is English
  const description = data.description.content[language];
  const educationData = Object.entries(data.education.content[language]);
  const prosCons = data.pros_cons.content[language];
  const experience = Object.entries(data.experience.content[language]);
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleButtonClicked = (key) => {
    if (clickedButtons.includes(key)) {
      setClickedButtons(clickedButtons.filter((button) => button !== key));
    } else {
      setClickedButtons([...clickedButtons, key]);
    }
  };

  const handleLanguageToggle = (newLanguage) => {
    setLanguage(newLanguage)
  };

  return (
    <>
      {/* <NavBar language={language}/> */}
      <div className='container-fluid bg-color min-vh-100 d-flex flex-column justify-content-center'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="handwriting-style display-2">Welcome !!!</h1>
              <p className="common-style">
                {language === "english"
                  ? "The GET IN TOUCH page has introduced you to the basics of me. This ABOUT ME page will introduce you to me in a professional way, including my education history, my target, etc."
                  : "Trang GET IN TOUCH đã giới thiệu cơ bản về tôi. Trang ABOUT ME này sẽ giới thiệu về tôi một cách chuyên nghiệp, bao gồm lịch sử học vấn, mục tiêu, v.v."}
              </p>
            </div>
            <hr className="dashed-line" />
          </div>

          {/* Description Section */}
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center">
              <div className="mb-4">
                <div
                  className={`${language}`}
                  onClick={() => handleButtonClicked("description")}
                >
                  <span className="h4">
                    <i
                      className={`fas ${
                        clickedButtons.includes("description")
                          ? "fa-minus"
                          : "fa-plus"
                      }`}
                    ></i>
                  </span>
                  <span className="h2 ms-2">
                    {language === "english" ? "Description" : "Về bản thân tôi"}
                  </span>
                  <hr className="border border-dark border-1" />
                </div>
                <div className="common-style">
                  {clickedButtons.includes("description") &&
                    description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-4">
                <div
                  className={`${language}`}
                  onClick={() => handleButtonClicked("education")}
                >
                  <span className="h4">
                    <i
                      className={`fas ${
                        clickedButtons.includes("education")
                          ? "fa-minus"
                          : "fa-plus"
                      }`}
                    ></i>
                  </span>
                  <span className="h2 ms-2">
                    {language === "english" ? "Education History" : "Lịch Sử Học Vấn"}
                  </span>
                  <hr className="border border-dark border-1" />
                </div>
                {clickedButtons.includes("education") && (
                  <div className="timeline">
                    {educationData.map(([eduKey, eduValue], index) => (
                      <div
                        key={eduKey}
                        className="square-container common-style mb-3"
                      >
                        <div className="square-year-container">
                          <div className="square">
                            <div className="square-inner"></div>
                          </div>
                          <span className="year ms-3 fw-bold fs-4">
                            {eduValue.year}
                          </span>
                          <span className="ms-5">
                            <span className="fw-bold">{eduValue.school}</span> <br />
                            {eduValue.subtitle}
                          </span>
                        </div>
                        {index < educationData.length - 1 && (
                          <div className="line"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Section */}
              <div className="mb-4">
                <div
                  className={`${language}`}
                  onClick={() => handleButtonClicked("experience")}
                >
                  <span className="h4">
                    <i
                      className={`fas ${
                        clickedButtons.includes("experience")
                          ? "fa-minus"
                          : "fa-plus"
                      }`}
                    ></i>
                  </span>
                  <span className="h2 ms-2">
                    {language === "english" ? "Experience" : "Kinh Nghiệm"}
                  </span>
                  <hr className="border border-dark border-1" />
                </div>
                {clickedButtons.includes("experience") && (
                  <div className="common-style">
                    <div className="row">
                      {experience.map(([expKey, expValue]) => (
                        <div className="col-6" key={expKey}>
                          <span className="fw-bold fs-3">{expValue.year}</span>
                          <p className="fst-italic">{expValue.job} </p>
                          {expValue.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pros and Cons Section */}
              <div className="mb-4">
                <div
                  className={`${language}`}
                  onClick={() => handleButtonClicked("pros_cons")}
                >
                  <span className="h4">
                    <i
                      className={`fas ${
                        clickedButtons.includes("pros_cons")
                          ? "fa-minus"
                          : "fa-plus"
                      }`}
                    ></i>
                  </span>
                  <span className="h2 ms-2">
                    {language === "english" ? "Strengths and Weaknesses" : "Điểm Mạnh và Điểm Yếu"}
                  </span>
                  <hr className="border border-dark border-1" />
                </div>
                {clickedButtons.includes("pros_cons") && (
                  <div className="row common-style">
                    <div className="col-6">
                      <h4>{language === "english" ? "Strengths:" : "Điểm Mạnh:"}</h4>
                      <ul>
                        {prosCons.advantage.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-6">
                      <h4>{language === "english" ? "Weaknesses:" : "Điểm Yếu:"}</h4>
                      <ul>
                        {prosCons.disadvantage.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Language Switch */}
              <SwitchButton
              language={language}
              handleLanguageToggle={handleLanguageToggle}
              ></SwitchButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
