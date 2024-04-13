import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './features/About/About'
import Movies from './features/Movies/Movies'
import store from './store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        children: [
            {
                path: '/movies',
                element: <Movies />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)

reportWebVitals()
