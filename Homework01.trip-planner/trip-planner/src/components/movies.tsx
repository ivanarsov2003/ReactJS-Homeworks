interface MovieProps {
    movies: string[];
}

const Movies = (props: MovieProps) => {
    return (
        <div>
            <ol>
                {props.movies.map((movie, oneProps) => (<li key={oneProps}>{movie}</li>))}
            </ol>
        </div>
    )
}

export default Movies 