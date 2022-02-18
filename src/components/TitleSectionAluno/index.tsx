import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

type PropsTitulo = {
    caminhoImagem: string;
    altImagem: string;
    titulo: string;
}
function TitleSectionAluno({caminhoImagem, altImagem, titulo}: PropsTitulo) {
    const [tamanhoImagemAvisos, setTamanhoImagemAvisos] = useState(100)

    useEffect(() =>{
		if (window !== undefined) {
			if (window.innerWidth <= 800) {
				setTamanhoImagemAvisos(50);
			}
		}
	}, [])
    
	return (
		<div className={styles.titleSection}>
			<Image
				width={tamanhoImagemAvisos}
				height={tamanhoImagemAvisos}
				src={caminhoImagem}
				alt={altImagem}
			/>
			<h1>{titulo}</h1>
		</div>
	);
}

export default TitleSectionAluno;
