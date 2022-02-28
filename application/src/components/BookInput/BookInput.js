import React from 'react';
import './BookInput.scss';
import { IoStar } from 'react-icons/io5';
import Button from '../Button/Button';

export default function BookInput() {
	return (
		<div className="bookInput">
			<div className="bookCover">
				<div className="content">
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/41UKpOWrZVL._SX346_BO1,204,203,200_.jpg"
						alt="Book Title"
					/>
				</div>
			</div>
			<div className="bookInfo">
				<h2>
					A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1
				</h2>
				<p className="author">
					<span> George R. R. Martin</span>
					<span>420 páginas</span>
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
					<Button label="Cancelar" styleName="btn-transparent">
						cancelar
					</Button>
					<Button label="Cadastrar" styleName="btn-default">
						Cadastrar
					</Button>
				</div>
			</div>
		</div>
	);
}
