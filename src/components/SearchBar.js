import React from 'react';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-container">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="ui icon input">
						<input
							type="text"
							value={this.state.term}
							placeholder="Search..."
							onChange={e => this.setState({ term: e.target.value })}
						/>
						<i className="search icon" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
