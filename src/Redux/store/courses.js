import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCoursesFromServer = createAsyncThunk(
    "courses/getCoursesFromServer",
    async () => {
        return await axios.get('https://redux-cms.iran.liara.run/api/courses').then((response) => response.data);
    }
)
export const removeCourseFromServer = createAsyncThunk(
    "courses/removeCourseFromServer",
    async (id) => {
        return await axios.delete(`https://redux-cms.iran.liara.run/api/courses/${id}`).then((response) => response.data);

    }
)
export const addCourseToServer = createAsyncThunk(
    "courses/addCourseToServer",
    async (newCourse) => {
        return await axios.post(`https://redux-cms.iran.liara.run/api/courses/`, newCourse).then((response) => response.data);

    }
)
const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        courses: null,
        filteredCourses: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            state.courses = action.payload
            state.filteredCourses = action.payload
        })
        builder.addCase(getCoursesFromServer.rejected, (state, action) => {
            state.courses = [];
            state.filteredCourses = []
            alert("courses are not found something wrong with server")
        })
        builder.addCase(removeCourseFromServer.fulfilled, (state, action) => {
            state.courses = state.courses.filter((course) => course._id !== action.payload.id)
            state.filteredCourses = state.courses.filter((course) => course._id !== action.payload.id)
        })
        builder.addCase(removeCourseFromServer.rejected, (state, action) => {
            alert("remove process went error please try later!")
        })
        builder.addCase(addCourseToServer.fulfilled, (state, action) => {
            state.filteredCourses = [...state.courses];
        })
        builder.addCase(addCourseToServer.rejected, (state, action) => {
            alert("course is not added something wrong with server!")
        })
    }
})
export default coursesSlice.reducer