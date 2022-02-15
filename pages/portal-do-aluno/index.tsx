import Image from "next/image";
import React from "react";
import * as style from "./style.module.scss";

function HomeAluno() {
	return (
		<main>
			<header>
				<div>
					<div>
						{/* <Image /> */}
					</div>

					<div>
						{/* <Image /> */}
						<p>Sair</p>
					</div>
				</div>

				<div>
					<h1>Olá Eros,</h1>
					<p>SEJA BEM-VINDO AO PORTAL DO ALUNO.</p>
				</div>
			</header>
		</main>
	);
}

export default HomeAluno;
