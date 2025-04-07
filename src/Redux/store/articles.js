import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getArticlesFromServer = createAsyncThunk(
    "articles/getArticlesFromServer",
    async () => {
        return await axios.get('https://redux-cms.iran.liara.run/api/articles').then((response) => response.data);

    }
)
export const removeArticleFromServer = createAsyncThunk(
    "articles/removeArticleFromServer",
    async (id) => {
        return await axios.delete(`https://redux-cms.iran.liara.run/api/articles/${id}`).then((response) => response.data);

    }
)
export const addArticleToServer = createAsyncThunk(
    "users/addArticleToServer",
    async (newArticle) => {
        return await axios.post(`https://redux-cms.iran.liara.run/api/articles/`, newArticle).then((response) => response.data);

    }
)
const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        articles: null,
        filteredArticles: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
            state.articles = action.payload
            state.filteredArticles = action.payload
        })
        builder.addCase(getArticlesFromServer.rejected, (state, action) => {
            state.articles = [];
            state.filteredArticles = [];
            alert("articles are not found something wrong with server")
        })
        builder.addCase(removeArticleFromServer.fulfilled, (state, action) => {
            state.articles = state.articles.filter((article) => article._id !== action.payload.id)
            state.filteredArticles = state.articles.filter((article) => article._id !== action.payload.id)
        })
        builder.addCase(removeArticleFromServer.rejected, (state, action) => {
            alert("remove process went error please try later!")
        })
        builder.addCase(addArticleToServer.fulfilled, (state, action) => {
            state.filteredArticles = [...state.articles];
        })
        builder.addCase(addArticleToServer.rejected, (state, action) => {
            alert("article is not added something wrong with server!")
        })
    }
})
export default articlesSlice.reducer