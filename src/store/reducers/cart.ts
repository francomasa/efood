import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurantes } from '../../pages/Home'
import { Cardapio } from '../../components/Product'

type cartState = {
  items: Restaurantes[]
  isOpen: boolean
}

const initialState: cartState = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const cardapio = state.items.find((item) =>
        item.cardapio.map((object) => {
          console.log(object)
          object.id === action.payload.id
        })
      )
      if (cardapio) {
        console.log(cardapio)
        state.items.push(cardapio)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
