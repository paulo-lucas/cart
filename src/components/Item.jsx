import { useCartContext } from 'states/Cart/CartProvider'
import removeIcon from 'assets/icons/remove.svg'
import addIcon from 'assets/icons/add.svg'
import trashIcon from 'assets/icons/trash.svg'

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

  return <li>
    <p>{product.name}</p>
    <p>Qtt: {product.quantity}</p>

    <div className="actions">
      <button onClick={() => updateQuantity(product.quantity - 1)}>
        <img src={removeIcon} alt="Remove" />
      </button>

      <button onClick={() => updateQuantity(product.quantity + 1)}>
        <img src={addIcon} alt="Add" />
      </button>

      <button onClick={() => remove()}>
        <img src={trashIcon} alt="Delete" />
      </button>
    </div>
  </li>
}

export default Item