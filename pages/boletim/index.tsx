import React, { useState } from "react";
import Header from "../../src/components/Header";
import HeaderInSection from "../../src/components/HeaderInSection";
import InformacoesBoletimAluno from "../../src/components/InformacoesBoletimAluno";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";


function Boletim() {
	const { login } = useAuth();
	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Header />

					<main className={styles.main}>
						<HeaderInSection
							caminhoImagem="/images/icons/bulletin.svg"
							altImagem="/Icone boletim"
							titulo="Boletim"
							caminhoButton="/portal-do-aluno"
							localName="dashboard"
						/>

						<section className={styles.containerBoletim}>
							<h2>CURSO: PROFISSIONAL DO FUTURO</h2>

							<div className={styles.containerNotas}>
								<div className={styles.disciplina}>
									<h3>DISCIPLINA</h3>

									<ul>
										<InformacoesBoletimAluno nameElement="disciplina" />
									</ul>
								</div>

								<div className={styles.notas}>
									<h3>NOTAS</h3>

									<div>
										<div className={styles.atividades}>
											<h4>ATIVIDADES</h4>
											<ul>
												<InformacoesBoletimAluno
													nameElement="notas"
												/>
											</ul>
										</div>

										<div>
											<h4>FALTAS</h4>
											<ul>
												<InformacoesBoletimAluno nameElement="faltas" />
											</ul>
										</div>
									</div>
								</div>

								<div>
									<h3>RESULTADO</h3>
									<div>
										<h4>SITUAÇÃO</h4>
										<ul>
											<InformacoesBoletimAluno nameElement="situacao" />
										</ul>
									</div>
								</div>
							</div>
						</section>
					</main>
				</>
			)}
		</>
	);
}

export default Boletim;
