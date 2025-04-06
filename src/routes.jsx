import React from "react"
import Users from "./pages/Users/Users"
import UserInfo from "./pages/UserInfo/UserInfo"
import Courses from "./pages/Courses/Courses"
import Articles from "./pages/Articles/Articles"
const routes = [
    {path : "/", element : <Users/>},
    {path : "/users", element : <Users/>},
    {path : "/userInfo", element : <UserInfo/>},
    {path : "/courses", element : <Courses/>},
    {path : "/articles", element : <Articles/>},
]
export default routes