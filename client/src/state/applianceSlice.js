import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
 }

export const applianceSlice = createSlice({
    name: 'appliance',
    initialState,
    reducers: {
        add:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        edit:(state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        }
    }
})

export const {add,edit} = applianceSlice.actions

export default applianceSlice.reducer