import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RolesService from '../../services/roles';

export const fetchRoles = createAsyncThunk(
    'roles/fetchRoles',
    async (data, thunkAPI) => {
        try {
            const response = await RolesService.list(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const RolesSlice = createSlice({
    name: 'Roles',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoles.fulfilled, (state, action) => {
                //console.log('Roles fetched successfully:', action.payload);
                state.items = action.payload;
            })
            .addCase(fetchRoles.rejected, (state, action) => {
                console.log('Failed to fetch roles:', action.payload);
            });
    },
});

export const {} = RolesSlice.actions;
export default RolesSlice.reducer;