import React from 'react'
import CourseItem from '../../Components/CourseItem/CourseItem'
import { Link } from 'react-router-dom'
import "./Courses.css"
import { useSelector, useDispatch } from 'react-redux'
import { addCourseToServer, getCoursesFromServer, removeCourseFromServer } from '../../Redux/store/courses'
import { useEffect, useState } from 'react'
import RingLoader from "react-spinners/RingLoader"
import { addCategoryToServer, getCategoriesFromServer } from '../../Redux/store/categories'
export default function Courses() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.filteredCourses)
  const categories = useSelector((state) => state.categories.filteredCategories)
  useEffect(() => {
    dispatch(getCoursesFromServer())
    dispatch(getCategoriesFromServer())
  }, [dispatch])
  const [fadeCourse, setFadeCourserModal] = useState(false)
  const [fadeCategoriesModal, setfadeCategoriesModal] = useState(false)
  const openAndFadeCourseModalHandler = () => {
    setFadeCourserModal((prevState) => !prevState)
  }
  const OpenCloseCategoryModal = () => {
    setfadeCategoriesModal((prevState) => !prevState)
  }
  let newCourseData = {
    title: "",
    price: "",
    category: "",
    registersCount: "",
    discount: "",
    desc: "",
  }
  let newCategoryData = { 
    title: ""
  }
  const deleteCourseHandler = (id) => {
    swal({
      title: "آیا از حذف دوره مطمئن هستید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((res) => {
      if (res) {
        dispatch(removeCourseFromServer(id)).then(() => {
          dispatch(getCoursesFromServer())
        })
        swal({
          title: "دوره با موفقیت حذف شد",
          icon: "success",
          buttons: "تایید",
        })
      }
    })
  }
  const submitAddCourseInfoHandler = (event) => {
    event.preventDefault()
    dispatch(addCourseToServer(newCourseData)).then(() => {
      dispatch(getCoursesFromServer());
    });
    openAndFadeCourseModalHandler()
  }

  const submitAddCategoryInfoHandler = (event) => {
    event.preventDefault()
    dispatch(addCategoryToServer(newCategoryData)).then(() => {
      dispatch(getCategoriesFromServer());
    });
    OpenCloseCategoryModal()
  }
  return (

    <>
      {/* modal */}
      <div
        className={fadeCourse === false ? "modal " : "modal show-modal"}
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
                onClick={openAndFadeCourseModalHandler}
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0" onSubmit={(event) => submitAddCourseInfoHandler(event)}>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="title" className="mx-2 mt-4">
                    نام دوره  :
                  </label>
                  <span className="fa fa-book form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="form-control form__input input-user-firstname"
                    onChange={(event) => newCourseData.title = event.target.value}
                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="price" className="mx-2 mt-4">
                    قیمت :
                  </label>
                  <span className="fa fa-money-bill form__icon"></span>
                  <input
                    type="number"
                    name="price"
                    required
                    id="price"
                    className="form-control form__input input-user-lastname"
                    onChange={(event) => newCourseData.price = event.target.value}
                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="category" className="mx-2 mt-4">
                    دسته بندی   :
                  </label>
                  <span className="fa fa-folder form__icon"></span>
                  <select
                    lang="en"
                    name="category"
                    required
                    id="category"
                    className="form-control form__input input-user-username"
                    onChange={(event) => newCourseData.category = event.target.value}
                  >
                   {categories !== null ? categories.map((category) => {
                   return    <option key={category._id} value={category.title}>{category.title}</option>
              }) :
                <RingLoader
                  color="#00acff"
                  cssOverride={{}}
                  loading
                  size={110}
                  speedMultiplier={1}
                  className='loader'
                />}
        
                  </select>


                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="registersCount" className="mx-2 mt-4">
                    تعداد ثبت نام  :
                  </label>
                  <span className="fa fa-users form__icon"></span>
                  <input
                    lang="en"
                    type="number"
                    name="registersCount"
                    required
                    id="registersCount"
                    className="form-control form__input input-user-email"
                    onChange={(event) => newCourseData.registersCount = event.target.value}
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="discount" className="mx-2 mt-4">
                    تخفیف :
                  </label>
                  <span className="fa fa-tags form__icon"></span>
                  <input
                    type="number"
                    name="discount"
                    id="discount"
                    required
                    className="form-control form__input input-user-password"
                    onChange={(event) => newCourseData.discount = event.target.value}
                  />

                </div>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="desc" className="mx-2 mt-4">
                    توضیحات :
                  </label>
                  <span className="fa fa-comment-dots form__icon"></span>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    required
                    className="form-control form__input input-user-password"
                    onChange={(event) => newCourseData.desc = event.target.value}
                  />

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
      {/* {end modal} */}
      {/* {categories Modal} */}
      <div
        className={fadeCategoriesModal === false ? "modal " : "modal show-modal"}
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
                onClick={OpenCloseCategoryModal}
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0" onSubmit={(event) => submitAddCategoryInfoHandler(event)}>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="category" className="mx-2 mt-4">
                    نام دسته جدید  :
                  </label>
                  <span className="fa fa-folder form__icon"></span>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    required
                    className="form-control form__input input-user-password"
                    onChange={(event) => newCategoryData.title = event.target.value}
                  />

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
      {/* end categories modal */}
      <div className="col-8 content px-0">
        <div className="content__wrapper d-flex flex-column align-content-between">
          <ul className="content__tabs">
            <li className="content__tab">
              <Link to="/users" className="content__tab-link">
                <span className="fa fa-user"></span>
                کاربران
              </Link>
            </li>
            <li className="content__tab">
              <Link to="/userInfo" className="content__tab-link">
                <span className="fa fa-book"></span>
                اطلاعات
              </Link>
            </li>
            <li className="content__tab">
              <Link to="/courses" className="content__tab-link active__navItem">
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

          <div className="products products-container">
            <div className="products__list products-wrapper">
              {courses !== null ? courses.map((course) => {
                return <CourseItem {...course} key={course._id} deleteCourseHandler={deleteCourseHandler} />
              }) :
                <RingLoader
                  color="#00acff"
                  cssOverride={{}}
                  loading
                  size={110}
                  speedMultiplier={1}
                  className='loader'
                />}

            </div>
          </div>

          <div className="new-course d-flex gap-2">
            <button
              className="btn-custome btn-custome__blue"
              data-bs-toggle="modal"
              data-bs-target="#new-product"
              onClick={openAndFadeCourseModalHandler}
            >
              افزودن دوره جدید
            </button>
            <button
              className="btn-custome btn-custome__green btn-modal-new-category"
              data-bs-toggle="modal"
              data-bs-target="#add-new-category"
              onClick={() => OpenCloseCategoryModal()}
            >
              افزودن دسته بندی
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
