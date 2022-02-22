import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSchedule, AiOutlineWarning } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";
import Header from "../../src/components/Header";
import Link from "next/link";
import { useAvisos } from "../../src/providers/avisosProvider";

function HomeAluno() {
	const { login } = useAuth();
	const { avisos } = useAvisos();

	const [lido, setLido] = useState<number>(0);

	//Verifica se email ja foi lido ou não
	let contador = 0;

	useEffect(() => {
		avisos.map((element) => {
			if (element.lido === false) {
				contador++;
				setLido(contador);
			}
		});

	});

	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Portal do Aluno</title>
					</Head>
					<main className={styles.main}>
						<Header />

						<section className={styles.section}>
							<div
								className={`${styles.maxContainer} ${styles.flex}`}
							>
								<div className={styles.infosForAlunos}>
									<div
										className={styles.informacoesParaAluno}
									>
										<Link href="/boletim">
											<a className={styles.cardInfos}>
												<AiOutlineSchedule />
												<p>Boletim</p>
											</a>
										</Link>
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										<Link href="/info1">
											<a className={styles.cardInfos}>
												<BsClipboardData />
												<p>Relatório</p>
											</a>
										</Link>
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										{lido ? (
											<Link href="/avisos">
												<a
													className={`${styles.cardInfos} ${styles.avisoCard}`}
												>
													<AiOutlineWarning />
													<p>Avisos</p>

													<span>{lido}</span>
												</a>
											</Link>
										) : (
											<Link href="/avisos">
												<a
													className={`${styles.cardInfos}`}
												>
													<AiOutlineWarning />
													<p>Avisos</p>
												</a>
											</Link>
										)}
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										<Link href="/atividades">
											<a className={styles.cardInfos}>
												<BiBookBookmark />
												<p>Atividades</p>
											</a>
										</Link>
									</div>
								</div>

								<div className={styles.imagemDesk}>
									<Image
										width={440}
										height={273.23}
										src="/images/portal-do-aluno.svg"
										alt="Imagem portal do aluno"
									/>
								</div>
							</div>
						</section>
					</main>
				</>
			)}
		</>
	);
}

export default HomeAluno;
