import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';  
import ProductService from '../../services/product';

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (data, thunkAPI) => {
        const respone = await ProductService.list(data)
        return respone.data
    }
  )

const ProductSlice = createSlice({
    name : 'Product',
    initialState : {
        items: [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
})

export const {} = ProductSlice.actions
export default ProductSlice.reducer