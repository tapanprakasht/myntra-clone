import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface WishlistState {
    wishlistItems: string[];
}

const initialState: WishlistState = {
    wishlistItems: []
}

const wishlistReducer = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlistItem: (state, action: PayloadAction<string> ) => {
            state.wishlistItems = [...state.wishlistItems, action.payload];
        },
        removeWishlistItem: (state, action: PayloadAction<string>) => {
            state.wishlistItems = state.wishlistItems.filter(item => item !== action.payload);
        }
    }
});

export const { addWishlistItem, removeWishlistItem } = wishlistReducer.actions;
export const selectWishlistItems = (state: RootState) => state.wishlist.wishlistItems;

export default wishlistReducer.reducer;