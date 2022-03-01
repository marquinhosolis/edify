import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import { IoCaretDown } from 'react-icons/io5';

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="logoHeader">
					<Link to="/">
						<img src={Logo} alt="Reading.com logo" />
					</Link>
				</div>
				<nav>
					<ul>
						<li>
							<a href="#meus-livros">Meus livros</a>
						</li>
					</ul>
				</nav>

				<div className="avatarHeader">
					<img
						src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35"
						alt="Avatar"
					/>
					<IoCaretDown />
				</div>
			</div>
		</header>
	);
}
