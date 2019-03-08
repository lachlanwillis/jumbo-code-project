import React from 'react';
import tmdb from '../api/tmdb';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import '../css/SearchPage.css';

class SearchPage extends React.Component {
	state = { movies: [], searchTerm: '' };

	onSearchSubmit = term => {
		const search = term;
		this.setState({ searchTerm: search });
		term ? this.getSearchedMovies(term) : this.getPopularMovies();
	};

	getSearchedMovies = term => {
		tmdb
			.get('/search/movie', {
				params: { query: term }
			})
			.then(response => {
				this.setState({ movies: response.data.results });
			});
	};

	getPopularMovies() {
		tmdb.get('/movie/popular').then(response => {
			this.setState({ movies: response.data.results });
		});
	}

	componentDidMount() {
		this.getPopularMovies();
	}

	render() {
		return (
			<div className="ui container">
				<Header />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<h2>
					{this.state.searchTerm
						? 'Search: ' + this.state.searchTerm
						: 'Popular Movies'}
				</h2>
				<MovieList movies={this.state.movies} />
			</div>
		);
	}
}

export default SearchPage;
