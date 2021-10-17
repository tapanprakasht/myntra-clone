import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../reducers/filter/filterSlice';
import wishlistReducer from '../reducers/wishlistSlice';

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        wishlist: wishlistReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;