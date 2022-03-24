import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

type PropsAtividades = {
	materia: string;
	nome_atividade: string;
	data: string;
	status: boolean;
};

type PropsItemAtividades = {
	itemAtividade: "nome_atividade" | "data" | "status" | "button";
};
const atividades: PropsAtividades[] = [
	{
		materia: "Reponsive Web Design",
		nome_atividade: "atividade 1 - BOOTSRAP",
		data: "DE 31/01/2022 ATÉ 03/02/2022 ",
		status: false,
	},

	{
		materia: "Reponsive Web Design",
		nome_atividade: "atividade 2 - BOOTSRAP",
		data: "DE 03/03/2022 ATÉ 03/03/2022 ",
		status: true,
	},

];





function AtividadesRendering({ itemAtividade }: PropsItemAtividades) {
	const [onOrOffPopup, setPopup] = useState("popupInativo")
	const [notaAluno, setNotaAluno] = useState(0);
	const [atividadeState, setAtividadeState] = useState<PropsAtividades[]>(atividades)



	function validateInputNota(e: React.ChangeEvent<HTMLInputElement>) {
		let nota = e.target.value
		if (Number(nota) > 100) {
			e.target.value = "100"
		}

		setNotaAluno(Number(nota))
	}




	function ativarPopup() {
		setPopup("popupAtivo")
	}
	function desativarPopup() {
		setPopup("popupInativo")
	}



	let teste = 0;

	function enviarForm(itemAtividade: PropsAtividades) {
		atividadeState.filter((el, index) => {
			if (el === itemAtividade) {
				el.status = true;
			}
		})
		setPopup("popupInativo")
	}




	return (
		<>
			{atividadeState.map((element, index) => {
				console.log(element.status)
				if (itemAtividade === "nome_atividade") {
					return (
						<li key={element.nome_atividade + index}>
							{element.nome_atividade}
						</li>
					);
				} else if (itemAtividade === "data") {
					return (
						<li key={element.nome_atividade + index}>
							{element.data}
						</li>
					);
				} else if (itemAtividade === "status") {
					if (element.status === false) {
						return (
							<li key={element.nome_atividade + index}>
								Não entregue
							</li>
						)
					} else {
						return (
							<li key={element.nome_atividade + index}>
								Entregue
							</li>
						);
					}

				} else if (itemAtividade === "button") {
					if (element.status === false && teste == 0) {
						return (
							<React.Fragment key={element.nome_atividade + index}>
								<button className={styles.buttonEntregar} onClick={() => ativarPopup()}>
									ENTREGAR
								</button>
								<div className={`${styles.popupEntregar} ${styles[onOrOffPopup]}`}>
									<div className={`${styles.popup}`}>

										<div className={styles.itemClose} onClick={() => desativarPopup()}>
											<Image src="/images/icons/close.svg" width="24" height="24" alt="itemClose" />
										</div>

										<h3>{element.materia}</h3>

										<p className={styles.subtitleAtividade}>Atividades</p>

										<div className={styles.containerElementos}>
											<div className={styles.itemContainerElement}>
												<h4>DATA</h4>
												<p>{element.data}</p>
											</div>

											<div className={styles.itemContainerElement}>
												<h4>Tema</h4>
												<p>{element.nome_atividade}</p>
											</div>

											<div className={styles.itemContainerElement}>
												<h4>Nota</h4>
												<input type="number" name="" id="" max={100} placeholder="nota entre 0 e 100" onChange={(e) => validateInputNota(e)} />
											</div>
										</div>

										<div className={styles.containerButtonForm}>
											<button className={styles.buttonEntregar} onClick={() => enviarForm(element)}>Entregar</button>
										</div>
									</div>
								</div>
							</ React.Fragment>
						)
					} else {
						return (
							<button key={element.nome_atividade + index} className={`${styles.buttonEntregar} ${styles.buttonEntrege}`}>
								Entregue
							</button>
						);
					}
				}
			})}
		</>
	);
}

export default AtividadesRendering;
