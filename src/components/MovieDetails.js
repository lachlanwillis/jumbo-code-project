import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieDetails.css';
import tmdb from '../api/tmdb';

class MovieDetails extends React.Component {
	state = { movie: '', date: null, time: '' };

	componentDidMount() {
		const handle = this.props.match.params;

		tmdb.get('/movie/' + handle.id, {}).then(response => {
			this.setState({ movie: response.data });
			this.setState({ date: new Date(this.state.movie.release_date) });
			const mins = this.state.movie.runtime % 60;
			const hours = (this.state.movie.runtime - mins) / 60;
			this.setState({ time: hours + ' h ' + mins + ' min' });
		});
	}

	render() {
		return (
			<div className="ui grid">
				<div className="row top-container">
					<img
						className="ui fluid image top-image"
						alt={this.state.movie.title}
						src={
							'https://image.tmdb.org/t/p/w500' + this.state.movie.backdrop_path
						}
					/>
					<Link to="/">
						<i className="angle left icon huge back-icon" />
					</Link>
				</div>

				<div className="row centered middle-container">
					<div className="five wide mobile four wide computer column">
						<img
							className="ui fluid image movie-poster"
							alt={this.state.movie.title}
							src={
								'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path
							}
						/>
					</div>
					<div className="nine wide mobile eight wide computer column title-meta">
						<h2>{this.state.movie.title}</h2>
						<span>
							{new Intl.DateTimeFormat('en-US', {
								year: 'numeric'
							}).format(this.state.date)}
							&nbsp;&nbsp;&middot;&nbsp;&nbsp;
							{this.state.movie.vote_average * 10}% User Score
						</span>
						<span>{this.state.time}</span>
					</div>

					<div className="line fourteen wide column" />
				</div>

				<div className="row bottom-container">
					<div className="column centered fourteen wide">
						<h3>Overview</h3>
						<p>{this.state.movie.overview}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetails;
