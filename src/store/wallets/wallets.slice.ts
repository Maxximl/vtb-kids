import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchWallets1 } from './wallets.thunk'
import { IAddWallet, IAddWallets, IRemoveWallet, IWalletsState } from './wallets.types'


const initialState: IWalletsState = {
    wallets: [],
    status: "idle",
    error: null,
}

export const walletsSlice = createSlice({
    name: 'wallets',
    initialState,
    reducers: {
        addWallet: (state, action: PayloadAction<IAddWallet>) => {
            state.wallets.push(action.payload.wallet)
        },
        addWallets: (state, action: PayloadAction<IAddWallets>) => {
            state.wallets = action.payload.wallets;
        },
        removeWallet: (state, action: PayloadAction<IRemoveWallet>) => {
            state.wallets = state.wallets.filter(walletItem => walletItem.id !== action.payload.wallet.id);
        },
    },
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchWallets1.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchWallets1.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.wallets = payload;
                state.status = "idle";
            });

        // When a server responses with an error:
        builder.addCase(fetchWallets1.rejected,
            (state, { payload }) => {
                // We show the error message
                // and change `status` back to `idle` again.
                if (payload) state.error = payload.message;
                state.status = "idle";
            });
    },
})

// Action creators are generated for each case reducer function
export const { addWallet, removeWallet, addWallets } = walletsSlice.actions

export default walletsSlice.reducer