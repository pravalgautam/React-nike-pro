import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id 
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 })
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    },

updateQuantity: (state, action) => {
  const { id, quantity } = action.payload
  const item = state.cartItems.find((item) => item.id === id)
  if (item) {
    item.quantity = quantity
  }

  state.totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

    },
removeFromCart: (state, action) => {
  const idToRemove = action.payload
  state.cartItems = state.cartItems.filter(item => item.id !== idToRemove)

  // Update total
  state.totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
},


    clearCart: (state) => {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
