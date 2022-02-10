import React from 'react'
import CartProvider from 'states/Cart/CartProvider'

import Cart from 'components/Cart'
import Nav from 'components/Nav'

function App() {
  return (
    <CartProvider>
      <Nav />
      <Cart />
    </CartProvider>
  )
}

export default App
