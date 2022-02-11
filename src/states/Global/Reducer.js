import { useReducer } from 'react'

const initialState = [
  { name: 'Foo', qtt: 1 },
  { name: 'Bar', qtt: 3 },
  { name: 'FooBar', qtt: 2 }
]

const actions = {
  addItem: (state, payload) => {
    const { name } = payload
    const existingProduct = state.find(product => product.name === name)

    // If product exists,
    // update its quantity instead of adding new product
    if (!!existingProduct)
      return actions['updateQuantity'](state, {
        name,
        qtt: existingProduct.qtt + 1
      })

    const newProduct = { name, qtt: 1 }
    const newState = [...state, newProduct]
    return newState
  },
  removeItem: (state, payload) => {
    const { name } = payload
    const newState = state.filter(product => product.name !== name)
    return newState
  },
  updateQuantity: (state, payload) => {
    const { name, qtt } = payload

    if (qtt < 0)
      return state

    const newState = state.map(product => {
      return product.name === name ? { name, qtt } : product
    })

    return newState
  }
}

const reducer = (state, { type, payload }) => {
  const func = actions[type]

  if (func)
    return func(state, payload)

  console.warn('Action without reducer:', type)

  return state
}

export const useGlobalReducer = () => useReducer(reducer, initialState)