import React from 'react';
import BookList from '../../components/BookList/BookList';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.scss';

export default function Home() {
	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	);
}
