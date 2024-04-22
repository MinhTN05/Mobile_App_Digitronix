import { createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../services/order';
import { createSlice } from '@reduxjs/toolkit';

export const fetchOrderDetail = createAsyncThunk(
    'orderdetail/fetchOrderDetail',
    async (id, thunkAPI) => {
      const response = await OrderService.getDetail(id);
      return response.data;
    }
  );
  
  const OrderDetailSlice  = createSlice({
    name: 'OrderDetail',
    initialState: {
      items: [],
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchOrderDetail.fulfilled, (state, action) => {
          state.detail = action.payload;
        })
        .addCase(fetchOrderDetail.rejected, (state, action) => {
          console.log(action.error.message);
        });
    },
  });
  
  export const {} = OrderDetailSlice .actions;
  export default OrderDetailSlice .reducer;