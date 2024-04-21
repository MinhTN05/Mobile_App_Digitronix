import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DeliveryService from '../../services/delivery';

export const fetchDeliveries = createAsyncThunk(
    'delivery/fetchDeliveries',
    async (data, thunkAPI) => {
        try {
            const response = await DeliveryService.list();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const DeliverySlice = createSlice({
    name: 'Delivery',
    initialState: {
        deliveries: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDeliveries.fulfilled, (state, action) => {
                state.deliveries = action.payload;
            })
            .addCase(fetchDeliveries.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
});

export const {} = DeliverySlice.actions;
export default DeliverySlice.reducer;