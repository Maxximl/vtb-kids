import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import walletsReducer from './wallets/wallets.slice';
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    wallets: walletsReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;