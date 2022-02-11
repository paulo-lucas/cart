import { useGlobalContext } from 'states/Global/Provider'
import { IcCart } from 'assets/icons'

const Nav = () => {
  const { products } = useGlobalContext()

  const countProducts = () => {
    let count = 0
    products.forEach(product => count += product.qtt)
    return count
  }

  return <nav>
    <h1>SHOP</h1>
    <div className='cart-icon-wrapper'>
      <IcCart className="cart-icon" />
      <span>{countProducts()}</span>
    </div>
  </nav>
}

export default Nav