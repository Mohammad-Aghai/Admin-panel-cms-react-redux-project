import React, { useEffect } from 'react'
import "./Users.css"
import { Link } from "react-router-dom"
import UserItem from "../../Components/UserItem/UserItem.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { addUsersFromServer, getUsersFromServer, removeUsersFromServer, searchUsers } from '../../Redux/store/users.js';
import RingLoader from "react-spinners/RingLoader"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.filteredUsers)
  useEffect(() => {
    dispatch(getUsersFromServer())
  }, [dispatch])
   
  const searchUserHandler = (event)=>{
    if(event.target.value.trim() !== null){
      dispatch(searchUsers(event.target.value))
    }
  }
  const removeUserHandler = (id)=>{
    dispatch(removeUsersFromServer(id))
   
  }
  const addUserHandler = ()=>{
    dispatch(addUsersFromServer())
    dispatch(getUsersFromServer())
  }
  return (
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
            <button type="reset" className="btn-custome btn-custome--gray col-3" onClick={()=>addUserHandler()}>
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
  )
}
