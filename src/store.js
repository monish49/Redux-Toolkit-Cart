// Reducer from the createSlice is passed as an argument to the configureStore(store)
// then the store value is passed in the provider store property
// then using the useSelector the whole state of the store can be accessed by any file 

import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import cartReducer from './features/cart/cart'
import modalReducer from './features/Modal/ModalSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})