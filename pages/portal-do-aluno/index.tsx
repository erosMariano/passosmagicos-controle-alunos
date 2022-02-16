import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineSchedule, AiOutlineWarning } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import Router from "next/router";

function HomeAluno() {

	function logout(){
		Router.push('/');
	}
	return (
		<main className={styles.teste}>
			<header className={styles.header}>
				<div className={styles.maxContainer}>
					<div className={styles.logoutHeader}>
						<div>
							{" "}
							<Image
								width={210}
								height={200}
								src={"/images/logo-passos-magicos-white.png"}
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
				<div className={`${styles.maxContainer} ${styles.flex}`}>
					<div className={styles.infosForAlunos}>
						<div className={styles.informacoesParaAluno}>
							<a href="/info1" className={styles.cardInfos}>
								<AiOutlineSchedule />
								<p>Boletim</p>
							</a>
						</div>

						<div className={styles.informacoesParaAluno}>
							<a href="/info1" className={styles.cardInfos}>
								<BsClipboardData />
								<p>Relatório</p>
							</a>
						</div>

						<div className={styles.informacoesParaAluno}>
							<a href="/info1" className={styles.cardInfos}>
								<AiOutlineWarning />
								<p>Avisos</p>
							</a>
						</div>

						<div className={styles.informacoesParaAluno}>
							<a href="/info1" className={styles.cardInfos}>
								<BiBookBookmark />
								<p>Atividades</p>
							</a>
						</div>
					</div>

					<div>
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
	);
}

export default HomeAluno;
