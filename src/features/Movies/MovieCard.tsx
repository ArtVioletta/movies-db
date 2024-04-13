import { Link } from 'react-router-dom'
import styles from './MoviesCard.module.scss'

interface MovieCardProps {
    title: string
    overview: string
    popularity: number
    id: number
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <img
                className={styles.thumbnail}
                src="/movie-thumb.png"
                alt="thumb"
            />
            <div className={styles.content}>
                <div>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </div>
                <div className={styles.overview}>{overview}</div>
                <div className={styles.popularity}>{popularity}</div>
            </div>
        </div>
    )
}