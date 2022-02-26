import React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './App.scss';

export default function App() {
	return (
		<div>
			<Header />
			<main>
				<div className="container">
					<div className="addBookButtonWrapper">
						<Button label="Adicionar Livro" />
					</div>
				</div>
			</main>
		</div>
	);
}
