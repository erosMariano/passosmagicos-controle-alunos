import React, { useState } from "react";
import styles from "./style.module.scss";

type PropsBoletimAluno = {
	disciplina: string;
	notas: number[];
	faltas: number;
	situacao: string;
};
const alunoNotas: PropsBoletimAluno[] = [
	{
		disciplina: "RESPONSIVE WEB DESIGN",
		notas: [100, 30, 100],
		faltas: 2,
		situacao: "Aprovado",
	},

	{
		disciplina: "Java",
		notas: [60, 95, 98],
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

				element.notas.forEach((nota) => {
					acoulador += nota;
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
							<div
								className={styles[displayPopup]}
								onClick={() => tirar()}
							>
								<div className={styles.containerPopup}>
									{/* <h1>{elementosDisciplina?.disciplina}</h1>
									<h1>{elementosDisciplina?.faltas}</h1>
									<h1>
										{elementosDisciplina?.notas.map(
											(nota, index) => {
												return (
													<ul key={nota + index}>
														<li>{nota}</li>
													</ul>
												);
											}
										)}
									</h1>
									<h1>{elementosDisciplina?.situacao}</h1> */}
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
