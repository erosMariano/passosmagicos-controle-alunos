import Head from "next/head";
import React from "react";
import AtividadesRendering from "../../src/components/AtividadesRendering";
import Header from "../../src/components/Header";
import HeaderInSection from "../../src/components/HeaderInSection";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";





function Atividades() {
	const { login } = useAuth();

	return (
		<main className={styles.main}>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Atividades</title>
					</Head>

					<Header />

					<section className={styles.maxContainer}>
						<HeaderInSection
							caminhoImagem="/images/icons/book.svg"
							altImagem="icon book"
							titulo="ATIVIDADES"
							caminhoButton="/portal-do-aluno"
							localName="dashboard"
						/>

						<div className={styles.containerMobileScroll}>
							<div className={styles.containerAtividades}>
								<div className={styles.infoAtividade}>
									<h2>TITULO DA ATIVIDADE</h2>
									<ul>
										<AtividadesRendering itemAtividade="nome_atividade" />
									</ul>
								</div>

								<div className={styles.infoAtividade}>
									<h2>PERÍODO P/ENTREGA</h2>
									<ul>
										<AtividadesRendering itemAtividade="data" />
									</ul>
								</div>

								<div className={styles.infoAtividade}>
									<h2>STATUS</h2>
									<ul>
										<AtividadesRendering itemAtividade="status" />
									</ul>
								</div>

								<div className={styles.containerButton}>
									<AtividadesRendering itemAtividade="button" />
								</div>
							</div>
						</div>
					</section>
				</>
			)}
		</main>
	);
}

export default Atividades;
