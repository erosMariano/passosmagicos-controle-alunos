import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import ButtonLocation from "../../src/components/ButtonLocation";
import Header from "../../src/components/Header";
import TitleSectionAluno from "../../src/components/TitleSectionAluno";
import { useAuth } from "../../src/providers/auth";
import { useAvisos } from "../../src/providers/avisosProvider";

import styles from "./style.module.scss";

function Avisos() {
	const { login } = useAuth();
	const { avisos } = useAvisos();

	console.log(avisos);

	
	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Avisos</title>
					</Head>

					<Header />

					<main className={styles.main}>
						<div className={styles.maxContainer}>
							<div className={styles.informacoes}>
								<TitleSectionAluno
									caminhoImagem="/images/icons/warning.svg"
									altImagem="Warning image"
									titulo="AVISOS"
								/>

								{avisos.length >= 1 ? (
									<div className={styles.containerMessage}>
										{avisos.map((message, index) => {
											return (
												<div
													className={styles.message}
													key={message.title + index}
												>
													<h2>{message.title}</h2>
													<p>{message.message}</p>
												</div>
											);
										})}
									</div>
								) : (
									<div className={styles.containerMessage}>
										<div className={styles.message}>
											<h2>Sem avisos</h2>
										</div>
									</div>
								)}
							</div>

							<div className={styles.containerImage}>
								<div className={styles.buttons}>
									<ButtonLocation
										caminhoButton="/portal-do-aluno"
										localName="dashboard"
									/>
								</div>
								<div className={styles.containerImageMobile}>
									<Image
										src="/images/avisos.svg"
										width={351}
										height={351}
										alt="Imagem de avisos"
									/>
								</div>
							</div>
						</div>
					</main>
				</>
			)}
		</>
	);
}

export default Avisos;
