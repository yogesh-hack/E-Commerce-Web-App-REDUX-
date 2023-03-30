
const { createSlice ,createAsyncThunk} = require('@reduxjs/toolkit')

//! creatign an enum
// const STATUSES = {
//     IDLE : 'idle',
//     LOADING : 'loading',
//     ERROR : 'error',
// }
//! We don't want to to modify these Status objects in productSlices, so use this as (READ ONLY)
export const STATUSES = Object.freeze(
    {
        IDLE : 'idle',
        LOADING : 'loading',
        ERROR : 'error',
    }
)


const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        //! We create enums for better understand
        status : STATUSES.IDLE,
    },
    reducers : {
        // //! change the state
        // setProduct(state, action){
        //     //! Do not doing never 
        //     //* const res = await fetch('https://fakestoreapi.com/products')
        //     state.data = action.payload
        // },
        // setStatus(state, action){
        //     state.status = action.payload
        // }
    },
    extraReducers (builder) {
        builder
            .addCase(fetchedProducts.pending, (state, action) => {  
                state.status =  STATUSES.LOADING
            })
            .addCase(fetchedProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status =  STATUSES.IDLE
            })
            .addCase(fetchedProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
});

export const { setProduct, setStatus} = productSlice.actions;
export default productSlice.reducer


//! Thunks (middleware)

// thunk provided by redux toolkits
export const fetchedProducts = createAsyncThunk('product/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

// export const fetchedProducts = () => {
//     return async function fetchedProductsthunks(dispatch, getstate) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProduct(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }