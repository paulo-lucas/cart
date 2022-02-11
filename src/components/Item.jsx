import { useGlobalContext } from 'states/Global/Provider'
import { IcRemove, IcAdd, IcTrash } from 'assets/icons'

const Item = ({ product }) => {
  const { dispatch } = useGlobalContext()

  const handleRemove = () => {
    dispatch({
      type: 'removeItem',
      payload: { name: product.name }
    })
  }

  const handleUpdateQuantity = (qtt) => {
    dispatch({
      type: 'updateQuantity',
      payload: {
        name: product.name,
        qtt
      }
    })
  }

  return <li className="item">
    <div className="info">
      <h2>{product.name}</h2>
      <p>Qtt: {product.qtt}</p>
    </div>

    <div className="actions">
      <div className="quantity">
        <button onClick={() => handleUpdateQuantity(product.qtt - 1)}>
          <IcRemove className="action-icon" />
        </button>

        <button onClick={() => handleUpdateQuantity(product.qtt + 1)}>
          <IcAdd className="action-icon" />
        </button>
      </div>

      <button onClick={handleRemove}>
        <IcTrash className="action-icon" />
      </button>
    </div>
  </li>
}

export default Item