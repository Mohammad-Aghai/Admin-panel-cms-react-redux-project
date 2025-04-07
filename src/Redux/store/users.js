import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersFromServer = createAsyncThunk(
    "users/geUsersFromServer",
    async () => {
        return await axios.get('https://redux-cms.iran.liara.run/api/users/').then((response) => response.data);

    }
)
export const removeUsersFromServer = createAsyncThunk(
    "users/removeUsersFromServer",
    async (id) => {
        return await axios.delete(`https://redux-cms.iran.liara.run/api/users/${id}`).then((response) => response.data);

    }
)
export const addUsersFromServer = createAsyncThunk(
    "users/addUsersFromServer",
    async (newUser) => {
        return await axios.post(`https://redux-cms.iran.liara.run/api/users/`,newUser).then((response) => response.data);

    }
)
const usersSlice = createSlice({
    name: "users",
    initialState: {
        users : null,
        filteredUsers : null
    },
    reducers: {
        searchUsers: (state, action) => { 
            const query = action.payload.toLowerCase()
            if(!query){
                state.filteredUsers = state.users
              
            }else{
               state.filteredUsers = state.users.filter((user) => {
                    return user.username.toLowerCase().includes(query)
                })
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) =>{
            state.users = action.payload
            state.filteredUsers = action.payload
        } )
        builder.addCase(getUsersFromServer.rejected, (state, action) => {
            state.users = [];
            state.filteredUsers = [];
            alert("users are not found something wrong!")
        })
        builder.addCase(removeUsersFromServer.fulfilled, (state, action) =>{
            state.users = state.users.filter((user)=> user._id !== action.payload.id)
            state.filteredUsers = state.users.filter((user)=> user._id !== action.payload.id)
        } )
        builder.addCase(removeUsersFromServer.rejected, (state, action) => {
            alert("remove process went error please try later!")
        })
        builder.addCase(addUsersFromServer.fulfilled, (state, action) =>{
            state.filteredUsers = [...state.users]; 
        } )
        builder.addCase(addUsersFromServer.rejected, (state, action) => {
            alert("users is not added something wrong with server!")
        })
    }
})
export const { searchUsers } = usersSlice.actions
export default usersSlice.reducer