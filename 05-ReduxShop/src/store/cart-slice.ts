import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type CartItem = {
    id: string
    title: string
    price: number
    quantity: number
}
type CartState = { items: CartItem[] }

const initialState: CartState = { items: [] }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<
            {id: string, title: string, price: number}
        >) {
            const itemIdx = state.items.findIndex(item => item.id === action.payload.id)
        
            if (itemIdx >= 0) { state.items[itemIdx].quantity++ }
            else { state.items.push({ ...action.payload, quantity: 1 }) }
        },

        removeFromCart (state, action: PayloadAction<string>) {
            const itemIdx = state.items.findIndex(item => item.id === action.payload)
            
            if (state.items[itemIdx].quantity === 1) { state.items.splice(itemIdx, 1) }
            else { state.items[itemIdx].quantity-- }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions