import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../../components/BookList/BookList';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.scss';

export default function Home() {
	return (
		<>
			<Header />
			<main id="home">
				<div className="container">
					<BookList userId="6" />
					<div className="addBookButtonWrapper">
						<Link to="/new">
							<Button styleName="btn-default">
								Adicionar Livro
							</Button>
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
