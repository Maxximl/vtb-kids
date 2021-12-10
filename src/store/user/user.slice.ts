import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, ISetAuth, ISetProducts, ISetRequests, ISetWallets, IUserState } from './user.types'


const initialState: IUserState = {
    auth_token: "",
    display_name: "",
    id: "",
    products: [],
    wallets: [],
    requests: [],
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSlice: (state, action: PayloadAction<ILogin>) => {
            const { auth_token, display_name, id } = action.payload;
            state.auth_token = auth_token;
            state.display_name = display_name;
            state.id = id;
        },
        setProducts: (state, action: PayloadAction<ISetProducts>) => {
            const { products } = action.payload;
            state.products = products;
        },
        setWallets: (state, action: PayloadAction<ISetWallets>) => {
            const { wallets } = action.payload;
            state.wallets = wallets;
        },
        setRequests: (state, action: PayloadAction<ISetRequests>) => {
            const { requests } = action.payload;
            state.requests = requests;
        },
        setAuth: (state, action: PayloadAction<ISetAuth>) => {
            state.isAuth = action.payload.isAuth;
        }
    }
})

// Action creators are generated for each case reducer function
export const { loginSlice, setProducts, setWallets, setRequests, setAuth } = userSlice.actions

export default userSlice.reducer