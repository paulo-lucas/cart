import GlobalProvider from 'states/Global/Provider'
import Cart from 'components/Cart'
import Nav from 'components/Nav'

function App() {
  return (
    <GlobalProvider>
      <Nav />
      <Cart />
    </GlobalProvider>
  )
}

export default App
