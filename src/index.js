import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/index'
import fixedIncomeApp from './components/App/reducers'

const store = createStore(fixedIncomeApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
