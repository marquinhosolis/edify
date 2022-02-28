import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';
import AdicionarLivro from './pages/AdicionarLivro/AdicionarLivro';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<AdicionarLivro />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
