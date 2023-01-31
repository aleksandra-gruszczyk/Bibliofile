import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { NotificationsProvider } from '@mantine/notifications'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </Provider>,
    document.getElementById('app')
  )
})
