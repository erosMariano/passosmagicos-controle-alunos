import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../../providers/auth";
import styles from "./style.module.scss";

function Header() {
	const [tamanhoLogo, setTamanhoLogo] = useState(210);
	const { logout } = useAuth();
	
	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth <= 800) {
				setTamanhoLogo(150);
			}
		}
	}, [])


	return (
		<header className={styles.header}>
			<div className={styles.maxContainer}>
				<div className={styles.logoutHeader}>
					<div>
						{" "}
						<Image
							width={tamanhoLogo}
							height={tamanhoLogo}
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
	);
}

export default Header;
