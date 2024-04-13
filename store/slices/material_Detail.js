import { createAsyncThunk } from '@reduxjs/toolkit';
import MaterialService from '../../services/material';
import { createSlice } from '@reduxjs/toolkit';

export const fetchMaterialDetail = createAsyncThunk(
  'materialdetail/fetchMaterialDetail',
  async (id, thunkAPI) => {
    const response = await MaterialService.getDetail(id);
    return response.data;
  }
);

const MaterialDetailSlice  = createSlice({
  name: 'MaterialDetail',
  initialState: {
    items: [],
    detail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterialDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
      .addCase(fetchMaterialDetail.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = MaterialDetailSlice .actions;
export default MaterialDetailSlice .reducer;