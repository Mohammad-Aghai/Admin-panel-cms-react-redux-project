import React from 'react'
import { Link } from 'react-router-dom'
import "./UserInfo.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeAdminInfo } from '../../Redux/store/adminInfo'
export default function UsersInfo() {
  let adminInfo = useSelector((state) => state.adminInfo)
  const dispatch = useDispatch()
  let newAdminInfo = {...adminInfo};
  const submitAdminInfoHandler = (event) => {
    event.preventDefault()

    dispatch(changeAdminInfo(
      {
        banner: newAdminInfo.banner,
        courseCount: newAdminInfo.courseCount,
        email: newAdminInfo.email,
        firstName: newAdminInfo.firstName,
        fullName: newAdminInfo.fullName,
        job: newAdminInfo.job,
        lastName: newAdminInfo.lastName,
        password: newAdminInfo.password,
        profile: newAdminInfo.profile,
      }
    ))
  }
  //file input
  const inputImageToSrc = (event) => {
    const file = event.target.files[0]
    return URL.createObjectURL(file);
  }
  const reciveInputFileBannerHandler = (event) => {
    const bannerSrc = inputImageToSrc(event)
    newAdminInfo.banner = bannerSrc
  }
  const reciveInputFileProfileHandler = (event) => {
    const profleSrc = inputImageToSrc(event);


    newAdminInfo.profile = profleSrc;
  }

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <ul className="content__tabs">
          <li className="content__tab">
            <Link to="/users" className="content__tab-link">
              <span className="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/userInfo" className="content__tab-link active__navItem">
              <span className="fa fa-book"></span>
              اطلاعات
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/courses" className="content__tab-link">
              <span className="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li className="content__tab">
            <Link to="/articles" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </Link>
          </li>
        </ul>
        <div className="active"></div>

        <div className="information">
          <div id="accordion">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">اطلاعات</h4>

                </div>

                <div className="modal-body position-relative">
                  <form action="#" className="form row mx-0" onSubmit={(event) => submitAdminInfoHandler(event)}>
                    <div className="form__box-input col-12 px-2">
                      <label htmlFor="firstname" className="mx-2 mt-4">
                        نام :
                      </label>
                      <span className="fa fa-user form__icon icon-name-article"></span>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        defaultValue={newAdminInfo.firstName}
                        className="form-control form__input input-user-firstname"
                        onChange={(event) => newAdminInfo.firstName = event.target.value}
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
                        defaultValue={newAdminInfo.lastName}
                        id="lastname"
                        className="form-control form__input input-user-lastname"
                        onChange={(event) => newAdminInfo.lastName = event.target.value}
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
                        defaultValue={newAdminInfo.fullName}
                        id="username"
                        className="form-control form__input input-user-username"
                        onChange={(event) => newAdminInfo.fullName = event.target.value}

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
                        defaultValue={newAdminInfo.email}
                        id="email"
                        className="form-control form__input input-user-email"
                        onChange={(event) => newAdminInfo.email = event.target.value}
                      />

                    </div>

                    <div className="form__box-input col-12 px-2">
                      <label htmlFor="job" className="mx-2 mt-4">
                        شغل :
                      </label>
                      <span className="fa fa-briefcase form__icon"></span>
                      <input
                        type="text"
                        name=""
                        id="job"
                        defaultValue={newAdminInfo.job}
                        className="form-control form__input input-user-password"
                        onChange={(event) => newAdminInfo.job = event.target.value}
                      />

                    </div>
                    <div className="form__box-input col-12 px-2">
                      <label htmlFor="password" className="mx-2 mt-4">
                        پسورد :
                      </label>
                      <span className="fa fa-key form__icon"></span>
                      <input
                        type="password"
                        name=""
                        id="password"
                        defaultValue={newAdminInfo.password}
                        className="form-control form__input input-user-password"
                        onChange={(event) => newAdminInfo.password = event.target.value}
                      />

                    </div>
                    <div className="form__box-input col-12 px-2">
                      <label htmlFor="courseCount" className="mx-2 mt-4">
                        تعداد درس :
                      </label>
                      <span className="fa fa-wallet form__icon"></span>
                      <input
                        type="number"
                        name=""
                        placeholder={newAdminInfo.courseCount}
                        id="courseCount"
                        className="form-control form__input input-user-product"
                        onChange={(event) => newAdminInfo.courseCount = event.target.value}
                      />

                    </div>
                    <div className="change-profile-box px-0 d-flex gap-4 mb-4 mt-5">
                      <div className="change-profile-input-box">
                        <img
                          src="../../img/admin/profile/banana.png"
                          className="change-profile-pic"
                          alt=""
                        />
                        <label
                          htmlFor="upload-profile-input"
                          className="upload-profile-input-label"
                        >
                          <input
                            type="file"
                            id="upload-profile-input"
                            name="upload-profile-input"
                            accept="image/*"
                            onChange={(event) => reciveInputFileProfileHandler(event)}
                          />
                        </label>
                      </div>

                      <div className="change-banner-input-box">
                        <img
                          src="../../img/admin/banner/banner.png"
                          className="change-banner-pic"
                          alt=""
                        />
                        <label
                          htmlFor="upload-banner-input"
                          className="upload-banner-input-label"
                        >
                          <input type="file" id="upload-banner-input" accept="image/*" name="upload-banner-input" onChange={(event) => reciveInputFileBannerHandler(event)} />
                        </label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type='submit'
                        className="btn btn-danger btn-lg"
                        data-bs-dismiss="modal"
                      >
                        تبت ویرایش
                      </button>
                    </div>
                  </form>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
