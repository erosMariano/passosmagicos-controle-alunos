import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.scss";

type PropsBoletimAluno = {
	disciplina: string;
	atividades: {
		nome: string;
		nota: number;
		data: string;
	}[];
	faltas: number;
	situacao: string;
};
const alunoNotas: PropsBoletimAluno[] = [
	{
		disciplina: "RESPONSIVE WEB DESIGN",
		atividades: [
			{
				nome: "ATIVIDADE 1 - BOOTSRAP",
				nota: 100,
				data: "10/03/2022",
			},
			{
				nome: "ATIVIDADE 1 - BOOTSRAP",
				nota: 95,
				data: "10/03/2022",
			},
		],
		faltas: 2,
		situacao: "Aprovado",
	},

	{
		disciplina: "Java",
		atividades: [
			{
				nome: "ATIVIDADE 1 - System Log",
				nota: 67,
				data: "11/02/2022",
			},
			{
				nome: "ATIVIDADE 2",
				nota: 95,
				data: "10/03/2022",
			},
		],
		faltas: 2,
		situacao: "Aprovado",
	},
];

type PropsInformacoesBoletimAluno = {
	nameElement: "disciplina" | "notas" | "faltas" | "situacao";
};

function InformacoesBoletimAluno({
	nameElement,
}: PropsInformacoesBoletimAluno) {
	const [displayPopup, setDisplayPopup] = useState<string>("desativo");
	const [elementosDisciplina, setElementosDisciplina] =
		useState<PropsBoletimAluno>();

	function abrirPopupNotas(disciplina: string) {
		const dadosElement = alunoNotas.filter(
			(element) => element.disciplina === disciplina
		);

		setDisplayPopup("ativo");
		dadosElement.map((element) => {
			setElementosDisciplina(element);
		});
	}

	function tirar() {
		setDisplayPopup("desativo");
	}
	return (
		<>
			{alunoNotas.map((element) => {
				let acoulador = 0;
				let contador = 0;

				element.atividades.forEach((element) => {
					acoulador += element.nota;
					contador++;
				});
				const mediaPonderada = (acoulador / contador).toFixed(2);
				if (nameElement === "disciplina") {
					return (
						<li key={element.disciplina}>{element.disciplina}</li>
					);
				} else if (nameElement === "notas") {
					return (
						<React.Fragment key={element.disciplina}>
							<li
								onClick={() =>
									abrirPopupNotas(element.disciplina)
								}
							>
								{mediaPonderada}
							</li>
							<div className={styles[displayPopup]}>
								<div className={styles.containerPopup}>
									<span
										className={styles.closeIcon}
										onClick={() => tirar()}
									>
										<Image
											src="/images/icons/close.svg"
											width="24"
											height="24"
											alt="Close icon"
										/>
									</span>
									<h2 className={styles.h2Popup}>
										{elementosDisciplina?.disciplina}
									</h2>
									<p className={styles.pAtividades}>
										Atividades
									</p>

									<section className={styles.scrollMobile}>
										<div className={styles.popupDadosAluno}>
											<div className={styles.dataPopup}>
												<div
													className={
														styles.titlePopupItens
													}
												>
													Data
												</div>

												{elementosDisciplina?.atividades.map(
													(atividade, index) => {
														return (
															<p
																className={
																	styles.itemPopup
																}
																key={
																	atividade.nome +
																	index
																}
															>
																{atividade.data}
															</p>
														);
													}
												)}
											</div>

											<div
												className={styles.temaAtividade}
											>
												<div
													className={
														styles.titlePopupItens
													}
												>
													TEMA
												</div>

												{elementosDisciplina?.atividades.map(
													(atividade, index) => {
														return (
															<p
																className={`${styles.itemPopup}`}
																key={
																	atividade.nome +
																	index
																}
															>
																{atividade.nome}
															</p>
														);
													}
												)}
											</div>

											<div
												className={styles.temaAtividade}
											>
												<div
													className={
														styles.titlePopupItens
													}
												>
													Nota
												</div>

												{elementosDisciplina?.atividades.map(
													(atividade, index) => {
														return (
															<p
																className={
																	styles.itemPopup
																}
																key={
																	atividade.nome +
																	index
																}
															>
																{atividade.nota}
															</p>
														);
													}
												)}
											</div>
										</div>
									</section>
								</div>
							</div>
						</React.Fragment>
					);
				} else if (nameElement === "faltas") {
					return <li key={element.disciplina}>{element.faltas}</li>;
				} else if (nameElement === "situacao") {
					return <li key={element.disciplina}>{element.situacao}</li>;
				}
			})}
		</>
	);
}

export default InformacoesBoletimAluno;
