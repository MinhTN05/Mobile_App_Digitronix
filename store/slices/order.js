import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../services/order';

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (data, thunkAPI) => {
        try {
            const response = await OrderService.list(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const OrderSlice = createSlice({
    name: 'Order',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
});

export const {} = OrderSlice.actions;
export default OrderSlice.reducer;