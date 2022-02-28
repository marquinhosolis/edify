import React from 'react';
import BookList from '../../components/BookList/BookList';
import Button from '../../components/Button/Button';
import './Home.scss';

export default function Home() {
	return (
		<div>
			<main id="home">
				<div className="container">
					<BookList />
					<div className="addBookButtonWrapper">
						<Button
							label="Adicionar Livro"
							styleName="btn-default"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
