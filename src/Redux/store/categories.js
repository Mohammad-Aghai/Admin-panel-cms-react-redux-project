import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategoriesFromServer = createAsyncThunk(
    "categories/getCategoriesFromServer",
    async () => {
        return await axios.get('https://redux-cms.iran.liara.run/api/categories/').then((response) => response.data);
    }
)
export const addCategoryToServer = createAsyncThunk(
    "categories/addCategoryToServer",
    async (newCategory) => {
        return await axios.post(`https://redux-cms.iran.liara.run/api/categories/`, newCategory).then((response) => response.data);

    }
)
const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: null,
        filteredCategories: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesFromServer.fulfilled, (state, action) => {
            state.categories = action.payload
            state.filteredCategories = action.payload
        })
        builder.addCase(getCategoriesFromServer.rejected, (state, action) => {
            state.categories = [];
            state.filteredCategories = []
            alert("categories are not found something wrong with server")
        })
        builder.addCase(addCategoryToServer.fulfilled, (state, action) => {
            state.filteredCategories = [...state.categories];
        })
        builder.addCase(addCategoryToServer.rejected, (state, action) => {
            alert("category is not added something wrong with server!")
        })
    }
})
export default categoriesSlice.reducer