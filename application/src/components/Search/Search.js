import React from 'react';
import './Search.scss';
import { IoSearchOutline } from 'react-icons/io5';

export default function Search() {
	return (
		<div className="searchBook">
			<label>Informe o nome do livro</label>
			<input
				type="search"
				placeholder="Pesquisar o livro                                                 .     "
			/>
			<IoSearchOutline />
		</div>
	);
}
