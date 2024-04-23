import { createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/delivery';
import { createSlice } from '@reduxjs/toolkit';

export const fetchDeliveryDetail = createAsyncThunk(
    'deliverydetail/fetchDeliveryDetail',
    async (id, thunkAPI) => {
      const response = await DeliveryService.getDetail(id);
      return response.data;
    }
  );
  
  const DeliveryDetailSlice  = createSlice({
    name: 'DeliveryDetail',
    initialState: {
      items: [],
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDeliveryDetail.fulfilled, (state, action) => {
          state.detail = action.payload;
        })
        .addCase(fetchDeliveryDetail.rejected, (state, action) => {
          console.log(action.error.message);
        });
    },
  });
  
  export const {} = DeliveryDetailSlice .actions;
  export default DeliveryDetailSlice .reducer;