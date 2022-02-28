import React from 'react';
import './DropdownBooks.scss';

export default function DropdownBooks() {
	return (
		<div className="dropdownBooks">
			<ul>
				<li>
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
							A Guerra dos Tronos : As Crônicas de Gelo e Fogo,
							volume 1
						</h2>
						<p className="author">George R. R. Martin</p>
						<p className="releaseDate">2014</p>
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
					<div className="bookInfo">
						<h2>
							A Guerra dos Tronos : As Crônicas de Gelo e Fogo,
							volume 1
						</h2>
						<p className="author">George R. R. Martin</p>
						<p className="releaseDate">2014</p>
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
					<div className="bookInfo">
						<h2>
							A Guerra dos Tronos : As Crônicas de Gelo e Fogo,
							volume 1
						</h2>
						<p className="author">George R. R. Martin</p>
						<p className="releaseDate">2014</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
