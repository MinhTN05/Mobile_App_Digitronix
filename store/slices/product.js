import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../services/product';

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (data, thunkAPI) => {
        const respone = await ProductService.list(data)
        return respone.data
    }
)

// export const fetchaddProduct = createAsyncThunk(
//     'addProduct/addProduct',
//     async (productData, thunkAPI) => {
//         try {
//             const response = await ProductService.add(productData);
//             return response.data;
//         } catch (error) {
//             console.error('Error adding product:', error);
//             throw error;
//         }
//     }
// );

const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                console.log(action.error.message);
            });
            // .addCase(fetchaddProduct.fulfilled, (state, action) => {
            //     state.items.push(action.payload);
            // })
            // .addCase(fetchaddProduct.rejected, (state, action) => {
            //     console.log(action.error.message);
            // });
    },
})

export const { } = ProductSlice.actions
export default ProductSlice.reducer