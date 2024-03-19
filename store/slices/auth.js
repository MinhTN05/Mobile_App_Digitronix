import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth';

export const fetchAsyncLogin = createAsyncThunk(
    'auth/fetchAsyncLogin',
    async (data, thunkAPI) => {
        const respone = await AuthService.login(data)
        const userData = respone.data;
        return userData;
    }
)

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        token: [],
        isLogin: false,
        loginError: null,
        username: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
                const { token, username } = action.payload;
                AsyncStorage.setItem('access_token', token);
                AsyncStorage.setItem('username', username);
                return {
                    ...state,
                    token : token,
                    isLogin: true,
                    loginError: null,
                    username: username
                }
            })
            .addCase(fetchAsyncLogin.rejected, (state, action) => {
                state.loginError = action.error.message;
            });
    },
})

export const { } = authSlice.actions
export default authSlice.reducer