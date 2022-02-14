import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
function Login() {
	let navigate = useNavigate();

	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setTypeUser] = useState({ type: "" });

	function handleSubmit() {
		setLoggedIn(true);
		setTypeUser({ type: "aluno" });
	}

	useEffect(() => {
		if (loggedIn && user.type === "aluno") {
			return navigate("/home-aluno");
		}
		if (loggedIn && user.type === "admin") {
			return navigate("/home-admin");
		}
	}, [loggedIn, navigate, user.type]);

	

	return (
		<main className={styles.main}>
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

					<button
						type="submit"
						onClick={handleSubmit}
						className={styles.buttonForm}
					>
						Entrar
					</button>
				</form>
			</div>
		</main>
	);
}

export default Login;
