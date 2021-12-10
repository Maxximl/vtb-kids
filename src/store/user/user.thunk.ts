import { createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts, fetchWallets, login } from "../../utils/API"
import { ILoginRequest, ILoginResponse, IProductRequest } from "../../utils/API.types"
import userSlice, { loginSlice, setProducts, setWallets } from "./user.slice";

export const userLogin = createAsyncThunk<void, ILoginRequest, {}>(
    'user/login',
    async (data: ILoginRequest, thunkApi) => {
        const responseData = await login(data);
        thunkApi.dispatch(loginSlice(responseData));
    }
)

export const getUserProducts = createAsyncThunk<void, string, {}>(
    "user/getProducts",
    async (userId: string, { dispatch }) => {
        const responseData = await getProducts(userId);
        dispatch(setProducts(responseData));
    }
)

export const getWallets = createAsyncThunk<void, string, {}>(
    "user/getWallets",
    async (userId: string, { dispatch }) => {
        const responseData = await fetchWallets(userId);
        dispatch(setWallets(responseData));
    }
)