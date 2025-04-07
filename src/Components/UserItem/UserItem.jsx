import React from 'react'
import { useState } from 'react'
export default function UserItem({ _id,firstname,lastname, username, email,age,city, index, removeUserHandler }) {
   const [fadeModal, setFadeModal] = useState(false)
  const fadeModalHandler = () => {
    setFadeModal((prevState) => !prevState)
  }
  return (
    <>
{/* //modal */}
      <div
        className={fadeModal === false ? "modal " : "modal show-modal"}
        id="show-info-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">اطلاعات</h4>
              <button
                type="button"
                className="btn-close py-0"
                data-bs-dismiss="modal"
                onClick={fadeModalHandler}
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="firstname" className="mx-2 mt-4">
                    نام :
                  </label>
                  <span className="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    defaultValue={firstname}
                    className="form-control form__input input-user-firstname"
                    readOnly
                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="lastname" className="mx-2 mt-4">
                    نام خانوادگی :
                  </label>
                  <span className="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    name=""
                    defaultValue={lastname}
                    id="lastname"
                    className="form-control form__input input-user-lastname"
                    readOnly
                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="username" className="mx-2 mt-4">
                    نام کاربری :
                  </label>
                  <span className="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    defaultValue={username}
                    id="username"
                    className="form-control form__input input-user-username"
                    readOnly

                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="email" className="mx-2 mt-4">
                    ایمیل :
                  </label>
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name="email"
                    defaultValue={email}
                    id="email"
                    className="form-control form__input input-user-email"
                    readOnly
                  />

                </div>

            
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="age" className="mx-2 mt-4">
                    سن:
                  </label>
                  <span className="fa fa-wallet form__icon"></span>
                  <input
                    type="number"
                    name="age"
                    defaultValue={age}
                    id="age"
                    className="form-control form__input input-user-product"
                    readOnly
                  />
                </div>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="city" className="mx-2 mt-4">
                    شهر:
                  </label>
                  <span className="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name="city"
                    defaultValue={city}
                    id="city"
                    className="form-control form__input input-user-product"
                    readOnly
                  />
                </div>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="courseCount" className="mx-2 mt-4">
                    تعداد درس:
                  </label>
                  <span className="fa fa-wallet form__icon"></span>
                  <input
                    type="number"
                    name="courseCount"
                    defaultValue={courseCount && courseCount}
                    id="courseCount"
                    className="form-control form__input input-user-product"
                    readOnly
                  />
                </div>

                <div className="change-profile-box px-0 d-flex gap-4 mb-4 mt-5">
                  <div className="change-profile-input-box">
                    <img
                      src={`../../images/${index + 1}.jpg`}
                      className="change-profile-pic"
                      alt=""
                    />
                    <label
                      htmlFor="upload-profile-input"
                      className="upload-profile-input-label"
                    >
                    </label>
                  </div>

                </div>
              </form>
            </div>


          </div>
        </div>
      </div>




      {/* endModal */}
      <div className="uesrs__item">
        <div className="users__info">
          <img
            src={`../../images/${index + 1}.jpg`}
            alt="photo user"
            className="users__img"
          />
          <div className="users__details">
            <p className="users__name my-0">{username}</p>
            <p lang="en" className="users__email">
              {email}
            </p>
          </div>
        </div>
        <div className="users__btns">
          <button className="btn-custome btn-custome__blue"onClick={fadeModalHandler}>اطلاعات</button>
          <button className="btn-custome btn-custome__red" onClick={() => removeUserHandler(_id)}>حذف</button>
        </div>
      </div>
    </>
  )
}
