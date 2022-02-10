import React from 'react'
import { useCartContext } from 'states/Cart/CartProvider'

import { IcCart } from 'assets/icons'

const Nav = () => {
  const { state: { products } } = useCartContext()

  return <nav>
    <h1>SHOP</h1>
    <div className='cart-icon-wrapper'>
      <IcCart className="cart-icon" />
      <span>{products.length}</span>
    </div>
  </nav>
}

export default Nav