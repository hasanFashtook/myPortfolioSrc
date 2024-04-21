import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/jost"
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Reducer.jsx'

const App = React.lazy(() => import('./App.jsx'));

export const dummyExport = {};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
