import React from 'react';
import './AdicionarLivro.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Search from '../../components/Search/Search';
import BookInput from '../../components/BookInput/BookInput';
import BookInputManual from '../../components/BookInputManual/BookInputManual';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function AdicionarLivro() {
	const [manualInput, setManualInput] = React.useState(false);
	const [bookDetailVisible, setBookDetailVisible] = React.useState(false);

	function handleClickManualInput() {
		setManualInput(true);
		setBookDetailVisible(true);
	}

	function apiInputFunction() {
		setManualInput(false);
		setBookDetailVisible(true);
	}

	function cancelInput() {
		setManualInput(false);
		setBookDetailVisible(false);
	}

	return (
		<>
			<Header />
			<main id="Novo">
				<div className="container">
					<Breadcrumbs />
					<h1 className="tituloPagina">Adicionar Livro</h1>
					<div className="inputBookWrapper">
						<Search
							handleClickManualInput={() =>
								handleClickManualInput
							}
							apiInputFunction={() => apiInputFunction}
						/>
						{bookDetailVisible && (
							<div>
								{manualInput && (
									<BookInputManual
										cancelInput={() => cancelInput}
									/>
								)}
								{!manualInput && (
									<BookInput
										cancelInput={() => cancelInput}
									/>
								)}
							</div>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
