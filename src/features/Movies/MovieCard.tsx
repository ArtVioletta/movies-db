import { Link } from 'react-router-dom'
import styles from './MoviesCard.module.scss'
import {
    Card,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface MovieCardProps {
    title: string
    overview: string
    popularity: number
    id: number
    image?: string
}

function MovieCard({
    id,
    title,
    overview,
    popularity,
    image = '/movie-thumb.png',
}: MovieCardProps) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="div" sx={{ pt: '56.25%' }} image={image} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
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
                <Button
                    component={RouterLink}
                    to={`/movies/${id}`}
                    color="secondary"
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}
export default MovieCard
