import React from "react";
import styles from "./style.module.scss";
function Login() {
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
				<img src="/images/logoPM.png" alt="Logo passos mágicos" className={`${styles.logo}`}/>

				<form className={styles.form}>
					<h1 className={styles.formH1}>Seja bem vindo</h1>
					<p className={styles.formP}>Insira suas credenciais para acessar sua conta </p>

					<label htmlFor="emailLogin">
						<img className={styles.iconeForm}
							src="/images/icons/email.svg"
							alt="Icone de envelope"
						/>
						<input
              className={styles.inputForm}
							type="email"
							placeholder="Digite seu email"
							id="emailLogin"
						/>
					</label>

					<label htmlFor="passwordLogin">
						<img className={styles.iconeForm}
							src="/images/icons/password.svg"
							alt="Icone de cadeado"
						/>
						<input
              className={styles.inputForm}
							type="password"
							placeholder="Digite sua senha"
							id="passwordLogin"
						/>
					</label>

          <button type="submit" className={styles.buttonForm}>Entrar</button>
				</form>
			</div>
		</main>
	);
}

export default Login;
