import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/users/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})

export default store
