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

// Thêm mã lỗi vào phần .rejected của hàm updateWorker
export const updateWorker = createAsyncThunk(
    'worker/updateWorker',
    async ({ id, name, in_material_quantity, time_start, status, cost, user_id, process_detail_id, production_id, out_quantity }, thunkAPI) => {
        try {
            await WorkerService.updateProductionDetails(id, { name, in_material_quantity, time_start, status, cost, user_id, process_detail_id, production_id, out_quantity });
            return { id, name, in_material_quantity, time_start, status, cost, user_id, process_detail_id, production_id, out_quantity };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Trả về thông điệp lỗi
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
            })
            // Cập nhật hành động khi thực hiện thành công
            .addCase(updateWorker.fulfilled, (state, action) => {
                const updatedWorker = action.payload;
                const index = state.items.findIndex(worker => worker.id === updatedWorker.id);
                if (index !== -1) {
                    state.items[index] = updatedWorker;
                }
            })
            // Xử lý khi có lỗi xảy ra trong quá trình thực thi
            .addCase(updateWorker.rejected, (state, action) => {
                console.log("Update worker error:", action.error.message); // In ra thông điệp lỗi
            });
    },
});

export default WorkerSlice.reducer;