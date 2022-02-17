import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineSchedule, AiOutlineWarning } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../../src/providers/auth";
import styles from "./style.module.scss";

function HomeAluno() {
	const [tamanhoLogo, setTamanhoLogo] = useState(210);

	const { login, setLogin } = useAuth();

	if (!login) {
		Router.router?.push("/");
	}
	//função de logout
	function logout() {
		setLogin(false)
	}

	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth <= 800) {
				setTamanhoLogo(150);
			}
		}
	}, []);

	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Portal do Aluno</title>
					</Head>
					<main className={styles.teste}>
						<header className={styles.header}>
							<div className={styles.maxContainer}>
								<div className={styles.logoutHeader}>
									<div>
										{" "}
										<Image
											width={tamanhoLogo}
											height={tamanhoLogo}
											src={
												"/images/logo-passos-magicos-white.png"
											}
											alt="logo passos mágicos"
										/>
									</div>

									<button onClick={logout}>
										<HiOutlineLogout />
										Sair
									</button>
								</div>

								<div className={styles.titlePage}>
									<h1>Olá Eros,</h1>
									<p>SEJA BEM-VINDO AO PORTAL DO ALUNO.</p>
								</div>
							</div>
						</header>

						<section className={styles.section}>
							<div
								className={`${styles.maxContainer} ${styles.flex}`}
							>
								<div className={styles.infosForAlunos}>
									<div
										className={styles.informacoesParaAluno}
									>
										<a
											href="/info1"
											className={styles.cardInfos}
										>
											<AiOutlineSchedule />
											<p>Boletim</p>
										</a>
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										<a
											href="/info1"
											className={styles.cardInfos}
										>
											<BsClipboardData />
											<p>Relatório</p>
										</a>
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										<a
											href="/info1"
											className={styles.cardInfos}
										>
											<AiOutlineWarning />
											<p>Avisos</p>
										</a>
									</div>

									<div
										className={styles.informacoesParaAluno}
									>
										<a
											href="/info1"
											className={styles.cardInfos}
										>
											<BiBookBookmark />
											<p>Atividades</p>
										</a>
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

