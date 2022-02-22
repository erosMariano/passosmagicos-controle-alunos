import Head from "next/head";
import React from "react";
import Header from "../../src/components/Header";
import { useAuth } from "../../src/providers/auth";

function Atividades() {
	const { login } = useAuth();

	return (
		<>
			{!login ? (
				<></>
			) : (
				<>
					<Head>
						<title>Passos Mágicos | Atividades</title>
					</Head>

					<Header />
				</>
			)}
		</>
	);
}

export default Atividades;
