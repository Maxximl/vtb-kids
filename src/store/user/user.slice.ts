import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, ISetProducts, IUserState } from './user.types'


const initialState: IUserState = {
    auth_token: "",
    display_name: "",
    id: "",
    products: []
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
        }
        // logout: (state, action: PayloadAction<IAddWallets>) => {
        //     state.wallets = action.payload.wallets;
        // },
    }
})

// Action creators are generated for each case reducer function
export const { loginSlice, setProducts } = userSlice.actions

export default userSlice.reducer