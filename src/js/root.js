import React from 'react'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'Reducers/reducers.js'


const createStoreWithMiddleware = compose(applyMiddleware(
  thunk,
))(createStore)

export default ({children, initialState = {}}) => (
  <Provider store={createStoreWithMiddleware(reducer, initialState)}>
    {children}
  </Provider>
)
