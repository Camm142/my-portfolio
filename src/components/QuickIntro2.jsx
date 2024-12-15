import React from 'react';
import '../styles/components/quickintro.css';

export default function QuickIntro2({ language, languageData, hobbiesData }) {
  return (
    <>
      <div className="row gx-5 h-75 d-flex justify-content-center align-items-center common-style">
        <div className="col-3 me-5 language-box">
          <h2 className="position-absolute translate-middle-y text-uppercase">
            {language === 'english'? "Language" : "Ngôn ngữ"}
          </h2>
          <div className="mt-4">
            {languageData.map(([key, { language, rate }]) => (
              <ul key={key} className="list-unstyled text-center">
                <li className="text-uppercase fs-4">{language}</li>
                <li className="text-capitalize fw-light">{rate}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="col-8 hobby-box">
          <h2 className="position-absolute translate-middle-y text-uppercase">
            {language === 'english'? "Hobbies & Interests" : "Sở thích cá nhân"}
          </h2>
          <div className="mt-5 d-flex justify-content-evenly">
            {hobbiesData.map(([key, { name, description, image }]) => (
              <div
                key={key}
                className="hobby-item text-center ms-5 d-inline-block position-relative"
              >
                <img src={image} width={100} className="img-fluid" alt={name} />
                <p className="mt-2 fw-bold">{name}</p>
                <div className="chatbox position-absolute bg-white p-2 rounded">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p className={`display-2 ${language}`}>{language === 'english'? 'something about me!!' : 'đôi điều về bản thân tôi!!'}</p>
        </div>
      </div>
    </>
  );
}
