import React from 'react';
import './BookInput.scss';
import { IoStar } from 'react-icons/io5';
import Button from '../Button/Button';

export default function BookInput(props) {
	const [bookInfo, setBookInfo] = React.useState(
		JSON.parse(localStorage.getItem('bookInfo'))
	);

	return (
		<div className="bookInput">
			<div className="bookCover">
				<div className="content">
					<img src={bookInfo.bookCover} alt={bookInfo.bookTitle} />
				</div>
			</div>
			<div className="bookInfo">
				<h2>{bookInfo.bookTitle}</h2>
				<p className="author">
					<span>{bookInfo.authorName}</span>
					<span>{bookInfo.pageCount} páginas</span>
				</p>
				<div className="inputWrapper">
					<label htmlFor="">Comecei a ler:</label>
					<input type="date" />
				</div>
				<div className="inputWrapper">
					<label htmlFor="">Terminei de ler: </label>
					<input type="date" />
				</div>
				<div className="inputWrapper">
					<p>Sua avaliação</p>
					<IoStar />
					<IoStar />
					<IoStar />
					<IoStar />
					<IoStar />
				</div>
				<div className="inputWrapper">
					<p>Escreva uma Resenha</p>
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						placeholder="Escrever"
					></textarea>
				</div>
				<div className="bookInputButtons">
					<span onClick={props.cancelInput()}>
						<Button label="Cancelar" styleName="btn-transparent">
							cancelar
						</Button>
					</span>
					<Button label="Cadastrar" styleName="btn-default">
						Cadastrar
					</Button>
				</div>
			</div>
		</div>
	);
}
