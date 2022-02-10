import React from 'react'
import { useCartContext } from 'states/Cart/CartProvider'

import cartIcon from 'assets/icons/cart.svg'

const Nav = () => {
  const { state: { products } } = useCartContext()

  return <nav>
    <h1>SHOP</h1>
    <div className='cart-icon-wrapper'>
      <img src={cartIcon} alt="Cart" />
      <span>{products.length}</span>
    </div>
  </nav>
}

export default Nav