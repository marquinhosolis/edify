import React, { useEffect } from 'react';
import './DropdownBooks.scss';

export default function DropdownBooks(props) {
	const [book_suggestions, setBook_suggestions] = React.useState([]);

	function handlefunctions(event, functions) {
		addDataLocalStorage(event);
		functions.handleClickDropdownBooks();
	}

	function addDataLocalStorage(event) {
		var target;
		if (event.target === '<li>') {
			target = event.target;
		} else {
			target = event.target.closest('li');
		}
		var bookCover = target.querySelector('.bookCover img').src;
		var bookTitle = target.querySelector('.bookInfo h2').innerText;
		var authorName = target.querySelector('.bookInfo .author').innerText;
		var pageCount = target.querySelector(
			'.bookInfo .pageCount span'
		).innerText;

		var bookInfo = {
			bookCover,
			bookTitle,
			authorName,
			pageCount,
		};

		localStorage.setItem('bookInfo', JSON.stringify(bookInfo));
	}

	useEffect(() => {
		if (props.term.length > 3) {
			fetch(
				`https://www.googleapis.com/books/v1/volumes?langRestrict=pt-BR&q=${props.term}`
			)
				.then((response) => response.json())
				.then((data) => setBook_suggestions(data.items))
				.catch((error) => console.log(error));
		}
	}, [props.term]);

	return (
		<div className="dropdownBooks">
			<ul>
				{book_suggestions && book_suggestions.length && (
					<>
						{book_suggestions.map((book) => (
							<li
								onClick={(event) =>
									handlefunctions(event, props)
								}
								key={book.id}
							>
								<div className="bookCover">
									<div className="content">
										<img
											src={`https://covers.openlibrary.org/b/isbn/${book.volumeInfo.industryIdentifiers[0].identifier}-L.jpg`}
											alt={book.volumeInfo.title}
										/>
									</div>
								</div>
								<div className="bookInfo">
									<h2>{book.volumeInfo.title}</h2>
									<p className="author">
										{book.volumeInfo.authors}
									</p>
									<p className="pageCount">
										<span>
											{' '}
											{book.volumeInfo.pageCount}
										</span>{' '}
										páginas
									</p>
								</div>
							</li>
						))}
					</>
				)}
				{!book_suggestions && (
					<li>
						<p>Nenhum livro encontrado</p>
					</li>
				)}
			</ul>
		</div>
	);
}
