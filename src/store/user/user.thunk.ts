import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { getProducts, fetchWallets, login, getAllCardRequests } from "../../utils/API"
import { ILoginRequest, ILoginResponse, } from "../../utils/API.types"
import { RootState } from "../store";
import { loginSlice, setAuth, setProducts, setRequests, setWallets } from "./user.slice";
import axios from "axios";
import { storageKey } from "../../utils/axios";

export const userLogin = createAsyncThunk(
    'user/login',
    async (data: ILoginRequest, { dispatch }) => {
        try {
            const response = await login(data) as ILoginResponse;
            await dispatch(getUserProducts(response.id));
            localStorage.setItem(storageKey, JSON.stringify({ userId: response.id, token: response.auth_token, phone: data.phone, vcode: data.vcode }))
            dispatch(loginSlice(response));
            dispatch(setAuth({ isAuth: true }));
        } catch (error) {
            console.log((error as AxiosError).response?.data);
        }
    }
)

export const getUserProducts = createAsyncThunk<void, string>(
    "user/getProducts",
    async (userId: string, { dispatch, getState }) => {
        const responseData = await getProducts(userId);
        dispatch(setProducts(responseData));
    }
)

export const getWallets = createAsyncThunk<void, string, { state: RootState }>(
    "user/getWallets",
    async (userId: string, { dispatch, getState, rejectWithValue }) => {
        try {
            const response = await fetchWallets(userId);
            dispatch(setWallets(response.data));
        } catch (error) {
            if (!error) {
                throw error
            }

            return rejectWithValue(error)
        }
    }
)

export const getRequests = createAsyncThunk<void, string, { state: RootState }>(
    "user/getWallets",
    async (userId: string, { dispatch, getState, rejectWithValue }) => {
        const response = await getAllCardRequests(userId);
        dispatch(setRequests(response));
    }
)

export const checkAuth = createAsyncThunk<void, string, { state: RootState }>(
    "user/getWallets",
    async (userId: string, { dispatch, getState, rejectWithValue }) => {
        try {
            const userData = JSON.parse(localStorage.getItem(storageKey) || "{}");
            // await fetchWallets(userData?.userId);
            // dispatch(setAuth({ isAuth: true }));

            const response = await login({ phone: userData.phone, vcode: userData.vcode }) as ILoginResponse;
            await dispatch(getUserProducts(response.id));

            localStorage.setItem(storageKey, JSON.stringify({ userId: response.id, token: response.auth_token, phone: userData.phone, vcode: userData.vcode }))
            dispatch(loginSlice(response));
            dispatch(setAuth({ isAuth: true }));
        } catch (error) {
            console.log("Пользователь не авторизован")
        }
    }
)