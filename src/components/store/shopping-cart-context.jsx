import {createContext} from "react";

export const ShoppingCartContext = createContext({
  items: [],
  handleAddItemToCart: () => {
  },
  handleUpdateCartItemQuantity: () => {
  },
})
