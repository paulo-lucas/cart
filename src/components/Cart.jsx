import React, { useState } from 'react'
import { useCartContext } from 'states/Cart/CartProvider'
import Item from 'components/Item'

const Cart = () => {
  const { state: { products }, dispatch } = useCartContext()
  const [itemName, setItemName] = useState('')

  const add = () => {
    itemName && dispatch({
      type: 'add',
      payload: { name: itemName }
    })
    setItemName('')
  }

  return <main>
    <h2>Your Cart</h2><div className='new-item-wrapper' >
      <input
        type='text'
        placeholder='New item'
        id='item-name' value={itemName}
        onChange={e => setItemName(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
    <div className='cart' >
      <ul>
        {products.map(product => <Item product={product} key={product} />)}
      </ul>
    </div>
  </main>
}

export default Cart