import React from 'react'
import swal from "sweetalert"
export default function Header({darkModeHandler,darkMode}) {
  const exitHandler =()=>{
swal({
  title : "شما با موفقیت خارج شدید",
  icon : "success",
  buttons : "تایید"

})
  }
  return (
    <div className="container px-0 pt-5 ">
    <header className="header col-10 col-md-12 mx-auto">
      <div className="header__info">
        <img
          src="../../images/profileImage.webp"
          alt="admin photo"
          className="header__img"
        />
        <div className="header__details">
          <h4 className="header__name mb-2">محمد آقائی</h4>
          <p className={darkMode?"header__email my-0 darkFrontEnd": "header__email my-0 "} lang="en">
            Front-end Engineer
          </p>
        </div>
      </div>
      <div className="header__btns">
        <button className="btn-custome btn-header__dark-mode" onClick={darkModeHandler}>
          <span className={darkMode ?"fa fa-moon header__icon": "fa fa-sun header__icon"}></span>
        </button>
        <button className="btn-custome btn-custome__blue btn-header__log-out" onClick={exitHandler}>
          <span className="fa fa-sign-out header__icon"></span>
          خروج از پنل
        </button>
      </div>
    </header>
  </div>
  )
}
