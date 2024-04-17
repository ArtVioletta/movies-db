import React from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import {
    AppBar,
    createTheme,
    Link,
    Toolbar,
    Typography,
    colors,
} from '@mui/material'
import { LiveTvOutlined } from '@mui/icons-material'
import { ThemeProvider } from 'react-bootstrap'

const defaultTheme = createTheme({
    palette: {
        primary: colors.teal,
        secondary: {
            main: '#96000f',
        },
    },
})

function HeaderLink({
    children,
    to,
}: {
    to: string
    children: React.ReactNode
}) {
    return (
        <Link
            component={RouterLink}
            to={to}
            variant="button"
            color="inherit"
            sx={{ my: 1, mx: 1.5 }}
        >
            {children}
        </Link>
    )
}

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <LiveTvOutlined sx={{ mr: 2 }} />
                        <Typography variant="h6" color="inherit" noWrap>
                            The Movies DB
                        </Typography>
                        <nav>
                            <HeaderLink to="/">Home</HeaderLink>

                            <HeaderLink to="/movies">Movies</HeaderLink>

                            <HeaderLink to="/about">About</HeaderLink>
                        </nav>
                    </Toolbar>
                </AppBar>
                <main>
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
