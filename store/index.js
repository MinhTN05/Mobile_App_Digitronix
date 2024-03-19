import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth';
import CategoryReducer from './slices/category';
import ProductReducer from './slices/product';
import ProductImageReducer from './slices/product_Image';

const store = configureStore({
    reducer: {
        Auth            : AuthReducer,
        Category        : CategoryReducer,
        Product         : ProductReducer,
        ProductImage    : ProductImageReducer,
    },
})

export default store