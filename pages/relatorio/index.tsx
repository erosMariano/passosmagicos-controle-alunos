import Head from "next/head";
import React from "react";
import Header from "../../src/components/Header";
import HeaderInSection from "../../src/components/HeaderInSection";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";

function Relatorio() {
	const { login } = useAuth();
	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Relatorio</title>
					</Head>
					<Header />

					<main className={styles.main}>
						<HeaderInSection
							caminhoImagem="/images/icons/relatorio.svg"
							altImagem="Icone relatorio"
							titulo="Relatorio"
							caminhoButton="/portal-do-aluno"
							localName="dashboard"
						/>


						<div className="container-relatorio">
							<section className="conteudo">
								<p>Este é o relatório semanal, deve ser entregue todas as sextas-feiras com o intuíto de acompanhar sua evolução nas aulas, você deve escrever o que aprendeu em cada matéria durante essa semana.</p>
								<textarea name="" id=""></textarea>
							</section>
						</div>
					</main>
				</>
			)}
		</>
	);
}

export default Relatorio;
