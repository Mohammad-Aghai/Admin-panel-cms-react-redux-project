import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCoursesFromServer = createAsyncThunk(
    "courses/getCoursesFromServer",
    async (url) => {
        return await axios.get(url).then((response) => response.data);
    }
)

const coursesSlice = createSlice({
    name: "courses",
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => action.payload)
        builder.addCase(getCoursesFromServer.rejected, (state, action) => {
            state = [];
            alert("courses are not found something wrong with server")
        })
    }
})
export default coursesSlice.reducer