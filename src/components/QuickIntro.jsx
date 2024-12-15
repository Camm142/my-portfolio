import React from 'react'
import avatar from '/images/avatar.png'
import '../styles/components/quickintro.css'

export default function QuickIntro({language, descData, contactData}) {
  return (
    <>
      <div className="row common-style">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className='display-4 fw-bold'>{language === 'english'? "HELLO, I'M PHUONG" : "HI, TÔI TÊN HÀ PHƯƠNG"}</h1>
          <p className='col-12 fs-6'>{descData}</p>
        </div>
        <div className="col-6 position-relative">
          <div className="container text-center">
          <p className='position-absolute rounded-pill bg-light px-4 py-2 top-50 translate-middle' style={{left: '20%'}}>12/12/2004</p>
          <p className='position-absolute rounded-pill bg-light px-4 py-2 translate-middle' style={{left: '70%', top: '19%'}}>VIENAMESE</p>
          <div
          className='picture-bg-color'>
            <img
              className="img-fluid"
              width={350}
              src={avatar}
              alt="avatar"
              style={{ zIndex: 1 }}
            />
          </div>
          </div>
          <div className="bg-black text-white common-style contact-box">
            <div className='container'>
              <h2>{language === 'english' ? 'CONTACT' : "LIÊN HỆ"}</h2>
              {contactData.map(([key, {eng_ver, viet_ver, icon}]) => (
                <ul key={key} className="list-unstyled">
                  <li>
                    <i className={`${icon} me-2`}></i>
                    <span>{language === 'english'? eng_ver : viet_ver }</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
