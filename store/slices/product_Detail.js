import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../services/product';
import { createSlice } from '@reduxjs/toolkit';

export const fetchProductDetail = createAsyncThunk(
  'productdetail/fetchProductDetail',
  async (id, thunkAPI) => {
    const response = await ProductService.getDetail(id);
    return response.data;
  }
);

const ProductDetailSlice  = createSlice({
  name: 'ProductDetail',
  initialState: {
    items: [],
    detail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = ProductDetailSlice .actions;
export default ProductDetailSlice .reducer;