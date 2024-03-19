import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';  
import ProductImageService from '../../services/product_Image';

export const fetchProductImage = createAsyncThunk(
    'productImage/fetchProductImage',
    async (data, thunkAPI) => {
        const respone = await ProductImageService.list(data)
        return respone.data
    }
  )

  const ProductImageSlice = createSlice({
    name: 'ProductImage',
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    reducers: {
      fetchProductImageStart(state) {
        state.loading = true;
        state.error = null;
      },
      fetchProductImageSuccess(state, action) {
        state.loading = false;
        state.items = action.payload; // Assuming payload is the array of image data
      },
      fetchProductImageFailure(state, action) {
        state.loading = false;
        state.error = action.payload; // Assuming payload is the error message
      },
    },
  });

  export const { fetchProductImageStart, fetchProductImageSuccess, fetchProductImageFailure } = ProductImageSlice.actions;
export default ProductImageSlice.reducer