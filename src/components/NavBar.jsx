import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navbar.css';

export default function NavBar({language}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          {/* Logo name*/}
          <div className="navbar-brand">
            <svg width="300" height="105" viewBox="0 0 300 105">
              <path
                id="curve"
                d="M 10,80 Q 150,10 290,80"
                fill="transparent"
                stroke="transparent"
              />
              <text fontSize="32" fontWeight="bold" fill="black">
                <textPath href="#curve" startOffset="0%" textAnchor="start" dominantBaseline="start">
                  ★
                </textPath>
              </text>
              <text className='handwriting-style' fontSize="48" fontWeight="bold" fill="white">
                <textPath href="#curve" startOffset="55%" textAnchor="middle" dominantBaseline="middle">
                  Vu Ha Phuong
                </textPath>
              </text>
              <text className='common-style' x="50%" y="100" fontSize="24" fontWeight="normal" textAnchor="middle">
               ★ developer
              </text>
            </svg>
          </div>
          {/* navbar content */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-evenly w-100">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/"
                >
                  Get in Touch!
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/about-me"
                >
                  {language === 'english' ? "About Me" : "Về bản thân tôi"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/project"
                >
                  {language === 'english' ? "Project" : "Các dự án"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  to="/resume"
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
