'use client';

import { createSlice , PayloadAction }  from "@reduxjs/toolkit";
import { Product } from "@/lib/types";


interface CartItem extends Product{
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
    name :"cart",
    initialState,
    reducers :{
        addItem( state,action:PayloadAction<CartItem>){
           const item = state.items.find(
            i=>i.id === action.payload.id)
            if(item)item.quantity++;
            else state.items.push({...action.payload,quantity :1})  
        },
      increment(state, action: PayloadAction<string>) {
      const item = state.items.find(i =>i.id === action.payload);
      if (item) item.quantity++;
    },

    decrement(state, action: PayloadAction<string>) {
      const item = state.items.find(i =>i.id === action.payload);
      if (item && item.quantity >1) item.quantity--;
      else state.items = state.items.filter(i =>i.id !== action.payload);
    },
    clearCart(state) {
  state.items = [];
    },
    removeItem(state, action: PayloadAction<string>) {
  state.items = state.items.filter(i => i.id !== action.payload);
},
  }
})

export const { addItem, increment , decrement ,clearCart  ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
