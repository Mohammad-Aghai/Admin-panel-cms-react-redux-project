import { createSlice } from "@reduxjs/toolkit";

const adminInfoSlice = createSlice({
    name: "adminInfo",
    initialState: 
        {
            firstName: "محمد ",
            lastName: "آقائی",
            fullName: "محمد آقائی",
            email: "MohamadAghai1381@email.com",
            job : "Front-end Engineer",
            password: "1381",
            profile: "../../images/profileImage.webp",
            banner: "../../images/background.webp",
            courseCount : 12
        },
        reducers:{
            changeAdminInfo: (state,action)=>{
                const newAdminInfo = {
                    firstName: action.payload.firstName,
                    lastName:  action.payload.lastName,
                    fullName: action.payload.fullName,
                    email: action.payload.email,
                    job : action.payload.job,
                    password: action.payload.password,
                    profile: action.payload.profile,
                    banner: action.payload.banner,
                    courseCount : action.payload.courseCount
                }
                return newAdminInfo
            }
        }
})
export const {changeAdminInfo} = adminInfoSlice.actions
export default adminInfoSlice.reducer