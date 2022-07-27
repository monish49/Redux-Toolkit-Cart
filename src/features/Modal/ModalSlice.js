import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isopen: false
}

const modalslice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openmodal: (state, action) => {
            state.isopen = true
        },
        closemodal: (state, aciton) => {
            state.isopen = false
        }
    }
})

export const { openmodal, closemodal } = modalslice.actions;

export default modalslice.reducer