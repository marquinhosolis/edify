import React, { useEffect } from 'react';
import './Search.scss';
import DropdownBooks from '../DropdownBooks/DropdownBooks';
import { IoSearchOutline, IoAdd } from 'react-icons/io5';
import Button from '../Button/Button';

export default function Search(props) {
	const [inputText, setInputText] = React.useState('');
	const [dropdownBooksVisible, setDropdownBooksVisible] =
		React.useState(false);

	function handleClickDropdownBooks(functions) {
		document.querySelector('#searchBook').value = '';
		setDropdownBooksVisible(false);
		functions();
	}

	useEffect(() => {
		if (inputText.length > 3) {
			setDropdownBooksVisible(true);
		} else {
			setDropdownBooksVisible(false);
		}
	}, [inputText]);
	return (
		<div>
			<div className="searchBook">
				<label>Informe o nome do livro</label>
				<input
					type="search"
					id="searchBook"
					placeholder="Pesquisar o livro"
					onChange={(e) => setInputText(e.target.value)}
				/>
				<IoSearchOutline />
				{dropdownBooksVisible && (
					<DropdownBooks
						handleClickDropdownBooks={() =>
							handleClickDropdownBooks(props.apiInputFunction())
						}
						term={inputText}
					/>
				)}
			</div>
			<span onClick={props.handleClickManualInput()}>
				<Button styleName="addManualButton btn-transparent">
					<IoAdd />
					Preencher manualmente
				</Button>
			</span>
		</div>
	);
}
