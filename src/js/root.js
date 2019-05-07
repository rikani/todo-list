import React from 'react'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'Reducers/reducers.js'
import { getFromStorage, updateStorage } from 'Utils/utils.js'

let initialState = {}

const createStoreWithMiddleware = compose(applyMiddleware(
  thunk,
))(createStore)

const key = 'todos'
const todos = getFromStorage(key)
if (todos) {
  initialState = { ...initialState, todos }
}

const store = createStoreWithMiddleware(reducer, initialState)

store.subscribe( () => {
  updateStorage(key, store.getState().todos)
})

export default ({children}) => (
  <Provider store={store}>
    {children}
  </Provider>
)
