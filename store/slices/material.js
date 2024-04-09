import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';  
import MaterialService from '../../services/material';

export const fetchMaterial = createAsyncThunk(
    'material/fetchMaterial',
    async (data, thunkAPI) => {
        const respone = await MaterialService.list(data)
        return respone.data
    }
  )

const MaterialSlice = createSlice({
    name : 'Material',
    initialState : {
        items: [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaterial.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchMaterial.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
})

export const {} = MaterialSlice.actions
export default MaterialSlice.reducer