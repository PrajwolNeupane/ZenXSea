import { configureStore } from '@reduxjs/toolkit';
import ModeSlice from './State Management/ModeSlice.js';

export const Store = configureStore({
    reducer: {
        Mode:ModeSlice
    }, middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});