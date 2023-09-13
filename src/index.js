import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'uimini'

import App from './components/App/App'
import { Provider } from 'react-redux'

import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('container'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
