import React, { useEffect } from 'react'
import "./Articles.css"
import ArticleItem from '../../Components/ArticleItem/ArticleItem'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { getArticlesFromServer } from '../../Redux/store/articles'
import RingLoader from "react-spinners/RingLoader"
export default function Articles() {
  const dispatch = useDispatch()
  const articles = useSelector((state)=> state.articles)
  
   useEffect(()=>{
      dispatch(getArticlesFromServer("https://jsonplaceholder.typicode.com/posts"))
   },[dispatch])
   
  return (
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
            { articles !== null ? articles.map((article) => {
              return <ArticleItem {...article} key={crypto.randomUUID()}/>
            }): 
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
          >
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </div>
  )
}
