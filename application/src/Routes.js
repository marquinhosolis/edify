import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AdicionarLivro from './pages/AdicionarLivro/AdicionarLivro';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/new">
					<AdicionarLivro />
				</Route>
			</Switch>
		</Router>
	);
}
