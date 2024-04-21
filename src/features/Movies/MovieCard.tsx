import {
    Card,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Tooltip,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface MovieCardProps {
    title: string
    overview: string
    popularity: number
    id: number
    image?: string
    enableUserActions?: boolean
}

export function MovieCard({
    id,
    title,
    overview,
    popularity,
    enableUserActions,
    image = '/movie-thumb.png',
}: MovieCardProps) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="div" sx={{ pt: '56.25%' }} image={image} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
                <Typography variant="button" display="block" mt={2}>
                    {popularity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
                    Details
                </Button>
                {enableUserActions && (
                    <Tooltip title="Add to favorotes">
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </CardActions>
        </Card>
    )
}

