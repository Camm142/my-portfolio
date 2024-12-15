import React from 'react'

export default function QuickIntro3({language, socialData}) {
  return (
    <>
      <div className="row mt-5 common-style">
        <div className="col-12 text-center">
          <h1 className={`display-3 ${language}`}>
            {language === 'english'? 'My Social Account':'Các Tài Khoản Xã Hội của Tôi'}
          </h1>
          <p>
          {language === 'english'?
          "Most of the times I use Facebook and Instagram, if you may, please contact me through these two platform or email ! : D"
          :
          "Phần lớn thời gian tôi sử dụng Facebook và Instagram là hai tài khoản xã hội chính, nếu được mong bạn liên lạc với tôi qua hai nền tảng này hoặc email ! : D"}</p>
          <div className="row">
            <div className="col-12">
              {socialData.map(([key, {icon, link, color}]) => (
                <div key={key} className=''>
                  <div className="row">
                  <div className="col-2">
                    <i className={`${icon} fs-3`}></i>
                  </div>
                  <div className="col-8">
                    <p className='ms-2 border border-0 rounded-pill p-2' style={{backgroundColor: color}}>
                      <a href={link} className='text-dark'>{link}</a>
                    </p>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
