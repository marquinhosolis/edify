import React from 'react';
import './Breadcrumbs.scss';
import { IoHomeOutline } from 'react-icons/io5';

export default function Breadcrumbs() {
	return (
		<div className="breadcrumbs">
			<ul>
				<li>
					<IoHomeOutline />
				</li>
				<li>
					<a href="#home">Meus livros</a>
				</li>
				<li>Adicionar Novo</li>
			</ul>
		</div>
	);
}
