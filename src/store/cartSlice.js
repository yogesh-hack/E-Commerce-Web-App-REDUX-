const { createSlice } = require('@reduxjs/toolkit')

const initialState = [];

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        //! change the state
        addToCart(state, action){
            state.push(action.payload);
        },
        removeFromCart(state, action){
            return state.filter(item => item.id !== action.payload)
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
