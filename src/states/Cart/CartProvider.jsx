import React, { createContext, useContext } from 'react'
import { useCartReducer } from './CartReducer'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

function CartProvider(props) {
  const [state, dispatch] = useCartReducer()

  const data = { state, dispatch }

  return <CartContext.Provider value={data} {...props} />
}

export default CartProvider