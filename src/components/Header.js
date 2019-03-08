import React from 'react';
import '../css/Header.css';

const Header = () => {
	return (
		<div className="ui one column centered grid header-container">
			<img
				className="logo"
				alt="The Movie DB"
				src={require('../images/tmdb-logo.png')}
			/>
		</div>
	);
};

export default Header;
