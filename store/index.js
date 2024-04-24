import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth';
import CategoryReducer from './slices/category';
import ProductReducer from './slices/product';
import usernameReducer from './slices/username';
import RolesReducer from './slices/roles';
import MaterialReducer from './slices/material';
import ProductionReducer from './slices/production';
import DeliveryReducer from './slices/delivery';
import OrderReducer from './slices/order';
import WorkerReducer from './slices/worker';

const store = configureStore({
    reducer: {
        Auth            : AuthReducer,
        Category        : CategoryReducer,
        Product         : ProductReducer,
        usernameReducer : usernameReducer,
        Roles           : RolesReducer,
        Material        : MaterialReducer,
        Production      : ProductionReducer,
        Delivery        : DeliveryReducer,
        Order           : OrderReducer,
        Worker          : WorkerReducer,
    },
})

export default store