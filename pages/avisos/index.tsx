import Head from "next/head";
import Image from "next/image";
import React from "react";
import ButtonLocation from "../../src/components/ButtonLocation";
import Header from "../../src/components/Header";
import TitleSectionAluno from "../../src/components/TitleSectionAluno";
import { informacoes } from "../../src/datas/aviso";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";

function Avisos() {
	const { login } = useAuth();
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

								{informacoes.length >= 1 ? (
									<div className={styles.containerMessage}>
										{informacoes.map((message) => {
											return (
												<div
													className={styles.message}
													key={message.title}
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
										caminho="/portal-do-aluno"
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
