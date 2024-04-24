import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import WorkerService from '../../services/worker';

export const fetchWorker = createAsyncThunk(
    'worker/fetchWorker',
    async (data, thunkAPI) => {
        try {
            const response = await WorkerService.list(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const WorkerSlice = createSlice({
    name: 'Worker',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorker.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchWorker.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
});

export const {} = WorkerSlice.actions;
export default WorkerSlice.reducer;