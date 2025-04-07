import React, { useEffect, useState } from 'react'
import "./Articles.css"
import ArticleItem from '../../Components/ArticleItem/ArticleItem'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addArticleToServer, getArticlesFromServer, removeArticleFromServer } from '../../Redux/store/articles'
import RingLoader from "react-spinners/RingLoader"
import { getCategoriesFromServer } from '../../Redux/store/categories';
export default function Articles() {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articles.filteredArticles)
  const categories = useSelector((state) => state.categories.filteredCategories)
  useEffect(() => {
    dispatch(getArticlesFromServer())
    dispatch(getCategoriesFromServer())
  }, [dispatch])
  const [FadeAndShowArticleModal, setFadeAndShowArticleModal] = useState(false)

  const deleteArticleHandler = (id) => {
    swal({
      title: "آیا از حذف مثاله مطمئن هستید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((res) => {
      if (res) {
        dispatch(removeArticleFromServer(id)).then(() => {
          getArticlesFromServer()
        })
        swal({
          title: "مثاله با موفقیت حذف شد",
          icon: "success",
          buttons: "تایید",
        })
      }
    })
  }
  let newArticleData = {
    title: "",
    category: "",
    username: "",
    views: "",
    desc: "",
  }
  const openAndFadeArticlesModalHandler = () => {
    setFadeAndShowArticleModal((prevState) => !prevState)
  }
  const submitAddArticleInfoHandler = (event) => {
    event.preventDefault()
    dispatch(addArticleToServer(newArticleData)).then(() => {
      dispatch(getArticlesFromServer());
    });
    openAndFadeArticlesModalHandler()
  }
  return (
    <>
      {/* // Modal */}
      <div
        className={FadeAndShowArticleModal === false ? "modal " : "modal show-modal"}
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
                onClick={openAndFadeArticlesModalHandler}
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0" onSubmit={(event) => submitAddArticleInfoHandler(event)}>
                <div className="form__box-input col-12 px-2">
                  <label htmlFor="title" className="mx-2 mt-4">
                    عنوان :
                  </label>
                  <span className="fa fa-heading form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="form-control form__input input-user-firstname"
                    onChange={(event) => newArticleData.title = event.target.value}
                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="category" className="mx-2 mt-4">
                    دسته بندی :
                  </label>
                  <span className="fa fa-folder form__icon"></span>
                  <select
                    lang="en"
                    name="category"
                    required
                    id="category"
                    className="form-control form__input input-user-username"
                    onChange={(event) => newArticleData.category = event.target.value}
                  >
                    {categories !== null ? categories.map((category) => {
                      return <option key={category._id} value={category.title}>{category.title}</option>
                    }) :
                    ""}

                  </select>

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="username" className="mx-2 mt-4">
                    تعداد بازدید :
                  </label>
                  <span className="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="number"
                    name="views"
                    required
                    id="views"
                    className="form-control form__input input-user-username"
                    onChange={(event) => newArticleData.views = event.target.value}

                  />

                </div>

                <div className="form__box-input col-12 px-2">
                  <label htmlFor="email" className="mx-2 mt-4">
                    توضیحات :
                  </label>
                  <span className="fa fa-file-alt form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name="desc"
                    required
                    id="desc"
                    className="form-control form__input input-user-email"
                    onChange={(event) => newArticleData.desc = event.target.value}
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
      {/* //end modal */}
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
              <Link to="/courses" className="content__tab-link">
                <span className="fa fa-store"></span>
                دوره‌ها
              </Link>
            </li>

            <li className="content__tab">
              <Link to="/articles" className="content__tab-link active__navItem">
                <span className="fa fa-newspaper"></span>
                وبلاگ
              </Link>
            </li>
          </ul>

          <div className="articles">
            <div className="articles__list">
              {articles !== null ? articles.map((article) => {
                return <ArticleItem {...article} key={article._id} deleteArticleHandler={deleteArticleHandler} />
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

          <div className="new-article">
            <button
              className="btn-custome btn-custome__blue"
              data-bs-toggle="modal"
              data-bs-target="#new-article"
              id="btn-modal-new-article"
              onClick={()=>openAndFadeArticlesModalHandler()}
            >
              افزودن مقاله جدید
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
