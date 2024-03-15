import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';  
import CategoryService from '../../services/category';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (data, thunkAPI) => {
        const respone = await CategoryService.list(data)
        return respone.data
    }
  )

const CategorySlice = createSlice({
    name : 'Category',
    initialState : {
        items: [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
})

export const {} = CategorySlice.actions
export default CategorySlice.reducer


