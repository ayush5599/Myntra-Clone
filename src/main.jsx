import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import CartPage from './Pages/CartPage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/*', element: <ErrorPage /> }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider >
    </Provider>
  </React.StrictMode>,
)
