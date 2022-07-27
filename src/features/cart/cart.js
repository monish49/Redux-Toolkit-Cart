// createslice creates a reducer ( which has to be passed to the store )

import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearcart: (state) => {     //  in the createSlice we created our reducer to empty the array
            state.cartItems = []
        },
        removeItem: (state, action) => {
            console.log(action);
            const Itemid = action.payload      //   because action has type and playload property and id is stored in payload
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== Itemid
            )
        },
        increaseItem: (state, { payload }) => {
            console.log(payload)
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.amount = cartItem.amount + 1
        },
        decreaseItem: (state, { payload }) => {
            console.log(payload)
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculatetotal: (state) => {
            let total = 0;
            let amount = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.price * item.amount
            })
            state.amount = amount
            state.total = total
        }
    }
});

console.log(cartSlice);
// when we console the reducer is seen in the conosle
// console.log("this is from cart file")

export const { clearcart, removeItem, increaseItem, decreaseItem, calculatetotal } = cartSlice.actions;

export default cartSlice.reducer