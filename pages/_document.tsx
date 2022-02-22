import Document, {
	Html,
	Main,
	Head,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="shortcut icon"
						href="https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.png"
						type="image/x-icon"
					/>
					<link
						rel="shortcut icon"
						type="image/vnd.microsoft.icon"
						href="https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						href="https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="72x72"
						href="https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="114x114"
						href="https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.pngg"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/https://passosmagicos.org.br/wp-content/uploads/2021/08/cropped-Passos-magicos-pessoas-preto-quadrado-32x32.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
