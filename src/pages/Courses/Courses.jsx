import React from 'react'
import CourseItem from '../../Components/CourseItem/CourseItem'
import { Link } from 'react-router-dom'
import "./Courses.css"
import { useSelector,useDispatch } from 'react-redux'
import { getCoursesFromServer } from '../../Redux/store/courses'
import { useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader"
export default function Courses() {
  const dispatch = useDispatch()
  const courses = useSelector((state)=> state.courses)
     useEffect(()=>{
        dispatch(getCoursesFromServer("https://jsonplaceholder.typicode.com/posts"))
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
            {courses !==null ? courses.map((course)=>{
             return  <CourseItem {...course} key={crypto.randomUUID()}/>
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

        <div className="new-course d-flex gap-2">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-product"
          >
            افزودن دوره جدید
          </button>
          <button
            className="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product"
          >
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            className="btn-custome btn-custome__green btn-modal-new-category"
            data-bs-toggle="modal"
            data-bs-target="#add-new-category"
          >
            افزودن دسته بندی
          </button>
        </div>
      </div>
    </div>
  )
}
