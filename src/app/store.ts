import { configureStore } from "@reduxjs/toolkit"
import balance from "../features/account/accountSlice"


// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config

export const store = configureStore({
  reducer: {
    balance
  }
})

// // Infer the type of `store`
// export type AppStore = typeof store
// // Infer the `AppDispatch` type from the store itself
// export type AppDispatch = AppStore["dispatch"]
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

