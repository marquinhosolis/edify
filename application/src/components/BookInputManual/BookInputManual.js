import React from 'react';
import '../BookInput/BookInput.scss';
import { IoStar } from 'react-icons/io5';
import Button from '../Button/Button';

export default function BookInputManual(props) {
	return (
		<div className="bookInput">
			<div className="bookInfo">
				<div className="inputWrapper">
					<p>Capa</p>
					<input type="file" />
				</div>
				<div className="inputWrapper">
					<p>Título do livro:</p>
					<input type="text" />
				</div>
				<div className="inputWrapper">
					<p>Nome do autor:</p>
					<input type="text" />
				</div>
				<div className="inputWrapper">
					<p>Número de páginas:</p>
					<input type="tel" />
				</div>
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
