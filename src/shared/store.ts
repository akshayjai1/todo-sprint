import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { modalReducer } from './modalSlice';
export const store = configureStore({
  reducer: { todoReducer, modalReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
