import React from 'react';
import './Search.scss';
import DropdownBooks from '../DropdownBooks/DropdownBooks';
import { IoSearchOutline, IoAdd } from 'react-icons/io5';
import Button from '../Button/Button';

export default function Search() {
	return (
		<div>
			<div className="searchBook">
				<label>Informe o nome do livro</label>
				<input
					type="search"
					placeholder="Pesquisar o livro                                                 .     "
				/>
				<IoSearchOutline />
				<DropdownBooks />
			</div>
			<Button styleName="addManualButton btn-transparent">
				<IoAdd />
				Preencher manualmente
			</Button>
		</div>
	);
}
