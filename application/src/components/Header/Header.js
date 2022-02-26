import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.scss';
import { IoCaretDown } from 'react-icons/io5';

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="logoHeader">
					<img src={Logo} alt="Reading.com logo" />
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
