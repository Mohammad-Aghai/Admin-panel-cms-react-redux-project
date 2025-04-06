import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./store/users"
import articlesReducer from "./store/articles"
import coursesReducer  from "./store/courses"
import adminInfoReducer from "./store/adminInfo"
export const store = configureStore({
    reducer: {
        users: usersReducer,
        articles: articlesReducer,
        courses: coursesReducer,
        adminInfo : adminInfoReducer
    }
})
