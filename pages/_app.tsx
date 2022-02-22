import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { AuthProvider } from "../src/providers/auth";
import { AvisosProvider } from "../src/providers/avisosProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<AvisosProvider>
					<NextNProgress />
					<Component {...pageProps} />
				</AvisosProvider>
			</AuthProvider>
		</>
	);
}

export default MyApp;
