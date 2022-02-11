import { useState } from 'react'
import { useGlobalContext } from 'states/Global/Provider'
import Item from 'components/Item'

const Cart = () => {
  const [newItem, setNewItem] = useState('')
  const { products, dispatch } = useGlobalContext()

  const handleAdd = () => {
    newItem && dispatch({
      type: 'addItem',
      payload: { name: newItem }
    })
    setNewItem('')
  }

  return <main>
    <h2>Your Cart</h2>
    <div className='new-item-wrapper' >
      <input
        placeholder='New item'
        id='item-name'
        value={newItem}
        onChange={e => setNewItem(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
    <div className='cart' >
      <ul>
        {products.map((product, idx) => (
          <Item
            key={idx}
            product={product}
          />
        ))}
      </ul>
    </div>
  </main>
}

export default Cart