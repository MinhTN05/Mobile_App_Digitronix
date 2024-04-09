import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth';
import CategoryReducer from './slices/category';
import ProductReducer from './slices/product';
import usernameReducer from './slices/username';
import RolesReducer from './slices/roles';
import MaterialReducer from './slices/material';

const store = configureStore({
    reducer: {
        Auth            : AuthReducer,
        Category        : CategoryReducer,
        Product         : ProductReducer,
        usernameReducer : usernameReducer,
        Roles           : RolesReducer,
        Material        : MaterialReducer
    },
})

export default store