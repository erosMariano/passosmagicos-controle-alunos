import React from "react";
import { PropsButton, PropsTitulo } from "../../types/myTypes";
import ButtonLocation from "../ButtonLocation";
import TitleSectionAluno from "../TitleSectionAluno";
import styles from "./style.module.scss";

function HeaderInSection({
	caminhoImagem,
	altImagem,
	titulo,
	caminhoButton,
	localName,
}: PropsTitulo & PropsButton) {
	return (
		<section className={styles.maxSection}>
			<div className={styles.headerFlexSection}>
				<TitleSectionAluno
					caminhoImagem={caminhoImagem}
					altImagem={altImagem}
					titulo={titulo}
				/>
				<ButtonLocation
					caminhoButton={caminhoButton}
					localName={localName}
				/>
			</div>
		</section>
	);
}

export default HeaderInSection;
