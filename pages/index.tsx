/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	const [loginUser, setLoginUser] = useState({
		user: "",
		password: "",
	});

	const notify = (error: string) =>
		toast.error(error, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	function onChangeInputs(e: ChangeEvent<HTMLInputElement>) {
		const { value, name } = e.target;

		setLoginUser({
			...loginUser,
			[name]: value,
		});
	}

	function validateForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();

		if (
			loginUser.user === "teste@gmail.com" &&
			loginUser.password === "12345678"
		) {
			Router.push("/portal-do-aluno");
		} else if (loginUser.user !== "teste@gmail.com") {
			notify("email inválido");
		}else if(loginUser.password !== "12345678"){
			notify("Senha inválida");
		}
	}

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
				<div>
					<ToastContainer />
				</div>

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
								onChange={(e) => onChangeInputs(e)}
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
								onChange={(e) => onChangeInputs(e)}
							/>
						</label>

						<button
							className={styles.buttonForm}
							onClick={(e) => validateForm(e)}
						>
							Entrar
						</button>
					</form>
				</div>
			</main>
		</>
	);
};

export default Home;
