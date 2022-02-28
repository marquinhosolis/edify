import React from 'react';
import './AdicionarLivro.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Search from '../../components/Search/Search';
import BookInput from '../../components/BookInput/BookInput';

export default function AdicionarLivro() {
	return (
		<main id="Novo">
			<div className="container">
				<Breadcrumbs />
				<h1 className="tituloPagina">Adicionar Livro</h1>
				<div className="inputBookWrapper">
					<Search />
					<BookInput />
				</div>
			</div>
		</main>
	);
}
