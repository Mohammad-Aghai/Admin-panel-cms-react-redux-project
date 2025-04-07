import React, { useEffect,useState } from 'react'
import "./Users.css"
import { Link } from "react-router-dom"
import UserItem from "../../Components/UserItem/UserItem.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { addUsersFromServer, getUsersFromServer, removeUsersFromServer, searchUsers } from '../../Redux/store/users.js';
import RingLoader from "react-spinners/RingLoader";
import swal from "sweetalert"
export default function Users() {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsersFromServer())
  }, [dispatch])

  const newUserData = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    city:"",
    age:"",
    courseCount:""
}

  const users = useSelector((state) => state.users.filteredUsers)
  const [FadeUserModal,setFadeUserModal] = useState(false)
  //modal
  const openAndFadeUserModalHandler = () => {
    setFadeUserModal((prevState) => !prevState)
  }
  const searchUserHandler = (event)=>{
    if(event.target.value.trim() !== null){
      dispatch(searchUsers(event.target.value))
    }
  }
  const removeUserHandler = (id)=>{
    swal({
      title: "آیا از حذف کاربر مطمئن هستید",
      icon: "warning",
      buttons: ["خیر","بله"],
    }).then((res)=> {
      if(res){
        dispatch(removeUsersFromServer(id))
        swal({
          title: "کاربر با موفقیت حذف شد",
          icon: "success",
          buttons: "تایید",
        })
      }
    })
  
   
  }
   const submitAddUserInfoHandler = (event)=>{
    event.preventDefault()
    dispatch(addUsersFromServer(newUserData)).then(() => {
      dispatch(getUsersFromServer()); 
  });
     openAndFadeUserModalHandler()
  }
  return (
    //modal
    <>
    <div
      className={FadeUserModal === false ? "modal " : "modal show-modal"}
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
              onClick={openAndFadeUserModalHandler}
            ></button>
          </div>

          <div className="modal-body position-relative">
            <form action="#" className="form row mx-0" onSubmit={(event) => submitAddUserInfoHandler(event)}>
              <div className="form__box-input col-12 px-2">
                <label htmlFor="firstname" className="mx-2 mt-4">
                  نام :
                </label>
                <span className="fa fa-user form__icon icon-name-article"></span>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  className="form-control form__input input-user-firstname"
                  onChange={(event) => newUserData.firstname = event.target.value}
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
                  required
                  id="lastname"
                  className="form-control form__input input-user-lastname"
                  onChange={(event) => newUserData.lastname = event.target.value}
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
                  required
                  id="username"
                  className="form-control form__input input-user-username"
                  onChange={(event) => newUserData.username = event.target.value}

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
                  required
                  id="email"
                  className="form-control form__input input-user-email"
                  onChange={(event) => newUserData.email = event.target.value}
                />

              </div>

              <div className="form__box-input col-12 px-2">
                <label htmlFor="city" className="mx-2 mt-4">
                  شهر :
                </label>
                <span className="fa fa-city form__icon"></span>
                <input
                  type="text"
                  name=""
                  id="city"
                  required
                  className="form-control form__input input-user-password"
                  onChange={(event) => newUserData.city = event.target.value}
                />

              </div>
              <div className="form__box-input col-12 px-2">
                <label htmlFor="age" className="mx-2 mt-4">
                  سن :
                </label>
                <span className="fa fa-user form__icon"></span>
                <input
                  type="number"
                  name=""
                  id="age"
                  required
                  className="form-control form__input input-user-password"
                  onChange={(event) => newUserData.age = event.target.value}
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
                  placeholder=""
                  id="courseCount"
                  className="form-control form__input input-user-product"
                  onChange={(event) => newUserData.courseCount = event.target.value}
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
    {/* modal end */}
    <div className="col-8 content px-0">
      <div className="content__wrapper overflow-hidden">
        <ul className="content__tabs">
          <li className="content__tab">
            <Link to="/users" className="content__tab-link active__navItem">
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
            <Link to="/articles" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </Link>
          </li>
        </ul>

        <div className="users">
          <form action="#" className="form row justify-content-between gap-3 mx-0">
            <div className="form__box-input col-8 px-0">
              <span className="fa fa-search form__icon form__icon-search userInfo"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="   نام کاربر را وارد کنید "
                className="form-control form__input"
                required
                onChange={(event)=> searchUserHandler(event)}
              />
            </div>
            <button type="reset" className="btn-custome btn-custome--gray col-3" onClick={()=>removeUserHandler(users[0]._id)}>
              حذف کاربر
            </button>
            <button type="reset" className="btn-custome btn-custome--gray col-3" onClick={()=>openAndFadeUserModalHandler()}>
             افزودن کاربر 
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">

              {users !== null ?
                users.map((user,index) => {
                  return <UserItem index = {index} key={crypto.randomUUID()} {...user} removeUserHandler = {removeUserHandler} />
                })
                : <RingLoader
                  color="#00acff"
                  cssOverride={{}}
                  loading
                  size={110}
                  speedMultiplier={1}
                  className='loader'
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
