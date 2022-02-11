import { createContext, useContext } from 'react'
import { useGlobalReducer } from './Reducer'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = (props) => {
  const [state, dispatch] = useGlobalReducer()

  const data = { products: state, dispatch }

  return <GlobalContext.Provider value={data} {...props} />
}

export default GlobalProvider