import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { AuthProvider } from "../src/providers/auth";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<NextNProgress />
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

export default MyApp;
