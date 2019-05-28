import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '.'

// const createStore = () => reduxCreateStore(rootReducer)

const createReduxStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState)
const store = createReduxStore() // create store by calling the above function
// rest of code

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}>{element}</Provider>
