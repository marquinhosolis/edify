import React from 'react';
import './AdicionarLivro.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function AdicionarLivro() {
	return (
		<main id="Novo">
			<div className="container">
				<Breadcrumbs />
				<h1 className="tituloPagina">Adicionar Livro</h1>
			</div>
		</main>
	);
}
