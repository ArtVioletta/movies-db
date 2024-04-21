import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, colors } from '@mui/material'
import { ThemeProvider } from 'react-bootstrap'
import { AppHeader } from './AppHeader'
import { anonymousUser, AuthContext, AuthInfo } from './AuthContext'

const defaultTheme = createTheme({
    palette: {
        primary: colors.teal,
        secondary: {
            main: '#96000f',
        },
    },
})

const fakeAuth: AuthInfo = {
    user: {
        name: 'Diana',
    },
}

function App() {
    const [auth, setAuth] = useState<AuthInfo>({ user: anonymousUser })
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <CssBaseline />
                <AuthContext.Provider value={auth}>
                    <AppHeader
                        onLogin={() => setAuth(fakeAuth)}
                        onLogOut={() => setAuth({ user: anonymousUser })}
                    />
                    <main>
                        <Outlet />
                    </main>
                </AuthContext.Provider>
            </div>
        </ThemeProvider>
    )
}

export default App

