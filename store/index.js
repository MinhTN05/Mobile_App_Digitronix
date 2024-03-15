import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth';
import CategoryReducer from './slices/category';
import ProductReducer from './slices/product';

const store = configureStore({
    reducer: {
        Auth            : AuthReducer,
        Category        : CategoryReducer,
        Product         : ProductReducer,
    },
})

export default store

