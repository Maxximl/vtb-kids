import { createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts, fetchWallets, login, getAllCardRequests } from "../../utils/API"
import { ILoginRequest, ILoginResponse, IProductRequest } from "../../utils/API.types"
import { RootState } from "../store";
import userSlice, { loginSlice, setProducts, setRequests, setWallets } from "./user.slice";

export const userLogin = createAsyncThunk<void, ILoginRequest, {}>(
    'user/login',
    async (data: ILoginRequest, thunkApi) => {
        const responseData = await login(data);
        thunkApi.dispatch(loginSlice(responseData));
        return responseData;
    }
)

export const getUserProducts = createAsyncThunk<void, string, { state: RootState }>(
    "user/getProducts",
    async (userId: string, { dispatch, getState }) => {
        const state = getState();
        const responseData = await getProducts(userId, state.user.auth_token);
        dispatch(setProducts(responseData));
    }
)

export const getWallets = createAsyncThunk<void, string, { state: RootState }>(
    "user/getWallets",
    async (userId: string, { dispatch, getState, rejectWithValue }) => {
        try {
            const state = getState();
            const response = await fetchWallets(userId, state.user.auth_token);
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
        const state = getState();
        const response = await getAllCardRequests(userId, state.user.auth_token);
        dispatch(setRequests(response));
    }
)