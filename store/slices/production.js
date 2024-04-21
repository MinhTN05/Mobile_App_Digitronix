import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductionService from '../../services/production';

export const fetchProduction = createAsyncThunk(
    'production/fetchProduction',
    async (data, thunkAPI) => {
        try {
            const response = await ProductionService.list(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const ProductionSlice = createSlice({
    name: 'Production',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduction.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchProduction.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
});

export const {} = ProductionSlice.actions;
export default ProductionSlice.reducer;