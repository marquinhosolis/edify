import React from 'react';
import './Search.scss';
import DropdownBooks from '../DropdownBooks/DropdownBooks';
import { IoSearchOutline, IoAdd } from 'react-icons/io5';

export default function Search() {
	return (
		<>
			<div className="searchBook">
				<label>Informe o nome do livro</label>
				<input
					type="search"
					placeholder="Pesquisar o livro                                                 .     "
				/>
				<IoSearchOutline />
				<DropdownBooks />
			</div>
			<button className="addManualButton">
				<IoAdd />
				Preencher manualmente
			</button>
		</>
	);
}
