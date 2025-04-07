import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAdminInfo } from '../../Redux/store/adminInfo';
export default function Sidebar() {
  const adminInfo = useSelector((state) => state.adminInfo)
  const dispatch = useDispatch()
  const [fadeModal, setFadeModal] = useState(false)
  const AdminData = {
    banner: "../../images/background.webp",
    courseCount: 12,
    email: "MohamadAghai1381@email.com",
    firstName: "محمد",
    fullName: "محمد آقائی",
    job: "Front-end Engineer",
    lastName: "آقائی",
    password: "1381",
    profile: "../../images/profileImage.webp"
  }
  //modal
  const openModalHandler = () => {
    setFadeModal((prevState) => !prevState)
  }
  const fadeModalHandler = () => {
    setFadeModal((prevState) => !prevState)
  }

  //form
  const submitAdminInfoHandler = (event) => {
    event.preventDefault()

    dispatch(changeAdminInfo(
      {
        banner: AdminData.banner,
        courseCount: AdminData.courseCount,
        email: AdminData.email,
        firstName: AdminData.firstName,
        fullName: AdminData.fullName,
        job: AdminData.job,
        lastName: AdminData.lastName,
        password: AdminData.password,
        profile: AdminData.profile,
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
    AdminData.banner = bannerSrc
  }
  const reciveInputFileProfileHandler = (event) => {
    const profleSrc = inputImageToSrc(event);


    AdminData.profile = profleSrc;
  }

  return (
    <>  <div
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
                  defaultValue={adminInfo.firstName}
                  className="form-control form__input input-user-firstname"
                  onChange={(event) => AdminData.firstName = event.target.value}
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
                  defaultValue={adminInfo.lastName}
                  id="lastname"
                  className="form-control form__input input-user-lastname"
                  onChange={(event) => AdminData.lastName = event.target.value}
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
                  defaultValue={adminInfo.fullName}
                  id="username"
                  className="form-control form__input input-user-username"
                  onChange={(event) => AdminData.fullName = event.target.value}

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
                  defaultValue={adminInfo.email}
                  id="email"
                  className="form-control form__input input-user-email"
                  onChange={(event) => AdminData.email = event.target.value}
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
                  defaultValue={adminInfo.job}
                  className="form-control form__input input-user-password"
                  onChange={(event) => AdminData.job = event.target.value}
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
                  defaultValue={adminInfo.password}
                  className="form-control form__input input-user-password"
                  onChange={(event) => AdminData.password = event.target.value}
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
                  placeholder={adminInfo.courseCount}
                  id="courseCount"
                  className="form-control form__input input-user-product"
                  onChange={(event) => AdminData.courseCount = event.target.value}
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
                  ثبت
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>






      <div className="col-10 col-md-3 sidebar mx-auto mx-md-0 px-0">
        <div className="sidebar-content">
          <div className="card position-relative text-center card__borderred">
            <img
              className="card-img-top sidebar__img-banner"
              src={adminInfo.banner}
              alt="banner admin photo"
            />
            <div className="card-body">
              <h4 className="card-title sidebar__top-name">{adminInfo.fullName}</h4>
              <p className="card-text sidebar__top-email" lang="en">
                {adminInfo.job}
              </p>
              <ul className="list px-0">
                <li className="list__item">
                  <span className="fa fa-text-height"></span>
                  <p className="list__text mb-0">
                    <span className="">نام کوچک</span>
                    <span className="list__firstname">{adminInfo.firstName}</span>
                  </p>
                </li>
                <li className="list__item">
                  <span className="fa fa-text-width"></span>

                  <p className="list__text mb-0">
                    <span className="">نام خانوادگی</span>
                    <span className="list__lastname">{adminInfo.lastName}</span>
                  </p>
                </li>
                <li className="list__item">
                  <span className="fa fa-wallet"></span>

                  <p className="list__text mb-0">
                    <span className="">تعداد دوره</span>
                    <span className="list__course-count">{adminInfo.courseCount}</span>
                  </p>
                </li>
              </ul>
              <button className="btn-custome btn-custome__blue btn-sidebar w-100" onClick={openModalHandler}>
                تغییر اطلاعات
                <span className="fa fa-pencil"></span>
              </button>
            </div>

            <div className="sidebar__profile">
              <img
                src={adminInfo.profile}
                alt="admin photo"
                className="sidebar__img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
