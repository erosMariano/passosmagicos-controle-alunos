import React, { useState } from "react";
import Header from "../../src/components/Header";
import HeaderInSection from "../../src/components/HeaderInSection";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";

type PropsBoletimAluno = {
	disciplina: string;
	notas: number[];
	faltas: number;
	situacacao: string;
};
const alunoNotas: PropsBoletimAluno[] = [
	{
		disciplina: "RESPONSIVE WEB DESIGN",
		notas: [100, 95, 98],
		faltas: 2,
		situacacao: "Aprovado",
	},
];

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
										{alunoNotas.map((element) => {
											return (
												<li key={element.disciplina}>
													{element.disciplina}
												</li>
											);
										})}
									</ul>
								</div>

								<div className={styles.notas}>
									<h3>NOTAS</h3>

									<div>
										<div>
											<h4>ATIVIDADES</h4>
											<ul>
												<li>98.63</li>
											</ul>
										</div>

										<div>
											<h4>FALTAS</h4>
											<ul>
												<li>0</li>
											</ul>
										</div>
									</div>
								</div>

								<div>
									<h3>RESULTADO</h3>
									<div>
										<h4>SITUAÇÃO</h4>
										<ul>
											<li>Aprovado</li>
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
