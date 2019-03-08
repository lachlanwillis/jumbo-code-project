import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieList.css';

const MovieList = props => {
	const movies = props.movies.map(movie => {
		return (
			<div key={movie.id} className="movie column">
				<Link className="movie-link" to={'/movies/' + movie.id}>
					<div className="image-container">
						<img
							className="ui fluid image"
							alt={movie.title}
							src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
						/>
						<span className="popularity">{movie.vote_average * 10}%</span>
					</div>
					<div className="movie-meta">
						<h4>{movie.title}</h4>
						<span>{movie.release_date}</span>
					</div>
				</Link>
			</div>
		);
	});

	return <div className="ui grid four column doubling">{movies}</div>;
};

export default MovieList;
