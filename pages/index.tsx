/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.querySelector("main")!.style.setProperty("--vh", `${vh}px`);
	});

	return (
		<>
			<Head>
				<title>Passos Mágicos | Login</title>
			</Head>
			<main className={`${styles.main}`}>
				<img
					src="/images/bannerLoginEsquerda.svg"
					alt="Banner com estrelas"
					className={`${styles.imageBanner} ${styles.ImagemEsquerda}`}
				/>
				<img
					src="/images/bannerLoginDireita.svg"
					alt="Banner com estrelas"
					className={`${styles.imageBanner} ${styles.ImagemDireita}`}
				/>

				<div className={styles.containerForm}>
					<img
						src="/images/logoPM.png"
						alt="Logo passos mágicos"
						className={`${styles.logo}`}
					/>

					<form className={styles.form}>
						<h1 className={styles.formH1}>Seja bem vindo</h1>
						<p className={styles.formP}>
							Insira suas credenciais para acessar sua conta{" "}
						</p>

						<label htmlFor="emailLogin">
							<img
								className={styles.iconeForm}
								src="/images/icons/email.svg"
								alt="Icone de envelope"
							/>
							<input
								className={styles.inputForm}
								name="user"
								type="email"
								placeholder="Digite seu email"
								id="emailLogin"
								required
							/>
						</label>

						<label htmlFor="passwordLogin">
							<img
								className={styles.iconeForm}
								src="/images/icons/password.svg"
								alt="Icone de cadeado"
							/>
							<input
								className={styles.inputForm}
								type="password"
								name="password"
								placeholder="Digite sua senha"
								id="passwordLogin"
								minLength={8}
								autoComplete="true"
								required
							/>
						</label>

						<button type="submit" className={styles.buttonForm}>
							Entrar
						</button>
					</form>
				</div>
			</main>
		</>
	);
};

export default Home;
