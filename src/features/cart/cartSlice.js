import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean Pizza',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32
  //   }
  // ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item) item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = []
    }
  }
})

export default cartSlice.reducer
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
// export const selectCart = (state) => state.cart.cart
// export const selectCartTotalPrice = (state) => state.cart.cart.totalPrice
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
