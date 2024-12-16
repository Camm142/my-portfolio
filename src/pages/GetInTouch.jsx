import React, { useState, useEffect, useRef } from 'react';
import logo from '/images/logo.jpg';
import data from '../data/introduction_text.json';
import NavBar from '../components/NavBar';
import SwitchButton from '../components/SwitchButton';
import '../styles/pages/getintouch.css';
import QuickIntro from '../components/QuickIntro';
import QuickIntro2 from '../components/QuickIntro2';
import QuickIntro3 from '../components/QuickIntro3';
import { useLanguage } from '../service/LanguageContext';

export default function GetInTouch() {
  const {language, toggleLanguage} = useLanguage(); //use the context
  const [isCircleClicked, setIsCircleClicked] = useState(false);
  const [clickedCircle, setClickedCircle] = useState(1);
  const mainContentRef = useRef(null);
  //initialize data
  const descData = data.description[language];
  const contactData = Object.entries(data.contact);
  const languageData = Object.entries(data.language[language]);
  const hobbiesData = Object.entries(data.hobbies[language]);
  const socialData = Object.entries(data.social_account);

  useEffect(() => {
    setIsCircleClicked(true);
  }, []);

  const handleCircleClick = (circleNumber) => {
    setClickedCircle(circleNumber);
    setIsCircleClicked(true);
  };

  const handleScroll = ()=> {
    mainContentRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const handleLanguageToggle = (newLanguage) => {
    setLanguage(newLanguage)
  };

  return (
    <>
      <NavBar language={language} />
      {/* banner image */}
      <div className="container-fluid banner-img-bg-color">
        <div className="row position-relative">
          <div className="col-12">
            <div className="row">
              <div className="col-12 special-style text-center" style={{ zIndex: 3 }}>
                <h1>PORTFOLIO</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <img
                  src={logo}
                  className="img-thumbnail rounded-circle position-absolute translate-middle-y"
                  alt="github-thumbnail"
                  style={{ maxWidth: '380px', zIndex: 2, left: '6%', top: '40%' }}
                />
              </div>
              <div className="col-12 special-style text-center" style={{ zIndex: 1 }}>
                <h1 className="text-white opacity-50 lh-1">PORTFOLIO</h1>
                <h1 className="text-white opacity-75 lh-1">PORTFOLIO</h1>
                <h1 className="text-white lh-1 position-absolute start-50 translate-middle-x">
                  PORTFOLIO
                </h1>
              </div>
            </div>
            <div className="row common-style pt-5 text-center">
              <div className="col-12 bg-black p-5">
                <p className="text-white">
                {language === "english" ?
                "Welcome to my web-based portfolio. This website is all about me, I am a fresh developer. I love playing games and coding. Game is the motivation for me to start learning code." :
                "Chào mừng đến với portfolio được thiết kế dưới dạng website của tôi. Trang web này giới thiệu về bản thân tôi, một lập trình viên junior. Tôi thích lập trình và chơi games. Games chính là động lực giúp tôi bắt đầu quá trình học lập trình của mình."}
                </p>
              </div>
            </div>
            <div className="row common-style " style={{ zIndex: 1 }}>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-color btn-outline-dark custom-button position-absolute start-50 translate-middle"
                  onClick={handleScroll}
                >
                  Scroll Down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main content  */}
      <div className="container-fluid bg-color" ref={mainContentRef}>
        <div className="row d-flex justify-content-center align-items-center pt-5">
          <div className="col-9 ms-1 fixed-height-container">
            {/* add action to see different data  */}
            {clickedCircle === 1 && isCircleClicked && <QuickIntro language={language} descData={descData} contactData={contactData} />}
            {clickedCircle === 2 && isCircleClicked && <QuickIntro2 language={language} languageData={languageData} hobbiesData={hobbiesData}/>}
            {clickedCircle === 3 && isCircleClicked && <QuickIntro3 language={language} socialData={socialData}/>}
          </div>
          {/* circle transition animation */}
          <div className="col-1">
            <div className="circle-container">
              <div className={`circle ${clickedCircle === 1 ? 'circle-clicked' : ''}`} onClick={() => handleCircleClick(1)}>
                <div className="circle-inner"></div>
              </div>
              <div className="vertical-line"></div>
              <div className={`circle ${clickedCircle === 2 ? 'circle-clicked' : ''}`} onClick={() => handleCircleClick(2)}>
                <div className="circle-inner"></div>
              </div>
              <div className="vertical-line"></div>
              <div className={`circle ${clickedCircle === 3 ? 'circle-clicked' : ''}`} onClick={() => handleCircleClick(3)}>
                <div className="circle-inner"></div>
              </div>
            </div>
          </div>
          <div className="col-10">
          <SwitchButton
            language={language}
            handleLanguageToggle={toggleLanguage}
            >
          </SwitchButton>
          </div>
      </div>
      </div>
    </>
  );
}
