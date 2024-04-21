import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import { LiveTvOutlined } from '@mui/icons-material'
import { useContext } from 'react'
import { anonymousUser, AuthContext } from './AuthContext'

interface AppHeaderProps {
    onLogin(): void
    onLogOut(): void
}

export function AppHeader({ onLogin, onLogOut }: AppHeaderProps) {
    return (
        <AppBar position="static">
            <Toolbar>
                <LiveTvOutlined sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    The Movies DB
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <nav>
                        <HeaderLink to="/">Home</HeaderLink>

                        <HeaderLink to="/movies">Movies</HeaderLink>

                        <HeaderLink to="/about">About</HeaderLink>
                    </nav>
                </Box>
                <AuthSection onLogin={onLogin} onLogOut={onLogOut} />
            </Toolbar>
        </AppBar>
    )
}

interface AuthSectionProps {
    onLogin(): void
    onLogOut(): void
}

function AuthSection({ onLogin, onLogOut }: AuthSectionProps) {
    const auth = useContext(AuthContext)

    const loggedIn = auth.user !== anonymousUser

    if (loggedIn) {
        return (
            <>
                <Typography>Hello,{auth.user.name} </Typography>
                <Button color="inherit" variant="outlined" sx={{ ml: 1.5 }} onClick={onLogOut}>
                    Log out
                </Button>
            </>
        )
    }
    return (
        <Button color="inherit" variant="outlined" onClick={onLogin}>
            Log in
        </Button>
    )
}

function HeaderLink({ children, to }: { to: string; children: React.ReactNode }) {
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

