import type { CartItem } from "../model/CartItem";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[]
}

const initialState : GadgetState = {
    cart: []
}
//addtocart => {type: "addToCart", payload: cartItem }
//removeItem => {type: "removeItem", productId: number }
//clearCart => {type: "clearCart" } 

// export const gadgetReducer = (state = initialState, action) => {

//     if(action.type === "addToCart" && action.payload) {

//         const cart = [...state.cart]
//         cart.push(action.payload);
//         return {
//             cart : cart
//         }
//     }

//     return state;
// }

const slice = createSlice({
    name: "gadgetSlice",
    initialState,
    reducers: {
        //(parameter) state: WritableNonArrayDraft<GadgetState>  - this type of mutable state

        addToCart: (state, action: PayloadAction<CartItem>) => {
            //state.cart.push(action.payload);
            const index = state.cart.findIndex(item => item.product?.id === action.payload.product?.id);
            if(index !== -1){
                state.cart[index].quantity = (state.cart[index].quantity || 0) + (action.payload.quantity || 1);

            } else {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(item => item.product?.id === action.payload);
            if(index !== -1){
                state.cart.splice(index,1);
            }
            // } else {
            //     state.cart[index].quantity += action.payload.quantity ?? 1;
            // }
        },
        clearCart: (state) => {
            state.cart.splice(0, state.cart.length);
        }
    }
})

//action creators
export const {addToCart, removeFromCart, clearCart} = slice.actions;
export const gadgetReducer = slice.reducer;