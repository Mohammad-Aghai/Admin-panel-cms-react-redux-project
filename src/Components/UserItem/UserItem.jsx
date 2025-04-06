import React from 'react'
export default function UserItem({_id, username, email, index,removeUserHandler }) {
  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src= {`../../images/${index + 1}.jpg`}
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
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={()=>removeUserHandler(_id)}>حذف</button>
      </div>
    </div>
  )
}
