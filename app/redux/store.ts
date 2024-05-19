import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teamsSlice';

const store = configureStore({
    reducer: teamsReducer,
});

export default store;
