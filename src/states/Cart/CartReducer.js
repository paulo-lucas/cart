import { useReducer } from 'react'

const initialState = {
  uniqueId: 2,
  products: [
    {
      id: 0,
      name: 'Foo',
      quantity: 1
    },
    {
      id: 1,
      name: 'Bar',
      quantity: 2
    }
  ]
}

const actions = {
  add: (state, { payload }) => {
    const { name } = payload
    const newProduct = {
      id: state.uniqueId,
      name,
      quantity: 1
    }

    const newState = {
      uniqueId: ++state.uniqueId,
      products: [...state.products, newProduct]
    }

    return newState
  },
  remove: (state, { payload }) => {
    const { id } = payload
    const newProductsList = state.products.filter(item => item.id !== id)

    const newState = { ...state, products: newProductsList }

    return newState
  },
  updateQuantity: (state, { payload }) => {
    const { id, quantity } = payload

    if (quantity < 0)
      return state

    const newProductsList = state.products.map(item => {
      return item.id === id ? { ...item, quantity } : item
    })

    const newState = { ...state, products: newProductsList }

    return newState
  }
}

const reducer = (state, action) => {
  const func = actions[action.type]

  if (func)
    return func(state, action)

  console.warn('Action without reducer:', action)

  return state
}

export const useCartReducer = () => useReducer(reducer, initialState)