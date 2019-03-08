import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MovieDetails from './MovieDetails';

const App = () => (
	<main>
		<Switch>
			<Route exact path="/" component={SearchPage} />
			<Route path="/movies/:id" component={MovieDetails} />
		</Switch>
	</main>
);

export default App;
