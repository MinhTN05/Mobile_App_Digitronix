import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductionService from '../../services/production';
import { createSlice } from '@reduxjs/toolkit';

export const fetchProductionDetail = createAsyncThunk(
    'productiondetail/fetchProductionDetail',
    async (id, thunkAPI) => {
      const response = await ProductionService.getDetail(id);
      return response.data;
    }
  );
  
  const ProductionDetailSlice  = createSlice({
    name: 'ProductionDetail',
    initialState: {
      items: [],
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductionDetail.fulfilled, (state, action) => {
          state.detail = action.payload;
        })
        .addCase(fetchProductionDetail.rejected, (state, action) => {
          console.log(action.error.message);
        });
    },
  });
  
  export const {} = ProductionDetailSlice .actions;
  export default ProductionDetailSlice .reducer;