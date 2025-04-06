import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getArticlesFromServer = createAsyncThunk(
    "articles/getArticlesFromServer",
    async (url) => {
        return await axios.get(url).then((response) => response.data);

    }
)

const articlesSlice = createSlice({
    name: "articles",
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => action.payload)
        builder.addCase(getArticlesFromServer.rejected, (state, action) => {
            state = [];
            alert("articles are not found something wrong with server")
        })

    }
})
export default articlesSlice.reducer