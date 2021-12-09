import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios";
import { FetchWalletsError, IWallet } from "./wallets.types";

export const fetchWallets = createAsyncThunk<IWallet[], number, { rejectValue: FetchWalletsError }>(
    "wallets/fetch",
    async (limit: number, thunkApi) => {
        // Fetch the backend endpoint:
        const response = await API.get("/");
        if (response.status !== 200) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch todos."
            });
        }

        // Get the JSON from the response:
        const data: IWallet[] = response.data;

        // Return result:
        return data;
    }
);

