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

export const updateDelivery = createAsyncThunk(
    'delivery/updateDelivery',
    async ({ id, delivery_date, status, order_id }, thunkAPI) => {
        try {
            await DeliveryService.updateDeliveryDetails(id, { delivery_date, status, order_id });
            return { id, delivery_date, status, order_id };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const DeliverySlice = createSlice({
    name: 'Delivery',
    initialState: {
        item: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDeliveries.fulfilled, (state, action) => {
                state.item = action.payload;
            })
            .addCase(fetchDeliveries.rejected, (state, action) => {
                console.log(action.error.message);
            })
            // Cập nhật hành động khi thực hiện thành công
            .addCase(updateDelivery.fulfilled, (state, action) => {
                const updateDelivery = action.payload;
                const index = state.item.findIndex(delivery => delivery.id === updateDelivery.id);
                if (index !== -1) {
                    state.item[index] = updateDelivery;
                }
            })
            // Xử lý khi có lỗi xảy ra trong quá trình thực thi
            .addCase(updateDelivery.rejected, (state, action) => {
                console.log("Update delivery error:", action.error.message); // In ra thông điệp lỗi
            });
    },
});

export const { } = DeliverySlice.actions;
export default DeliverySlice.reducer;