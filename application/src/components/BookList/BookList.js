import React from 'react';
import './BookList.scss';
import { IoStar } from 'react-icons/io5';

export default function BookList(props) {
	const [books, setBooks] = React.useState([]);

	React.useEffect(() => {
		fetch('http://localhost:8000/wp-json/wp/v2/users/' + props.userId)
			.then((response) => response.json())
			.then((data) => setBooks(data.acf.books))
			.catch((error) => console.log(error));
	}, [props.userId]);
	return (
		<div className="bookList">
			<div className="bookListHeader">
				<h1>Lendo atualmente</h1>
			</div>
			<ul>
				{books.map((book) => (
					<li>
						<div className="bookCover">
							<div className="content">
								<img src={book.cover} alt={book.title} />
							</div>
						</div>
						<div className="bookData">
							<div className="bookTitle">
								<h2>{book.title}</h2>
							</div>
							<p className="authors">{book.author}</p>
							<div className="stars">
								<IoStar />
								<IoStar />
								<IoStar />
								<IoStar />
								<IoStar />
							</div>
							<p className="date">
								Você começou a ler em:{' '}
								<strong>{book.start_date}</strong>
							</p>
							<p className="date">
								Você terminou de ler em:{' '}
								<strong>{book.end_date}</strong>
							</p>
						</div>
					</li>
				))}
				{/* 
				<li>
					<div className="bookCover">
						<div className="content">
							<img
								src="https://images-na.ssl-images-amazon.com/images/I/41UKpOWrZVL._SX346_BO1,204,203,200_.jpg"
								alt="Book Title"
							/>
						</div>
					</div>
					<div className="bookData">
						<div className="bookTitle">
							<h2>
								A Guerra dos Tronos : As Crônicas de Gelo e
								Fogo, volume 1
							</h2>
						</div>
						<p className="authors">George R. R. Martin</p>
						<div className="stars">
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
						</div>
						<p className="date">
							Você começou a ler em: <strong>14/09/2020</strong>
						</p>
						<p className="date">
							Você terminou de ler em: <strong>22/10/2020</strong>
						</p>
					</div>
				</li>
				<li>
					<div className="bookCover">
						<div className="content">
							<img
								src="https://images-na.ssl-images-amazon.com/images/I/41UKpOWrZVL._SX346_BO1,204,203,200_.jpg"
								alt="Book Title"
							/>
						</div>
					</div>
					<div className="bookData">
						<div className="bookTitle">
							<h2>
								A Guerra dos Tronos : As Crônicas de Gelo e
								Fogo, volume 1
							</h2>
						</div>
						<p className="authors">George R. R. Martin</p>
						<div className="stars">
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
							<IoStar />
						</div>
						<p className="date">
							Você começou a ler em: <strong>14/09/2020</strong>
						</p>
						<p className="date">
							Você terminou de ler em: <strong>22/10/2020</strong>
						</p>
					</div>
				</li> */}
			</ul>
		</div>
	);
}
