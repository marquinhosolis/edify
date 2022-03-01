import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/Home/Home';
// import AdicionarLivro from './pages/AdicionarLivro/AdicionarLivro';
import Routes from './Routes';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
);
