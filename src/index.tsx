import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './features/About/About'
import Movies from './features/Movies/Movies'
import store from './store'
import { Provider } from 'react-redux'
import Home from './Home/Home'
import { ErrorBoundary } from './ErrorBoundary'

function AppEntrypoint() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppEntrypoint />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'movies',
                element: <Movies />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

reportWebVitals()

