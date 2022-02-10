import { useCartContext } from 'states/Cart/CartProvider'
import { IcRemove, IcAdd, IcTrash } from 'assets/icons'

const Item = ({ product }) => {
  const { dispatch } = useCartContext()

  const remove = () => {
    dispatch({
      type: 'remove',
      payload: { id: product.id }
    })
  }

  const updateQuantity = (quantity) => {
    dispatch({
      type: 'updateQuantity',
      payload: {
        id: product.id,
        quantity
      }
    })
  }

  return <li className="item">
    <p>{product.name}</p>
    <p>Qtt: {product.quantity}</p>

    <div className="actions">
      <button onClick={() => updateQuantity(product.quantity - 1)}>
        <IcRemove className="action-icon" />
      </button>

      <button onClick={() => updateQuantity(product.quantity + 1)}>
        <IcAdd className="action-icon" />
      </button>

      <button onClick={() => remove()}>
        <IcTrash className="action-icon" />
      </button>
    </div>
  </li>
}

export default Item