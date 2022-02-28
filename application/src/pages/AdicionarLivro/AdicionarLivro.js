import React from 'react';
import './AdicionarLivro.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Search from '../../components/Search/Search';
// import BookInput from '../../components/BookInput/BookInput';
import BookInputManual from '../../components/BookInputManual/BookInputManual';

export default function AdicionarLivro() {
	return (
		<main id="Novo">
			<div className="container">
				<Breadcrumbs />
				<h1 className="tituloPagina">Adicionar Livro</h1>
				<div className="inputBookWrapper">
					<Search />
					{/* <BookInput /> */}
					<BookInputManual />
				</div>
			</div>
		</main>
	);
}
