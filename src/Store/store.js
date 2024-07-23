import { configureStore } from "@reduxjs/toolkit"
import bagSlice from "./Slices/bagSlice"
import authSlice from "./Slices/authSlice"

const store = configureStore({
    reducer: {
        bag: bagSlice,
        auth: authSlice.reducer,
    }
})

export default store