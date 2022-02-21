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

import React, { useState } from "react";

function InformacoesBoletimAluno() {

    	const [nota, setNota] = useState<number>(0);

		let acoulador = 0;
		let contador = 0;
		alunoNotas.map((elemento) => {
			elemento.notas.forEach((nota) => {
				acoulador += nota;
				contador++;
			});
		});

		const mediaPonderada = (acoulador / contador).toFixed(2);
        
	return <div></div>;
}

export default InformacoesBoletimAluno;
