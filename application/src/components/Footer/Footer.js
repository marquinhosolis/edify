import React from 'react';
import Logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import './Footer.scss';
import { IoChevronUpOutline } from 'react-icons/io5';

export default function Footer() {
	return (
		<footer>
			<div className="footerRegular">
				<div className="container">
					<div className="footerLogo">
						<img src={Logo} alt="Reading.com logo" />
						<p>
							Reading.com é um produto fictício para ajudar no
							processo seletivo para o time de Produto &
							Desenvolvimento da Hivecloud.
						</p>
					</div>
					<div className="footerLinks">
						<ul>
							<strong>Reading.com</strong>
							<li>Meus livros</li>
							<li>Comunidade</li>
							<li>Novidades</li>
							<li>Aplicativos</li>
						</ul>
					</div>
					<div className="footerLinks">
						<ul>
							<strong>Sobre Nós</strong>
							<li>Blog</li>
							<li>Nossa missão</li>
							<li>Contato</li>
							<li>Carreiras</li>
						</ul>
					</div>
					<div className="footerForm">
						<strong>Inscreva-se</strong>
						<input type="text" placeholder="Seu e-mail" />
						<Button styleName="btn-default2" label="Inscreva-se" />
					</div>
				</div>
			</div>
			<div className="footerLegal">
				<div className="container">
					<p>Copyright © 2020 Reading All rights reserved</p>
					<ul>
						<li>Política de privacidade</li>
						<li>Termos de uso</li>
						<li>Segurança</li>
						<li>Legal</li>
						<li>Site map</li>
					</ul>
					<p>
						PT <IoChevronUpOutline />
					</p>
				</div>
			</div>
		</footer>
	);
}
