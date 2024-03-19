import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: ""
}

const username = createSlice({
  name: "usernameReducer",
  initialState,
  reducers: {
    SetUserName: (state, action) => {
        state.username = action.payload;
    }
  }
});

export const {SetUserName} = username.actions

export default username.reducer